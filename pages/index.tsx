import React from "react";

import Layout from "../components/LayoutFolder/Layout";
import FirstComponent from "../components/HeroFolder/Hero";
import ImageBlock from "../components/ImageBlockFolder/ImageBlock";
import LazyLoad from "react-lazyload";
import Form from "../components/FormFolder/Form";
import ProfilBlock from "../components/ProfileFolder/ProfilBlock";
import CardBlock from "../components/CardBlockFolder/CardBlock";
import { useAmp } from "next/amp";
import AmpStyling from "../components/AMP/AmpStyling";

export const config = { amp: "hybrid" };

const Index: React.FunctionComponent = () => {
  const isAmp = useAmp();
  return (
    <Layout title="Home">
      {!isAmp ? (
        <>
          <FirstComponent />
          <CardBlock />
          <LazyLoad height={200}>
            <ProfilBlock />
          </LazyLoad>
          <LazyLoad height={200}>
            <ImageBlock />
          </LazyLoad>
          <Form />
        </>
      ) : (
        <>
          <FirstComponent />
          <CardBlock />
          <ProfilBlock />
          <ImageBlock />
          {/* <Form /> */}
          <AmpStyling />
        </>
      )}
    </Layout>
  );
};
export default Index;
