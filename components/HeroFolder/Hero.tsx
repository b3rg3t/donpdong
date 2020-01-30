import React from "react";
import heights from "../../helpers/picturehelp";
import "./hero.scss";

const FirstComponent = (): React.ReactElement => {
  return (
    <>
      <section
        className="hero"
        style={{
          height: `calc(100vh - ${heights.navHeigt})`,
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
    </>
  );
};

export default FirstComponent;
