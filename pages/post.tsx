import { withRouter } from "next/router";
import Layout from "../components/LayoutFolder/Layout";
import AmpStyling from "../components/AMP/AmpStyling";
import { SEOdata } from "../helpers/helpdata";
type PostProps = {
  router?: any;
};
const Post: React.FunctionComponent<PostProps> = ({ router }) => {
  return (
    <Layout title={`${SEOdata.title} | Post`}>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
      <AmpStyling />
    </Layout>
  );
};
export default withRouter(Post);
