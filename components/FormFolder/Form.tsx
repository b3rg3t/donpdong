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
      const postBasin = await axios.post(
        `${helpdata.url}`,
        data,
        {
          headers
        }
      );
      response = await postBasin;
      if (response.status === 200) {
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.log("Something went wrong" + response.status);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Something went wrong, try again later");
    }
  };

  return (
    <section className="contact">
      <h2 className="contact__head">Contact</h2>
      <div className="contact__form__div">
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            aria-label="name"
            className="contact__form__input"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
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
            placeholder="Write a message"
            required
          />
          <Loading loading={loading} />
          <input
            className="contact__form__button"
            type="submit"
            value="Submit"
            // disabled={!isDisabled}
          />
          <br />
        </form>
      </div>
    </section>
  );
};

export default Form;
