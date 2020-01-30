import React from "react";
import Link from "next/link";
import "./navigation.scss";
import heights from "../../helpers/helpdata";

const Navigation = (): React.ReactElement => {
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
    </>
  );
};

export default Navigation;
