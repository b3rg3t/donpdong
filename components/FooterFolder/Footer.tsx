import React from "react";
import "./footer.scss";
import heights from "../../helpers/helpdata";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = (): React.ReactElement => {
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
    </>
  );
};

export default Footer;
