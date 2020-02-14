import React from "react";
import { colors } from "../../helpers/helpdata";

interface DateBoxProps {
  date: string;
}
const DateBox = ({ date }: DateBoxProps): React.ReactElement => {
  return (
    <>
      <div className="date-box">
        <h4>Date:</h4>
        <p><b>{date}</b></p>
      </div>
      <style jsx>{`
        .date-box {
          height: 72px;
          font-size: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: end;
          text-align: center;
        }
        .date-box__heading {
          width: 100%;
          color: white;
          background-color: ${colors.secondary};
        }
        .date-box__date {
          padding: 0.2rem 0;
        }
        .date-box__date p {
          padding: 0 0.5rem;
          font-weight: 700;
        }
        .date-box__heading h4 {
          color: white;
        }
      `}</style>
    </>
  );
};

export default DateBox;
