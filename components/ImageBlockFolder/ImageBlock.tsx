import React from "react";
import "./imageblock.scss";

const ImageBlock = (): React.ReactElement => {
  return (
    <section
      className="image-block"
      style={{
        height: `100vh`,
        backgroundImage: `url(./images/yoga1.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >
      <div className="image-block__layer" />
      <div className="image-block__content">
        <div>
          <h3>Hello ImageBlock</h3>
        </div>
        <div className="image-block__content__boxes">
          <div>
            <img src="./images/yoga4.jpg" alt="Yoga is best" width="300px" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              facere fugit vel. Vitae quod itaque ea perferendis optio? Harum et
              delectus recusandae? Explicabo, porro! Veniam aperiam ducimus
              delectus alias voluptates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBlock;
