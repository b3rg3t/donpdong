import React from "react";
import Video from "../AMP/AmpVideo";
import heights from "../../helpers/helpdata";
// import { colors } from "../AMP/AmpStyling";
import { useAmp } from "next/amp";
import { FaRegPlayCircle } from "react-icons/fa";

const FirstComponent = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <>
      <div
        className="hero"
        style={
          isAmp ? {
            // - ${heights.navHeigt}
            height: `calc(100vh )`,
            backgroundImage: `url(./images/yogahero.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
          } : null
        }
      >
        <div className="hero__layer">{!isAmp && <Video />}</div>
        <div className="hero__content">
          <div className="hero__box">
            <h1>Welcome to the world of Yoga</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              eaque labore nulla doloremque laborum, odit nostrum
              necessitatibus.
            </p>
            {isAmp && <a href="/" className="main-btn">PLAY VIDEO <FaRegPlayCircle color="white"/></a>}
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          text-align: center;
          background: #ffffff50;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .hero__layer {
          position: absolute;
          background: black;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          -ms-transform: translateX(-50%) translateY(-50%);
          -moz-transform: translateX(-50%) translateY(-50%);
          -webkit-transform: translateX(-50%) translateY(-50%);
          transform: translateX(-50%) translateY(-50%);
          overflow: hidden;
          opacity: ${isAmp ? 0.2 : 1};
          z-index: 5;
        }
        .hero__content {
          max-width: 960px;
          z-index: 10;
        }
        .hero__box {
          padding: 0 2rem;
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
        & > video {
          opacity: 0.5;
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          z-index: 0;
          -ms-transform: translateX(-50%) translateY(-50%);
          -moz-transform: translateX(-50%) translateY(-50%);
          -webkit-transform: translateX(-50%) translateY(-50%);
          transform: translateX(-50%) translateY(-50%);
        }
        a{
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default FirstComponent;
