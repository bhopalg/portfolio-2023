import AboutMeGrid from "@/components/about-me/ui/AboutMeGrid";
import AboutMeColumn from "@/components/about-me/ui/AboutMeColumn";
import Experience from "@/components/Experience";
import { Frameworks } from "@/components/Frameworks";
import Title from "@/components/about-me/ui/Title";
import AboutMeItem from "@/components/about-me/ui/AboutMeItem";
import Resume from "@/components/Resume";
import Socials from "@/components/Socials";

export default function AboutMe() {
  return (
    <section id="about-me" className="relative grow flex items-center overflow-x-hidden p-10">
      <AboutMeGrid>
        <AboutMeColumn>
          <Experience />
        </AboutMeColumn>
        <AboutMeColumn className="justify-between">
          <Frameworks />
          <AboutMeItem className="py-8">
            <span className="sr-only">About Me</span>
            <Title size="large">About Me</Title>
          </AboutMeItem>
          <Resume />
        </AboutMeColumn>
        <AboutMeColumn className="justify-between">
          <AboutMeItem className="py-8">
            <span className="sr-only">Website</span>
            <Title>Websites</Title>
          </AboutMeItem>
          <AboutMeItem className="py-8">
            <span className="sr-only">Apps</span>
            <Title>Apps</Title>
          </AboutMeItem>
          <Socials />
        </AboutMeColumn>
      </AboutMeGrid>
    </section>
  );
}
