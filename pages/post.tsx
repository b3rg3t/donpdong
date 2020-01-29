import { withRouter } from "next/router";
import Layout from "../components/LayoutFolder/Layout";
type PostProps = {
  router?: any;
};
const Post: React.FunctionComponent<PostProps> = ({ router }) => {
  return (
    <Layout title="Post">
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};
export default withRouter(Post);
