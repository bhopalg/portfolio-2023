import "@/styles/globals.css";
import "@code-hike/mdx/dist/index.css";
import { Roboto_Mono } from "next/font/google";
import BaseLayout from "@/components/BaseLayout";
import { Metadata } from "next";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gurps's Portfolio",
  description:
    "Explore my portfolio website showcasing my skills and experience in web development. I'm a full-stack developer proficient in web technologies like React, Node.js, Express, and MongoDB. Check out my projects, resume, and contact information",
  keywords: [
    "Portfolio website",
    "Web development",
    "Front-end development",
    "Back-end development",
    "Full-stack development",
    "Projects",
    "Skills",
    "Experience",
    "Resume",
    "About me",
    "Contact",
    "UI/UX",
    "Responsive design",
    "Web accessibility",
    "SEO optimization",
    "Code snippets",
    "Web technologies",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "REST API",
    "GraphQL",
    "Git",
    "Agile methodology",
  ],
  twitter: {
    card: "summary",
    title: "Gurp's Portfolio",
    description:
      "Explore my portfolio website showcasing my skills and experience in web development. I'm a full-stack developer proficient in web technologies like React, Node.js, Express, and MongoDB. Check out my projects, resume, and contact information",
  },
  openGraph: {
    title: "Gurp's Portfolio",
    description:
      "Explore my portfolio website showcasing my skills and experience in web development. I'm a full-stack developer proficient in web technologies like React, Node.js, Express, and MongoDB. Check out my projects, resume, and contact information",

    url: "https://gbhopal.com",
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={"h-full bg-black overflow-x-hidden font-sans" + robotoMono.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
