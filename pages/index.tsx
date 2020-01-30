import React from "react";

import Layout from "../components/LayoutFolder/Layout";
import FirstComponent from "../components/HeroFolder/Hero";
import ImageBlock from "../components/ImageBlockFolder/ImageBlock";
import LazyLoad from "react-lazyload";
import Form from "../components/FormFolder/Form";
import ProfilBlock from "../components/ProfileFolder/ProfilBlock";

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <FirstComponent />
      <ProfilBlock />
      <LazyLoad height={200}>
        <ImageBlock />
      </LazyLoad>
      <Form />
    </Layout>
  );
};
export default Index;
