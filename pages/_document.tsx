import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className={"h-full"}>
      <Head />
      <body className={"h-full bg-black"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
