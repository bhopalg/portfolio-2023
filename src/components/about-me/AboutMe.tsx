import Experience from "@/components/Experience";
import Frameworks from "@/components/Frameworks";
import Resume from "@/components/Resume";
import Socials from "@/components/Socials";
import { AboutMeColumn, AboutMeGrid, AboutMeItem, Title } from "./ui";

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
