import React, { useContext } from "react";
import Image from "../AMP/AmpImage";
import { useAmp } from "next/amp";
// import { courseData } from "../dummyData";
import { colors } from "../../helpers/helpdata";
import DateBox from "../DateFolder/Date";
import { DataContext } from "../../pages/index";

const Courses = (): React.ReactElement => {
  const isAmp = useAmp();

  const courses = useContext(DataContext);

  const courseData = courses.data.allCourses;

  // var dateObj = new Date();
  // var month = dateObj.getUTCMonth() + 1; //months from 1-12
  // var day = dateObj.getUTCDate();
  // var year = dateObj.getUTCFullYear();

  // let newdate = year + "/" + month + "/" + day;
  // console.log(newdate);
  return (
    <>
      <section id="courses" className="cards">
        <div className="cards__b">
          <h2>Kurser</h2>
          <div className="cards__block">
            {courseData &&
              courseData.map((course, index) => (
                <article key={index} className="cards__panels">
                  <div className="card__panels__div">
                    <div className="card__panels__div__img">
                      <Image
                        src={course.image.url}
                        width={isAmp ? "800" : "450"}
                        height={isAmp ? "600" : "auto"}
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
                        <DateBox date={course.date} />
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
        .external-link {
          transition: all 0.5s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          width: 160px;
          margin: auto;
          font-weight: 700;
          font-size: 1.2rem;
          background-color: ${colors.secondary};
          color: ${colors.white};
          border-radius: 30px;
          border: 1px solid ${colors.secondary};
          padding: 0.5rem 1rem;
          cursor: pointer;
        }
        .external-link:hover {
          background: ${colors.primary};
          border: 1px solid ${colors.primary};
        }
        .external-link:focus {
          outline: none;
          border: 1px solid ${colors.primary};
          border-radius: 30px;
        }
        .external-link:disabled {
          cursor: not-allowed;
          background-color: ${colors.lightgray};
          border: 1px solid ${colors.lightgray};
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
  );
};

export default Courses;
