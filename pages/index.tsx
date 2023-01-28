import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section id={"section-2"}>
        <div className={"w-full h-screen bg-black"}>
          <h1>sis</h1>
        </div>
      </section>
    </>
  );
}
