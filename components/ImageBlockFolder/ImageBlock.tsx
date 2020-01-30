import React from "react";
import "./imageblock.scss";
import { imageData } from "../dummyData";

const ImageBlock = (): React.ReactElement => {
  console.log(imageData);
  return imageData ? (
    <>
      {imageData.map((img, index) => (
        <section
          key={index}
          className="image-block"
          style={{
            backgroundImage: `url(${img.pic})`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        >
          <div className="image-block__layer" />
          <div className="image-block__content">
            <div>
              <h3>{img.name}</h3>
            </div>
            <div className="image-block__content__boxes">
              <div className="image-block__content__boxes__img">
                <img src={img.smallPic} alt={img.alt} />
              </div>
              <div className="image-block__content__boxes__text">
                <p>
                  <strong>{img.descripion}</strong>
                </p>
                <p>{img.fulltext}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  ) : (
    <h5>Loading..</h5>
  );
};

export default ImageBlock;
