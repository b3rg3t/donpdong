import React from "react";
import heights from "../../helpers/picturehelp";

const FirstComponent = (): React.ReactElement => {
  const heroHeight = `100vh - ${heights.navHeigt}`;
  return (
    <>
      <div className="hero" style={{ height: `${heroHeight}` }}>
        yoyoyo
      </div>
    </>
  );
};

export default FirstComponent;
