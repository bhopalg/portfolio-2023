import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { AboutMe } from "@/components/about-me";

export const metadata: Metadata = {
  title: "Gurp's Portfolio",
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
};

export default function Page() {
  return (
    <>
      <section className={"relative"}>
        <Hero />
      </section>
      <AboutMe />
    </>
  );
}
