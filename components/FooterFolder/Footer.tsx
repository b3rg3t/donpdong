import React from "react";
import "./footer.scss";
import heights from "../../helpers/picturehelp";

const Footer = (): React.ReactElement => {
  return (
    <>
      <footer style={{ height: `${heights.footerheight}` }}>
        <p>Copywright 2020</p>
      </footer>
    </>
  );
};

export default Footer;
