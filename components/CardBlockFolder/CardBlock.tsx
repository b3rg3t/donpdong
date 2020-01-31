import React from "react";
import { GiCaduceus, GiTurd, GiHemp } from "react-icons/gi";

const CardBlock = (): React.ReactElement => {
  return (
    <>
      <section className="cards">
        <div className="cards__block">
          <article className="cards__panels">
            <div className="card__panels__div">
              <h3>Hello</h3>
            </div>
            <div className="card__panels__div">
              <GiHemp color="gray" size="8rem" />
            </div>
            <div className="card__panels__div">
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
              <h3>Hello</h3>
            </div>
            <div className="card__panels__div">
              <GiTurd color="gray" size="8rem" />
            </div>
            <div className="card__panels__div">
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
              <h3>Hello</h3>
            </div>
            <div className="card__panels__div">
              <GiCaduceus color="gray" size="8rem" />
            </div>
            <div className="card__panels__div">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              vel reiciendis corporis pariatur adipisci illo quis explicabo ex
              aperiam suscipit, dolorem cupiditate nobis esse animi sequi totam
              dolorum molestias dicta!
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
        }
        .cards__block {
          padding: 0 1rem;
          display: flex;
          width: 100%;
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
        .card__panels__div{
            display: flex;
            justify-content: center;
            padding: 1rem;
        }
        img {
          object-fit: contain;
        }
      `}</style>
    </>
  );
};

export default CardBlock;
