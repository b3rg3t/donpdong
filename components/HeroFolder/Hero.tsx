import React from "react";
import Video from "../AMP/AmpVideo";
// import heights from "../../helpers/picturehelp";
// import { colors } from "../AMP/AmpStyling";

const FirstComponent = (): React.ReactElement => {
  return (
    <>
      <div
        className="hero"
        style={{
          // - ${heights.navHeigt}
          height: `calc(100vh )`,
          // backgroundImage: `url(./images/yogahero.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div className="hero__layer">
          <Video  />
        </div>
        <div className="hero__content">
          <div className="hero__box">
            <h1>Welcome to the world of Yoga</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              eaque labore nulla doloremque laborum, odit nostrum
              necessitatibus.
            </p>
            <p className="hero__quote">
              <i>"Lorem ipsum dolor sit amet consectetur adipisicing elit"</i>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: relative;
          text-align: center;
        }
        .hero__quote {
          color: white;
          position: absolute;
          bottom: 1rem;
          right: 4rem;
        }
        .hero__layer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          overflow: hidden;
          z-index: -100;
        }
        .hero__content {
          max-width: 960px;
          z-index: 2;
        }
        .hero__box {
          padding: 0 2rem;
          height: 200px;
        }
        .hero p {
          color: white;
          max-width: 70ch;
          z-index: 2;
          text-align: start;
        }
        .hero h1 {
          color: white;
          z-index: 2;
          text-align: start;
        }
        @media only screen and (max-width: 600px) {
          .hero__quote {
            right: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default FirstComponent;
