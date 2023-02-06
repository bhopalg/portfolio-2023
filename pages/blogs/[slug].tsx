import { BlogLayout } from "@/components/blogs/blog-layout";
import { getPost, getPosts } from "@/lib/api";
import dynamic from "next/dynamic";

function getDynamicPost(slug: string) {
  return dynamic(() => import(`../../posts/${slug}.mdx`), {
    loading: () => <p>Loading...</p>,
  });
}

function Post({ data }: { data: { [_: string]: any } }) {
  const MDXContent = getDynamicPost(data.slug);

  return (
    <BlogLayout metadata={data}>
      <MDXContent />
    </BlogLayout>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const post = getPost(slug);

  return {
    props: {
      data: { slug, ...post.data },
    },
  };
};
