export interface Meta {
  author: string;
  date: string;
  title: string;
  description: string;
}

export async function importPost(postFileName: string) {
  const { meta, default: component }: { meta: Meta; default: any } = await import(`../posts/${postFileName}`);
  return {
    slug: postFileName.replace(/(\/index)?\.mdx$/, ""),
    meta: meta as Meta,
    component,
  };
}
