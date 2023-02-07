import { Article } from "@/models/article.model";
import glob from "fast-glob";
import * as path from "path";

async function importArticle(articleFilename: string) {
  const { meta, default: component }: any = await import(`../pages/articles/${articleFilename}`);
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

export async function getAllArticles() {
  const articleFilenames: string[] = await glob(["*.mdx", "*/index.mdx"], {
    cwd: path.join(process.cwd(), "pages/articles"),
  });

  const articles: Article[] = await Promise.all(articleFilenames.map(importArticle));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return articles.sort((a, z) => new Date(z.date) - new Date(a.date));
}
