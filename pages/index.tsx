import { Experience } from "@/components/experience";
import { Frameworks } from "@/components/frameworks";
import { Hero } from "@/components/hero";
import { Socials } from "@/components/socials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className={"relative"}>
        <Hero />
      </section>
      <section id={"section-2"} className={"relative h-screen flex items-center"}>
        <div className={"grid grid-cols-1 md:grid-cols-3 md:max-w-7xl w-full mx-auto gap-10"}>
          <Experience />
          <div className={"col-span-1 grid grid-rows-1 gap-6"}>
            <Frameworks />
            <Image src={"/computer.jpg"} className={"rounded-xl w-full"} alt={"Gurps"} width={250} height={250} />
          </div>
          <div className={"col-span-1 h-full grid grid-cols-1 gap-6"}>
            <Socials />
            <div className={"col-span-1 bg-gray-200 rounded-xl flex justify-center items-center py-8"}></div>
            <div className={"col-span-1 bg-gray-200 rounded-xl flex justify-center items-center py-8"}></div>
          </div>
        </div>
      </section>
    </>
  );
}
