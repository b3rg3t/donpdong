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
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
      <AmpStyling />
    </Layout>
  );
};
export default About;
