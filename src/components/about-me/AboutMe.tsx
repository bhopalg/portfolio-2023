import AboutMeGrid from "@/components/about-me/ui/AboutMeGrid";
import AboutMeColumn from "@/components/about-me/ui/AboutMeColumn";
import Experience from "@/components/Experience";

export default function AboutMe() {
  return (
    <section id="about-me" className="relative grow flex items-center overflow-x-hidden p-10">
      <AboutMeGrid>
        <AboutMeColumn>
          <Experience />
        </AboutMeColumn>
        <AboutMeColumn>sss</AboutMeColumn>
        <AboutMeColumn>sss</AboutMeColumn>
      </AboutMeGrid>
    </section>
  );
}
