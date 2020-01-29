import React from "react";

import Layout from "../components/LayoutFolder/Layout";
import FirstComponent from "../components/firstcomponent";

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <h1>Hello Next.js 👋</h1>
      <FirstComponent />
    </Layout>
  );
};
export default Index;
