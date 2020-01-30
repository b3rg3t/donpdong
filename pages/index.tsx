import React from "react";

import Layout from "../components/LayoutFolder/Layout";
import FirstComponent from "../components/HeroFolder/Hero";

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <FirstComponent />
    </Layout>
  );
};
export default Index;
