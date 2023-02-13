import { AboutMe } from "@/components/about-me";
import { Hero } from "@/components/hero";
import Head from "next/head";

const DESCRIPTION =
  "Explore my portfolio website showcasing my skills and experience in web development. I'm a full-stack developer proficient in web technologies like React, Node.js, Express, and MongoDB. Check out my projects, resume, and contact information";
const KEYWORDS = [
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
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Gurp&apos;s Portfolio</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS.join(", ")} />
      </Head>
      <section className={"relative"}>
        <Hero />
      </section>
      <AboutMe />
    </>
  );
}
