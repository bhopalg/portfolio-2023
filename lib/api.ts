import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getPosts = () => {
  const files = fs.readdirSync(path.join("posts"));
  return files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      data,
    };
  });
};

export const getPost = (slug: string) => {
  const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), "utf8");
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};
