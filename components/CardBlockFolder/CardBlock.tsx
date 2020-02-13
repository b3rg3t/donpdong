import React from "react";
import { GiCaduceus, GiOlive, GiAllSeeingEye } from "react-icons/gi";

const CardBlock = (): React.ReactElement => {
  return (
    <>
      <section id="cards" className="cards">
        <div className="cards__block">
          <article className="cards__panels">
            <div className="card__panels__div">
              <h3>Yoga 1</h3>
            </div>
            <div className="card__panels__div">
              <GiAllSeeingEye color="gray" size="8rem" />
            </div>
            <div className="card__panels__div text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              vel reiciendis corporis pariatur adipisci illo quis explicabo ex
              aperiam suscipit, dolorem cupiditate nobis esse animi sequi totam
              dolorum molestias dicta!
            </div>
            <div className="card__panels__div">
              <button>Läs mer</button>
            </div>
          </article>
          <div className="cards__panels">
            <div className="card__panels__div">
              <h3>Yoga 2</h3>
            </div>
            <div className="card__panels__div">
              <GiOlive color="gray" size="8rem" />
            </div>
            <div className="card__panels__div text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              vel reiciendis corporis pariatur adipisci illo quis explicabo ex
              aperiam suscipit, dolorem cupiditate nobis esse animi sequi totam
              dolorum molestias dicta!
            </div>
            <div className="card__panels__div">
              <button>Läs mer</button>
            </div>
          </div>
          <div className="cards__panels">
            <div className="card__panels__div">
              <h3>Yoga 3</h3>
            </div>
            <div className="card__panels__div">
              <GiCaduceus color="gray" size="8rem" />
            </div>
            <div className="card__panels__div text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              vel reiciendis corporis pariatur adipisci illo quis explicabo ex
              aperiam suscipit, dolorem cupiditate nobis esse animi sequi totam
              dolorum molestias dicta! aperiam suscipit, dolorem cupiditate
              nobis esse animi sequi totam dolorum molestias dicta! aperiam suscipit, dolorem cupiditate nobis esse animi sequi totam
              dolorum molestias dicta! aperiam suscipit, dolorem cupiditate
              nobis esse animi sequi totam dolorum molestias dicta!
            </div>
            <div className="card__panels__div">
              <button>Läs mer</button>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .cards {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .cards__block {
          padding: 0 1rem;
          display: flex;
          max-width: 1080px;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .cards__panels {
          margin: 1rem;
          flex: 1 1 300px;
          justify-self: center;
          align-self: center;
          background: #f9f9f9;
          border-radius: 1rem;
          padding: 1rem;
          max-width: 400px;
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
          height: 150px;
          overflow: auto;
        }
        ::-webkit-scrollbar-track {
            background: #f9f9f9; 
        }
      `}</style>
    </>
  );
};

export default CardBlock;
