import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const data = [
  {
    id: 1,
    title: "Heading1",
    comment: "This is the quote",
    author: "Queen Elizabeth"
  },
  {
    id: 2,
    title: "Heading2",
    comment: "Blubb blubb blubb",
    author: "King Gustav"
  },
  {
    id: 3,
    title: "Heading3",
    comment: "All this for nothing?",
    author: "James Bond"
  },
  {
    id: 4,
    title: "Heading4",
    comment: "Dear Boris, can love become...",
    author: "love, P"
  },
  {
    id: 5,
    title: "Heading5",
    comment: "First step for monkeys",
    author: "Kurt Kurtsson"
  }
];

const CommentBlock = (): React.ReactElement => {
  const [comments, setComments] = useState(data);

  const handleLeftClick = () => {
    let newArray = comments;
    let lastItem = newArray.pop();
    let updatedArray = [lastItem].concat(newArray);
    setComments(updatedArray);
  };
  const handleRightClick = () => {
    let newArray = comments;
    let firstItem = newArray.shift();
    let updatedArray = newArray.concat([firstItem]);
    setComments(updatedArray);
  };
  return (
    <>
      <div className="comment-block">
        <div className="comment-block__slider-container">
          <button
            onClick={handleLeftClick}
            className="slider-container__left-btn"
          >
            <IoIosArrowBack />
          </button>
          <div className="slider-container__block">
            {comments.map((comment, index) => (
              <article
                key={index}
                className={`slider-container__innerblock`}
              >
                <h4>{comment.title}</h4>
                <p>
                  <i>"{comment.comment}"</i>
                </p>
                <p>
                  - <i>{comment.author}</i>
                </p>
              </article>
            ))}
          </div>
          <button
            onClick={handleRightClick}
            className="slider-container__right-btn"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <style jsx>{`
        .comment-block {
          heigth: 100vh;
          background: lightgray;
        }
        .comment-block__slider-container {
          margin: auto;
          max-width: 728px;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }
        .slider-container__block {
          padding: 0 2rem;
          display: flex;
          justify-content: center;
        }
        .slider-container__innerblock {
          display: flex;
          background: white;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem;
          margin: 1rem;
          -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          border-radius: 1rem;
          min-width: 200px;
          height: 150px;
        }
        .slider-container__innerblock:hover {
        }
        .movedRight {
          transform: translate(calc(200px + 2rem));
          transition: all 0.5s ease;
        }
        .movedLeft {
          transform: translate(calc(-200px - 2rem));
          transition: all 0.5s ease;
        }
        .slider-container__left-btn {
          position: absolute;
          left: 0;
          z-index: 10;
          font-size: 2rem;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          color: gray;
          border: none;
          background: none;
          cursor: pointer;
        }
        .slider-container__left-btn:hover {
          color: lightgray;
        }
        .slider-container__left-btn:focus {
          outline: none;
        }
        .slider-container__right-btn {
          position: absolute;
          right: 0;
          z-index: 10;
          font-size: 2rem;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          color: gray;
          border: none;
          background: none;
          cursor: pointer;
        }
        .slider-container__right-btn:hover {
          color: lightgray;
        }
        .slider-container__right-btn:focus {
          outline: none;
        }
      `}</style>
    </>
  );
};

export default CommentBlock;
