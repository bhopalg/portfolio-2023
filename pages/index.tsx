import { Experience } from "@/components/experience";
import { Frameworks } from "@/components/frameworks";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <section className={"relative"}>
        <Hero />
      </section>
      <section id={"section-2"} className={"relative"}>
        <div className={"grid grid-cols-1 md:grid-cols-3 h-full md:max-w-7xl w-full mx-auto gap-10"}>
          <Experience />
          <div className={"col-span-1 grid grid-rows-1 gap-6 md:grid-rows-2"}>
            <Frameworks />
          </div>
          <div className={"col-span-1 bg-gray-100 h-full"}></div>
        </div>
      </section>
    </>
  );
}
