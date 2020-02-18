import React, { useContext } from "react";
import Image from "../AMP/AmpImage";
import { useAmp } from "next/amp";
import DateBox from "../DateFolder/Date";
import { DataContext } from "../../pages/index";
import Loading from "../loading";
import * as moment from "moment";
import "moment/locale/sv";
import { colors } from "../../helpers/helpdata";

const Courses = (): React.ReactElement => {
  const isAmp = useAmp();

  const courses = useContext(DataContext);

  const courseData = courses?.data?.allCourses;

  return courseData?.length > 0 ? (
    <>
      <div className="cards">
        <div className="cards__b">
          <h2>Kurser</h2>
          <div className="cards__block">
            {courseData &&
              courseData.map((course, index) => {
                //@ts-ignore
                let date = moment(course.date).format("llll");
                let day = date.substring(0, 3).toUpperCase();
                let number = date.substring(4, 6);
                let month = date.substring(7, 10).toUpperCase();
                return (
                  <article key={index} className="cards__panels">
                    <div className="card__panels__div background">
                      <div className="card__panels__div__img">
                        <Image
                          src={course.image.url}
                          width={isAmp ? `${course.image.width}` : `auto`}
                          height={isAmp ? `${course.image.height}` : "220"}
                          alt={course.image.alt}
                          layout="intrinsic"
                        />
                      </div>
                    </div>
                    <div className="card__panels__div text">
                      <div className="card__panels__div__header">
                        <div className="card__panels__div__header__box">
                          <h3>{course.title}</h3>
                          <span>{`Antal platser: ${
                            course.spots ? course.spots : "0"
                          }`}</span>
                          <span>{`Plats: ${
                            course.location ? course.location : "Okänd"
                          }`}</span>
                        </div>
                        <div className="date">
                          <DateBox
                            month={month}
                            number={number}
                            day={day}
                          />
                        </div>
                      </div>
                      <div className="textP">
                        <p>{course.content}</p>
                      </div>
                      <a
                        className="external-link"
                        href={course.externalurl}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Se tillgänglighet
                      </a>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      </div>
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
          background-color: #e7e7e7;
          min-height: ${isAmp ? "" :  "200px"};
          max-height: ${isAmp ? "175px" :  "220px"};
          position: relative;
          overflow: hidden;
        }
        .background {
          background: ${colors.lightgray};
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
        .card__panels__div__header__box {
          display: flex;
          flex-direction: column;
        }
        .card__panels__div__header__box span {
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

export default Courses;
