import React from "react";
import Link from "next/link";
import { colors, SocialMedia } from "../../helpers/helpdata";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const AmpSidebar = (): React.ReactElement => {
  return (
    <>
      <div style={{ display: "block" }}>
        <amp-sidebar id="sidebar1" layout="nodisplay" side="right">
          <nav>
            <ul>
              <li>
                <Link href="#cards">
                  <a>Yoga</a>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <a>Om</a>
                </Link>
              </li>
              <li>
                <Link href="#articles">
                  <a>Artiklar</a>
                </Link>
              </li>
              <li>
                <Link href="#courses">
                  <a>Kurser</a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a>Kontakt</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <ul className="social-media-div">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  title={SocialMedia.linkedin.title}
                  href={SocialMedia.linkedin.url}
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  title={SocialMedia.instagram.title}
                  href={SocialMedia.instagram.url}
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  title={SocialMedia.facebook.title}
                  href={SocialMedia.facebook.url}
                >
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
        </amp-sidebar>
      </div>
      <style jsx>{`
        #sidebar1 {
          background-color: ${colors.secondary};
          z-index: 2147483647;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .menu {
          fill: #fff;
          height: 24px;
          width: 24px;
          cursor: pointer;
          margin: auto;
        }
        button {
          border: none;
          background: none;
          color: white;
          padding: 0;
          font-size: 1.6rem;
          display: flex;
          align-items: center;
        }
        ul {
          margin: 0;
          padding: 1rem;
        }
        li {
          list-style: none;
          padding: 0;
          margin: 1rem;
          text-align: center;
        }
        a {
          color: white;
          text-decoration: none;
        }
        .social-media-div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default AmpSidebar;
