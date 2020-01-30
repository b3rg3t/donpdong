import React from "react";
import "./imageblock.scss";
import { imageData } from "../dummyData";

const ImageBlock = (): React.ReactElement => {
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
          <div
            className="image-block__layer"
            style={{
              background: `${img.overlayColor}`,
              opacity: `${img.opacity}`
            }}
          />
          <div className="image-block__content">
            <div>
              <h3>{img.name}</h3>
            </div>
            <div className={`image-block__content__boxes ${img.position}`}>
              <div className="image-block__content__boxes__img">
                <img src={img.smallPic} alt={img.alt} />
              </div>
              <div className="image-block__content__boxes__text">
                <p className="text-top">{img.descripion}</p>
                <p className="text-bottom">{img.fulltext}</p>
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
