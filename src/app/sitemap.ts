import { MetadataRoute } from "next";
import { MY_DOCS_NAVIGATION, MyDocsNavigation, NAVIGATION } from "@/common/constants";

const BASE_URL = "https://gbhopal.com";

function createMyDocsPages(navList: MyDocsNavigation[], prefix: string = ""): string[] {
  let urls: string[] = [];

  for (const item of navList) {
    // Combine the current prefix and the href of the current item to get the full URL
    const currentUrl = prefix + item.href;

    // If the current item has children, recursively call generateUrls
    // with the current_url as the new prefix
    if (item.children) {
      urls = urls.concat(createMyDocsPages(item.children, currentUrl));
    } else if (currentUrl !== "/") {
      // Exclude the root URL
      urls.push(currentUrl);
    }
  }

  return urls;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const myDocsPages = createMyDocsPages(MY_DOCS_NAVIGATION).map((url) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
  }));
  const mainPages = NAVIGATION.map(({ href }) => ({
    url: `${BASE_URL}${href}`,
    lastModified: new Date(),
  }));

  return [...mainPages, ...myDocsPages];
}
