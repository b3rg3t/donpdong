import React from "react";

import Layout from "../components/LayoutFolder/Layout";
import Hero from "../components/HeroFolder/Hero";
import ImageBlock from "../components/ImageBlockFolder/ImageBlock";
// import LazyLoad from "react-lazyload";
import ProfilBlock from "../components/ProfileFolder/ProfilBlock";
import CardBlock from "../components/CardBlockFolder/CardBlock";
import { useAmp } from "next/amp";
import AmpStyling from "../components/AMP/AmpStyling";
import ContactBlock from "../components/ContactBlockFolder/ContactBlock";
import { SEOdata } from "../helpers/helpdata";
import Courses from "../components/CoursesFolder/Courses";

export const config = { amp: "hybrid" };

const Index: React.FunctionComponent = () => {
  const isAmp = useAmp();
  return (
    <Layout title={`${SEOdata.title} | Home`}>
      {!isAmp ? (
        <>
          <Hero />
          <CardBlock />
          <ProfilBlock />
          <ImageBlock />
          {/* <LazyLoad height={200}> */}
          {/* </LazyLoad> */}
          <Courses />
          <ContactBlock />
          <AmpStyling />
        </>
      ) : (
        <>
          <Hero />
          <CardBlock />
          <ProfilBlock />
          <ImageBlock />
          <Courses />
          <ContactBlock />
          <AmpStyling />
        </>
      )}
    </Layout>
  );
};
export default Index;
