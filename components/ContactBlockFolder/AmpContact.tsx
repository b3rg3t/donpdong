import React from "react";
// import { useAmp } from "next/amp";
import Form from "../FormFolder/Form";
import MapContainer from "../MapFolder/MapContainer";
import { profileData } from "../dummyData";
import ContactStyling from "./ContactStyling";

const AmpContact = (): React.ReactElement => {
  //   const isAmp = useAmp();
  return (
    <>
      <div
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
      </div>
      <ContactStyling />
    </>
  );
};

export default AmpContact;
