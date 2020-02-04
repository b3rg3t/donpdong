import * as React from "react";
import Head from "next/head";
import Navigation from "../NavigationFolder/Navigation";
import Footer from "../FooterFolder/Footer";

type LayoutProps = {
  title?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div className="layout">
    <Head>
      <title>{title}</title>
      <script
        async
        custom-element="amp-form"
        src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
      ></script>
      <script
        async
        custom-element="amp-iframe"
        src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
      ></script>
    </Head>
    <Navigation />
    <main className="site-content">{children}</main>
    <Footer />
  </div>
);
export default Layout;
