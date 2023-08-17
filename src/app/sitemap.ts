import { MetadataRoute } from "next";
import { NAVIGATION } from "@/common/constants";

const BASE_URL = "https://gbhopal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAVIGATION.map(({ href }) => ({
    url: `${BASE_URL}${href}`,
    lastModified: new Date(),
  }));
}
