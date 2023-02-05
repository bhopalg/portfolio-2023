import fs from "fs";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const files = fs.readdirSync(path.join("posts"));
    const posts = files.map((fileName) => {
      const slug = fileName.replace(".mdx", "");
      const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        data,
      };
    });
    res.status(200).json(posts);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
