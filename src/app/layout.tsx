import "@/styles/globals.css";
import { Roboto_Mono } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib";
import LayoutHeight from "@/components/LayoutHeight";
import MouseFollower from "@/components/MouseFollower";

const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono" });

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
  metadataBase: new URL("https://gbhopal.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("bg-black overflow-hidden font-roboto", robotoMono.variable)}>
        <Header />
        <LayoutHeight className="flex-1 flex flex-col">
          <main>{children}</main>
        </LayoutHeight>
        <Footer />
        <MouseFollower />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
