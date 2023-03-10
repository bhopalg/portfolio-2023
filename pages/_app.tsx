import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import "@code-hike/mdx/dist/index.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
