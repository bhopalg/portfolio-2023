import { AboutMe } from "@/components/about-me";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <section className={"relative"}>
        <Hero />
      </section>
      <AboutMe />
    </>
  );
}
