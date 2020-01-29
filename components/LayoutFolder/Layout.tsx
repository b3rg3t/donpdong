import * as React from "react";
import Head from "next/head";
import Navigation from "../Navigation";
import Footer from "../FooterFolder/Footer";
import "./layout.scss";

type LayoutProps = {
  title?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div className="layout">
    <Head>
      <title>{title}</title>
    </Head>
    <Navigation />
    <div className="site-content">{children}</div>
    <Footer />
  </div>
);
export default Layout;
