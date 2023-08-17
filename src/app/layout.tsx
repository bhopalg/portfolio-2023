import "@/styles/globals.css";
import "@code-hike/mdx/dist/index.css";
import { Roboto_Mono } from "next/font/google";
import BaseLayout from "@/components/BaseLayout";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"h-full bg-black overflow-x-hidden font-sans" + robotoMono.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
