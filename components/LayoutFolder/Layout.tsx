import * as React from "react";
import Head from "next/head";
import Navigation from "../Navigation";
import Footer from "../Footer";
type LayoutProps = {
  title?: string;
};
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};
const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div style={layoutStyle}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation />
    {children}
    <Footer />
  </div>
);
export default Layout;