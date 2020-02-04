import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import Link from "next/link";
import AmpStyling from "../components/AMP/AmpStyling";
import { SEOdata } from "../helpers/helpdata";

interface PostLinkProps {
  title?: string;
}
const PostLink = ({ title }: PostLinkProps): React.ReactElement => {
  return (
    <ul>
      <li>
        <Link href={`/post?title=${title}`}>
          <a>{title}</a>
        </Link>
      </li>
    </ul>
  );
};
const About: React.FunctionComponent = () => {
  return (
    <Layout title={`${SEOdata.title} | About`}>
      <h1>This is About page ✌</h1>
      <PostLink title="Hello Yoga" />
      <PostLink title="Learn Yoga is awesome" />
      <PostLink title="Deploy Yoga" />
      <AmpStyling />
    </Layout>
  );
};
export default About;
