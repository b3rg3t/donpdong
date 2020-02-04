import React from "react";
// import { useAmp } from "next/amp";
import Form from "../FormFolder/Form";
import MapContainer from "../MapFolder/MapContainer";

const ContactBlock = (): React.ReactElement => {
  //   const isAmp = useAmp();
  return (
    <>
      <section className="contact-block">
        <MapContainer />
        <Form />
      </section>
      <style jsx>{`
        .contact-block {
          height: 100vh;
          width: 960px;
          margin: auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
};

export default ContactBlock;