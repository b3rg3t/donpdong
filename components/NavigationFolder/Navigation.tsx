import React from "react";
import Link from "next/link";
import heights from "../../helpers/helpdata";
import { useAmp } from "next/amp";
import { colors } from "../../helpers/helpdata";
import { SEOdata } from "../../helpers/helpdata";
import { GiEarthAfricaEurope } from "react-icons/gi";

const Navigation = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <>
      <header>
        <nav style={{ height: `${heights.navHeigt}` }}>
          <div className="nav__boxes">
            <Link href={isAmp ? `/?amp=1` : `/`}>
              <a>
                <GiEarthAfricaEurope color="gray" size="3rem" />
                {SEOdata.title.toUpperCase()}
              </a>
            </Link>
          </div>
          <div className="nav__boxes"></div>
          <div className="nav__boxes">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
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
            z-index: 10;
            -webkit-box-shadow: 0 8px 6px -6px ${colors.lightgray};
            -moz-box-shadow: 0 8px 6px -6px ${colors.lightgray};
            box-shadow: 0 8px 6px -6px ${colors.lightgray};
          }
          nav a {
            display: flex;
            align-items: center;
            padding: 0.5rem;
          }
          nav a:hover {
            color: ${colors.secondary};
          }
          nav a:focus {
            outline: none;
            color: ${colors.secondary}
          }
          .nav__boxes {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default Navigation;
