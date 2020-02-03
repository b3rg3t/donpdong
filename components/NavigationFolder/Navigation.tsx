import React from "react";
import Link from "next/link";
import "./navigation.scss";
import heights from "../../helpers/helpdata";
import { useAmp } from "next/amp";
import { colors } from "../AMP/AmpStyling";

const Navigation = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <>
      <header>
        <nav style={{ height: `${heights.navHeigt}` }}>
          <div className="nav__boxes">
            <Link href="/">
              <a>LOGO</a>
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
      {isAmp && (
        <style jsx global>
          {`
            nav {
              position: fixed;
              top: 0;
              width: 100%;
              border-top: 0.5rem solid ${colors.color3};
              background-color: ${colors.color5};
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 10;
              -webkit-box-shadow: 0 8px 6px -6px lightgray;
              -moz-box-shadow: 0 8px 6px -6px lightgray;
              box-shadow: 0 8px 6px -6px lightgray;
            }
            nav a {
              padding: 0.5rem;
            }
            .nav__boxes {
              flex: 1;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>  
      )}
    </>
  );
};

export default Navigation;
