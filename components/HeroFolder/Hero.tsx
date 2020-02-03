import React from "react";
// import heights from "../../helpers/picturehelp";
import "./hero.scss";
import { useAmp } from "next/amp";
import { colors } from "../AMP/AmpStyling";

const FirstComponent = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <>
      <section
        className="hero"
        style={{
          // - ${heights.navHeigt}
          height: `calc(100vh )`,
          backgroundImage: `url(./images/yogahero.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div className="hero__layer"></div>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eaque
          labore nulla doloremque laborum, odit nostrum necessitatibus.
          Assumenda eaque aperiam repellat nisi iste dolorum sint delectus
          asperiores. A, harum consequuntur?
        </p>
        <p className="hero__quote">
          <i>"Lorem ipsum dolor sit amet consectetur adipisicing elit"</i>
        </p>
      </section>
      {isAmp && (
        <style jsx global>{`
          .hero {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
            text-align: center;
          }
          .hero__quote {
            position: absolute;
            bottom: 1rem;
            right: 4rem;
          }
          .hero__layer {
            opacity: 0.7;
            width: 100%;
            height: 100%;
            position: absolute;
            background: rgb(253, 253, 253);
          }
          .hero p {
            max-width: 70ch;
            z-index: 2;
          }
          .hero h1 {
            z-index: 2;
          }
        `}</style>
      )}
    </>
  );
};

export default FirstComponent;
