import React, { useState } from "react";
import "./form.scss";
import Loading from "../loading";
import helpdata from "../../helpers/helpdata";

const axios = require("axios");

const Form = (): React.ReactElement => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    const data = JSON.stringify({
      name: name,
      email: email,
      message: message
    });
    const headers = {
      "Content-Type": "application/json; charset=utf-8"
    };
    let response;
    try {
      const postBasin = await axios.post(`${helpdata.url}`, data, {
        headers
      });
      response = await postBasin;
      if (response.status === 200) {
        console.log("status", response.status);
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
        setSubmitMessage("Email sent");
      } else {
        console.log("Something went wrong" + response.status);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSubmitMessage("Something went wrong, " + error.message);
    }
  };
  const isDisabled = message.length > 0 && email.length > 0 && name.length > 0;
  return (
    <section className="contact">
      <div className="contact__form__div">
        <h3 className="contact__head">Kontakt</h3>
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            aria-label="name"
            className="contact__form__input"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Namn"
            required
          />
          <br />
          <input
            aria-label="email"
            className="contact__form__input"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <br />
          <textarea
            aria-label="message"
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Skriv ett meddelande.."
            required
          />
          <div className="contact__form__loading">
            {loading && <Loading loading={loading} />}
            {submitMessage && <span aria-role="alert">{submitMessage}</span>}
          </div>
          <button
            className="contact__form__button"
            type="submit"
            value="Submit"
            disabled={loading ? isDisabled : !isDisabled}
          >
            {!loading ? "Skicka" : "Skickar.."}
          </button>
          <br />
        </form>
      </div>
    </section>
  );
};

export default Form;
