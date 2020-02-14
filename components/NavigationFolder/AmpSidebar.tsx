import React from "react";
import Link from "next/link";
import { colors } from "../../helpers/helpdata";

const AmpSidebar = (): React.ReactElement => {
  return (
    <>
      <div style={{ display: "block" }}>
        <amp-sidebar id="sidebar1" layout="nodisplay" side="right">
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
        </amp-sidebar>
      </div>
      <style jsx>{`
        #sidebar1 {
          background-color: ${colors.secondary};
          z-index: 2147483647;
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
      `}</style>
    </>
  );
};

export default AmpSidebar;
