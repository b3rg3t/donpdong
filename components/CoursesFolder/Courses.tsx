import React from "react";
import Image from "../AMP/AmpImage";
import { useAmp } from "next/amp";
import { courseData } from "../dummyData";
import { colors } from "../../helpers/helpdata";
import DateBox from "../DateFolder/Date";

const Courses = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <>
      <section className="cards">
        <div className="cards__b">
          <h2>Kurser</h2>
          <div className="cards__block">
            {courseData &&
              courseData.map(block => (
                <article className="cards__panels">
                  <div className="card__panels__div">
                    <div className="card__panels__div__img">
                      <Image
                        src={block.pic}
                        width={isAmp ? "800" : "450"}
                        height={isAmp ? "600" : "auto"}
                        alt={block.alt}
                        layout="intrinsic"
                      />
                    </div>
                  </div>
                  <div className="card__panels__div text">
                    <div className="card__panels__div__header">
                      <div className="card__panels__div__header__box">
                        <h3>{block.name.substring(0, 20)}</h3>
                        <span>{`Antal platser: ${block.spots ? block.spots : "0"}`}</span>
                        <span>{`Plats: ${block.location ? block.location : "Okänd"}`}</span>
                      </div>
                      <div className="date">
                        <DateBox
                          month={block.date.month}
                          number={block.date.number}
                          day={block.date.day}
                        />
                      </div>
                    </div>
                    <div className="textP">
                      <p>{block.fulltext.substring(0, 180)}</p>
                    </div>
                    <button disabled={!block.buttonActive && true}>{block.buttonText ? block.buttonText : "Se tillgänglighet"}</button>
                  </div>
                </article>
              ))}
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
          width: 100%;
          margin: 2rem 0;
          max-width: 1200px;
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
          background-color: lightgray;
          min-height: 220px;
          max-height: 220px;
          position: relative;
          overflow: hidden;
        }
        img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }
        .cards__panels {
          margin: 1rem;
          flex: 1 1 300px;
          justify-self: center;
          align-self: center;
          background: #f9f9f9;
          max-width: 350px;
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
          border-bottom: 1px solid lightgray;
          padding-bottom: 0.5rem;
        }
        .card__panels__div__header__box{
          display: flex;
          flex-direction: column;
        }
        .card__panels__div__header__box span{
          font-size: 0.8rem;
        }
        .text {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          
        }
        .textP {
          padding: 1rem 0 1rem 0;
          min-height: 120px;
        }
      `}</style>
    </>
  );
};

export default Courses;
