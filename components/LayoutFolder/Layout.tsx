import * as React from "react";
import Head from "next/head";
import Navigation from "../NavigationFolder/Navigation";
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
    <main className="site-content">{children}</main>
    <Footer />
  </div>
);
export default Layout;
