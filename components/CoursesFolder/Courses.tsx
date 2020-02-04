import React from "react";
import Image from "../AMP/AmpImage";
import { useAmp } from "next/amp";

const Courses = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <>
      <section className="cards">
        <div className="cards__b">
          <h2>Kurser</h2>
          <div className="cards__block">
            <article className="cards__panels">
              <div className="card__panels__div">
                <div className="card__panels__div__img">
                  <Image
                    src="./images/yoga1.jpg"
                    width="800"
                    height="600"
                    alt="hello"
                    layout="intrinsic"
                  />
                </div>
              </div>
              <div className="card__panels__div text">
                <div className="card__panels__div__header">
                  <h3>Yoga kurs 1</h3>
                  <span>Platser 20</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis vel reiciendis corporis pariatur adipisci illo quis
                  explicabo ex aperiam suscipit.
                </p>
                <button>Boka</button>
              </div>
            </article>
            <article className="cards__panels">
              <div className="card__panels__div">
                <div className="card__panels__div__img">
                  <Image
                    src="./images/yoga2.jpg"
                    width="800"
                    height="600"
                    alt="hello"
                    layout="intrinsic"
                  />
                </div>
              </div>
              <div className="card__panels__div text">
                <div className="card__panels__div__header">
                  <h3>Yoga kurs 2</h3>
                  <span>Platser 20</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis vel reiciendis corporis pariatur adipisci illo quis
                  explicabo ex aperiam suscipit.
                </p>
                <button>Boka</button>
              </div>
            </article>
            <article className="cards__panels">
              <div className="card__panels__div">
                <div className="card__panels__div__img">
                  <Image
                    src="./images/yoga3.jpg"
                    width={isAmp ? "800" : "100%"}
                    height={isAmp ? "600" : "auto"}
                    alt="hello"
                    layout="intrinsic"
                  />
                </div>
              </div>
              <div className="card__panels__div text">
                <div className="card__panels__div__header">
                  <h3>Yoga kurs 3</h3>
                  <span>Platser 20</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis vel reiciendis corporis pariatur adipisci illo quis
                  explicabo ex aperiam suscipit.
                </p>
                <button>Boka</button>
              </div>
            </article>
          </div>
        </div>
      </section>
      <style jsx>{`
        .cards {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .cards__b {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 2rem 0;
        }
        img {
          object-fit: contain;
          height: auto;
        }
        .cards__block {
          padding: 0 1rem;
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .card__panels__div__img {
          display: flex;
          justify-content: center;
          align-items: center;
          max-height: 230px;
          overflow: hidden;
        }
        .cards__panels {
          margin: 1rem;
          flex: 1 1 300px;
          justify-self: center;
          align-self: center;
          background: #f9f9f9;
          max-width: 400px;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
        }
        h2 {
          margin-bottom: 2rem;
        }
        .card__panels__div {
          display: flex;
          justify-content: center;
        }
        .card__panels__div text {
          display: flex;
          flex-direction: column;
        }
        .card__panels__div__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .text {
          display: flex;
          flex-direction: column;
          padding: 1rem;
        }
        .text p {
          padding: 1rem 0 2rem 0;
        }
      `}</style>
    </>
  );
};

export default Courses;
