import { BlogLayout } from "@/components/blogs/blog-layout";
import { getPost, getPosts } from "@/lib/api";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

function Post({
  content,
  data,
}: {
  data: { [_: string]: any };
  content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>;
}) {
  return (
    <BlogLayout metadata={data}>
      <MDXRemote {...content} />
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
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
