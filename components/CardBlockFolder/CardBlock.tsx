import React from "react";
import { GiAllSeeingEye } from "react-icons/gi";
import { useAmp } from "next/amp";
import { cardData } from "../dummyData";

const CardBlock = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    cardData && (
      <>
        <section id="cards" className="cards">
          <h3>What is yoga?</h3>
          <div className="cards__block">
            {cardData.length > 0 &&
              cardData.map((card, index) => (
                <article
                  key={index}
                  className="cards__panels"
                  style={index[2] && { margin: "0" }}
                >
                  <div className="card__panels__div">
                    <h3>{card.name}</h3>
                  </div>
                  <div className="card__panels__div">
                    <GiAllSeeingEye color="gray" size="8rem" />
                  </div>
                  <div className="card__panels__div text">
                    <p>{card.description}</p>
                  </div>
                  <div className="card__panels__div">
                    <button className="main-btn">Läs mer</button>
                  </div>
                </article>
              ))}
          </div>
        </section>
        <style jsx>{`
          .cards {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            ${isAmp && "padding-top: 3rem;"}
            ${isAmp && "padding-bottom: 3rem;"}
          }
          .cards__block {
            display: flex;
            max-width: 960px;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }
          .cards__panels {
            margin-top: 1rem;
            margin-right: 1rem;
            flex: 1 1 300px;
            justify-self: center;
            align-self: center;
            background: #f9f9f9;
            border-radius: 1rem;
            max-width: 312px;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
            -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
            box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          }
          .card__panels__div {
            display: flex;
            justify-content: center;
            padding: 1rem;
          }
          .text {
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }
          ::-webkit-scrollbar-track {
            background: #f9f9f9;
          }
        `}</style>
      </>
    )
  );
};

export default CardBlock;
