import React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="sv">
        <Head>
          <meta
            name="description"
            content="Ett svenskt SEO/Sökmotoroptimeringsforum för proffs såväl som nya."
          />
          <meta charSet="utf-8" />
{/* 
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          /> */}

          <link
            href="https://fonts.googleapis.com/css?family=Dosis&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
