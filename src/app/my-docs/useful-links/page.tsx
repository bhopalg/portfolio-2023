import UsefulLinksLayout from "@/components/useful-links/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gurp's Portfolio My Docs - Useful Links",
  description: "List of useful links",
  twitter: {
    card: "summary",
    title: "My Docs - Useful Links",
    description: "List of useful links",
  },
  openGraph: {
    title: "My Docs - Useful Links",
    description: "List of useful links",
    url: "https://my-docs.gbhopal.co.uk",
  },
  keywords: ["useful", "links", "tailwind", "css", "html", "javascript", "react"],
};

export default function Page() {
  return <UsefulLinksLayout />;
}
