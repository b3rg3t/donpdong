import React from "react";
import "./footer.scss";
import heights from "../../helpers/helpdata";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useAmp } from "next/amp";
import { colors } from "../AMP/AmpStyling";

const Footer = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <>
      <footer style={{ height: `${heights.footerheight}` }}>
        <div></div>
        <div>
          <a>
            <FaLinkedin />
          </a>
          <a>
            <FaInstagram />
          </a>
          <a>
            <FaFacebook />
          </a>
        </div>
        <div>
          <p>© Copywright 2020</p>
        </div>
      </footer>
      {isAmp && (
        <style jsx global>{`
          footer {
            background-color: ${colors.color5};
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-bottom: 0.5rem solid ${colors.color3};
            -webkit-box-shadow: 0 8px 6px 8px lightgray;
            -moz-box-shadow: 0 8px 6px 8px lightgray;
            box-shadow: 0 8px 6px 8px lightgray;
            z-index: 10;
          }
          footer a {
            padding: 0.5rem 0.5rem 0 0.5rem;
          }
        `}</style>
      )}
    </>
  );
};

export default Footer;
