import React from "react";
import Link from "next/link";
import { useAmp } from "next/amp";
import heights,{ colors, SEOdata } from "../../helpers/helpdata";

import AmpSidebar from "./AmpSidebar";

import { GiEarthAfricaEurope } from "react-icons/gi";
import { FaBars } from "react-icons/fa";


const Navigation = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <>
      <header>
        {isAmp && <AmpSidebar />}
        <nav style={{ height: `${heights.navHeigt}` }}>
          <div className="nav__boxes">
            <Link href={`#hero`}>
              <a>
                <GiEarthAfricaEurope color="gray" size="3rem" />
                {SEOdata.title.toUpperCase()}
              </a>
            </Link>
          </div>
          <div className="nav__boxes"></div>
          {isAmp ? (
            <div className="nav__boxes amp-button">
              <button
                style={{
                  border: "none",
                  color: `${colors.secondary}`,
                  background: "none",
                  fontSize: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                className="hamburger"
                on="tap:sidebar1.toggle"
              >
                <span aria-label="Toggle Navigation" />
                <FaBars />
              </button>
            </div>
          ) : (
            <div className="nav__boxes">
              <Link href="#cards">
                <a>Yoga</a>
              </Link>
              <Link href="#about">
                <a>Om</a>
              </Link>
              <Link href="#articles">
                <a>Artiklar</a>
              </Link>
              <Link href="#courses">
                <a>Kurser</a>
              </Link>
              <Link href="#contact">
                <a>Kontakt</a>
              </Link>
            </div>
          )}
        </nav>
      </header>
      <style jsx>
        {`
          nav {
            position: fixed;
            top: 0;
            width: 100%;
            border-top: 0.5rem solid ${colors.secondary};
            background-color: ${colors.white};
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            -webkit-box-shadow: 0 8px 6px -6px ${colors.lightgray};
            -moz-box-shadow: 0 8px 6px -6px ${colors.lightgray};
            box-shadow: 0 8px 6px -6px ${colors.lightgray};
          }
          nav a {
            transition: all 0.5s ease;
            display: flex;
            align-items: center;
            padding: 0.5rem;
          }
          nav a:hover {
            color: ${colors.secondary};
          }
          nav a:focus {
            outline: none;
            color: ${colors.secondary};
          }
          .nav__boxes {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .amp-button{
            justify-content: flex-end;
            margin-right: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default Navigation;
