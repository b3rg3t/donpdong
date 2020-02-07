import React from "react";
// import { useAmp } from "next/amp";
import Form from "../FormFolder/Form";
import MapContainer from "../MapFolder/MapContainer";
import { profileData } from "../dummyData";

const ContactBlock = (): React.ReactElement => {
  //   const isAmp = useAmp();
  return (
    <>
      <section
      id="contact"
        className="contact-block"
        style={{
          backgroundImage: `url(./images/yoga1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div
          className="contact-block__layer"
          style={{
            background: `${profileData[0].overlayColor}`,
            opacity: `${profileData[0].opacity}`
          }}
        />

        <div className="contact-block__container">
          <MapContainer />
          <Form />
        </div>
      </section>
      <style jsx>{`
        .contact-block {
          position: relative;
          z-index: 10;
        }
        .contact-block__container {
          min-height: 100vh;
          max-width: 960px;
          margin: auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap-reverse;
          z-index: 20;
          padding: 2rem 0;
        }
        .contact-block__layer {
          opacity: 0.9;
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;
        }
      `}</style>
    </>
  );
};

export default ContactBlock;
