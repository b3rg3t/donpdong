import React from "react";

import Layout from "../components/LayoutFolder/Layout";
import Hero from "../components/HeroFolder/Hero";
import ImageBlock from "../components/ImageBlockFolder/ImageBlock";
import LazyLoad from "react-lazyload";
import ProfilBlock from "../components/ProfileFolder/ProfilBlock";
import CardBlock from "../components/CardBlockFolder/CardBlock";
import AmpStyling from "../components/AMP/AmpStyling";
import ContactBlock from "../components/ContactBlockFolder/ContactBlock";
import { SEOdata } from "../helpers/helpdata";
import Courses from "../components/CoursesFolder/Courses";

import { useAmp } from "next/amp";
import CommentBlock from "./CommentBlockFolder/CommentBlock";

const ComponentRenderer = (props: any): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <Layout title={`${SEOdata.title} | Home`}>
      {!isAmp ? (
        <>
          <CommentBlock />
          {/* <section id="hero">
            <Hero />
          </section>
          <section id="cards">
            <LazyLoad height={200}>
              <CardBlock />
            </LazyLoad>
          </section>
          <section id="about">
            <LazyLoad height={200}>
              <ProfilBlock />
            </LazyLoad>
          </section>
          <section id="articles">
            <LazyLoad height={200}>
              <ImageBlock />
            </LazyLoad>
          </section>
          <section id="courses">
            <LazyLoad height={200}>
              <Courses />
            </LazyLoad>
          </section>
          <section id="contact">
            <LazyLoad height={200}>
              <ContactBlock />
            </LazyLoad>
          </section> */}
          <AmpStyling />
        </>
      ) : (
        <>
          <CommentBlock />
          {/* <section id="hero">
            <Hero />
          </section>
          <section id="cards">
            <CardBlock />
          </section>
          <section id="about">
            <ProfilBlock />
          </section>
          <section id="articles">
            <ImageBlock />
          </section>
          <section id="courses">
            <Courses />
          </section>
          <section id="contact">
            <ContactBlock />
          </section> */}
          <AmpStyling />
        </>
      )}
    </Layout>
  );
};

export default ComponentRenderer;
