import { SITE_URL } from "@/common/constants";
import { getAllPosts } from "@/lib";
import { Article } from "@/models/article.model";

function generateSiteMap(posts: Article[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${SITE_URL}</loc>
     </url>
     <url>
       <loc>${SITE_URL}/#about-me</loc>
     </url>
     <url>
       <loc>${SITE_URL}/#about-me</loc>
     </url>
     <url>
       <loc>${SITE_URL}/articles</loc>
     </url>
     <url>
       <loc>${SITE_URL}/uses</loc>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${SITE_URL}/articles/${slug}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // We don't need to render anything here
}

export async function getServerSideProps({ res }: { res: any }) {
  const posts = (await getAllPosts()).map(({ ...meta }) => meta);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
