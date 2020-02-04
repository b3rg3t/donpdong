import React from "react";
// import "./imageblock.scss";
import { imageData } from "../dummyData";
import Image from "../AMP/AmpImage";
import { useAmp } from "next/amp";
// import { colors } from "../AMP/AmpStyling";

const ImageBlock = (): React.ReactElement => {
  const isAmp = useAmp();
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
                <Image
                  src={img.smallPic}
                  alt={img.alt}
                  width="800"
                  height="500"
                  layout="intrinsic"
                />
              </div>
              <div className="image-block__content__boxes__text">
                <p className="text-top">{img.descripion}</p>
                <p className="text-bottom">{img.fulltext}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
      <style jsx global>{`
        .image-block {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: relative;
        }
        .image-block h3 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .image-block__layer {
          opacity: 0.9;
          width: 100%;
          height: 100%;
          position: absolute;
        }
        .image-block__content {
          z-index: 2;
          padding: 4rem 0;
        }
        .left {
          flex-direction: row-reverse;
        }
        .image-block__content__boxes {
          max-width: 960px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap-reverse;
        }
        .image-block__content__boxes__img {
          flex: 1 1 400px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          padding: 0 2rem;
        }
        .image-block__content__boxes__img img {
          max-width: 100%;
          min-height: 350px;
          max-height: 350px;
          object-fit: cover;
        }
        .image-block__content__boxes__text {
          flex: 1 1 500px;
          padding: 0 2rem 2rem 2rem;
        }
        .text-top {
          padding-bottom: 1rem;
          font-weight: 1000;
        }
        .text-bottom {
          font-weight: 500;
        }
      `}</style>
    </>
  ) : (
    <h5>Loading..</h5>
  );
};

export default ImageBlock;
