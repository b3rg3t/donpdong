import React, { useContext } from "react";
import Image from "../AMP/AmpImage";
// import { useAmp } from "next/amp";
// import { colors } from "../../helpers/helpdata";
import { DataContext } from "../../pages/index";

const ImageBlock = (): React.ReactElement => {
  // const isAmp = useAmp();
  const articles = useContext(DataContext);

  const articleData = articles.data.allArticles;

  console.log(articleData);
  return articleData ? (
    <>
      <section id="articles">
        {articleData.map((img, index) => (
          <div
            key={index}
            className="image-block"
            style={{
              backgroundImage: `url(${img?.backgroundimg?.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center center"
            }}
          >
            <div
              className="image-block__layer"
              style={{
                background: `${img?.overlaycolor?.hex}`,
                opacity: `${img?.opacity}`
              }}
            />
            <div className="image-block__content">
              <div
                className={`image-block__content__boxes ${
                  img.smallImagePosition ? "left" : ""
                }`}
              >
                <div className="image-block__content__boxes__img">
                  <Image
                    src={img.smallimg.url}
                    alt={img.smallimg.alt}
                    width={img.smallimg.width}
                    height={img.smallimg.height}
                    layout="intrinsic"
                  />
                </div>
                <div className="image-block__content__boxes__text">
                  <div>
                    <h3>{img?.title}</h3>
                    {img.topText && <p className="text-top">{img.topText}</p>}
                    {img.bottomText && (
                      <p className="text-bottom">{img.bottomText}</p>
                    )}
                  </div>
                  <div className="button-container">
                    <a className="external-link" href="#courses">Kurser</a>
                  </div>
                </div>
              </div>
            </div>
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
                margin-bottom: 1rem;
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
                position: relative;
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
                min-height: 350px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex: 1 1 500px;
                padding: 0 2rem 0 2rem;
              }
              .button-container{
                display: flex;
                justify-content: center;
              }
              .text-top {
                padding-bottom: 1rem;
                font-weight: 1000;
              }
              .text-bottom {
                font-weight: 500;
              }
              @media only screen and (max-width: 910px) {
                .button-container{
                  margin: 2rem 0;
                }
                .image-block__content__boxes__text {
                  min-height: 100px;
                }
              } 
            `}</style>
          </div>
        ))}
      </section>
    </>
  ) : (
    <h5>Loading..</h5>
  );
};

export default ImageBlock;
