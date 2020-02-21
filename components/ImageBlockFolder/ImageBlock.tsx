import React, { useContext } from "react";
import Image from "../AMP/AmpImage";
import { useAmp } from "next/amp";
// import { colors } from "../../helpers/helpdata";
import LazyLoad from "react-lazyload";
import { DataContext } from "../../pages/index";
import Loading from "../loading";
import { AiFillPicture } from "react-icons/ai";

const PlaceHolder = (): React.ReactElement => (
  <>
    <div>
      <span aria-label="Placeholder div">
        <AiFillPicture color="gray" />
      </span>
    </div>
    <style jsx>
      {`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
          min-width: 366px;
          height: 350px;
          padding: 0 2rem;
        }
      `}
    </style>
  </>
);

const ImageBlock = (): React.ReactElement => {
  const isAmp = useAmp();
  const articles = useContext(DataContext);

  const articleData = articles?.data?.allArticles;

  return articleData?.length > 0 ? (
    <>
      {articleData.map((img, index) => (
        <LazyLoad key={index} height="100vh" offset={[200, 0]}>
          <div
            className="image-block"
            style={{
              backgroundImage:
                img?.backgroundimg?.url && `url(${img?.backgroundimg?.url})`,
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
                  <LazyLoad
                    offset={[-200, 0]}
                    height={350}
                    placeholder={<PlaceHolder />}
                  >
                    <Image
                      src={img.smallimg.url}
                      alt={img.smallimg.alt}
                      width={img.smallimg.width}
                      height={img.smallimg.height}
                      layout="intrinsic"
                    />
                  </LazyLoad>
                </div>
                <div className="image-block__content__boxes__text">
                  <div className="text-box">
                    <h3>{img?.title}</h3>
                    {img.topText && <p className="text-top">{img.topText}</p>}
                    {img.bottomText && (
                      <p className="text-bottom">{img.bottomText}</p>
                    )}
                  </div>
                  <div className="button-container">
                    <a className="external-link" href="#courses">
                      Kurser
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LazyLoad>
      ))}
      <style jsx global>{`
        .image-block {
          animation: easein 3s;
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

        .button-container {
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
          .button-container {
            margin: 2rem 0;
          }
          .image-block__content__boxes__text {
            min-height: 100px;
          }
          .image-block__content__boxes__img {
            padding: 0;
          }
          .image-block__content__boxes__img img{
            padding: 0 2rem;
          }
        }
        @keyframes easein {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  ) : (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Loading loading={true} />
    </div>
  );
};

export default ImageBlock;
