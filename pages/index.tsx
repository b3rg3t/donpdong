import React from "react";

import Layout from "../components/LayoutFolder/Layout";
import FirstComponent from "../components/HeroFolder/Hero";
import ImageBlock from "../components/ImageBlockFolder/ImageBlock";

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <FirstComponent />
      <ImageBlock />
    </Layout>
  );
};
export default Index;
