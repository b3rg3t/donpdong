import React from "react";
import { profileData } from "../dummyData";
import Loading from "../loading";
import "./profileblock.scss";
const ProfilBlock = (): React.ReactElement => {
  return profileData ? (
    <>
      <section
        className="profile-block"
        style={{
          backgroundImage: `url(${profileData[0].pic})`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div
          className="profile-block__layer"
          style={{
            background: `${profileData[0].overlayColor}`,
            opacity: `${profileData[0].opacity}`
          }}
        />
        <div className="profile-block__content">
          <div>
            <h3>{profileData[0].name}</h3>
          </div>
          <div
            className={`profile-block__content__boxes ${profileData[0].position}`}
          >
            <div className="profile-block__content__boxes__img">
              <img src={profileData[0].smallPic} alt={profileData[0].alt} />
            </div>
            <div className="profile-block__content__boxes__text">
              <p className="text-top">{profileData[0].descripion}</p>
              <p className="text-bottom">{profileData[0].fulltext}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : (
    <Loading loading={true} />
  );
};

export default ProfilBlock;
