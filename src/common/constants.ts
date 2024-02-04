import BJSSIcon from "@/components/icons/BJSS";
import GitHub from "@/components/icons/GitHub";
import Instagram from "@/components/icons/Instagram";
import Linkedin from "@/components/icons/Linkedin";
import Twitter from "@/components/icons/Twitter";
import RES from "@/components/icons/RES";
import SDS from "@/components/icons/SDS";

export const EXPERIENCE_START_YEAR = 2014;

export const NAVIGATION = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about-me",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

interface ResumeItem {
  company: string;
  title: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  logo?: string;
  start: string;
  end: string | { label: string; dateTime: number };
  href: string;
  exclude: boolean;
}

export const RESUME: ResumeItem[] = [
  {
    company: "BJSS",
    title: "Software Engineer",
    icon: BJSSIcon,
    start: "2023",
    end: {
      label: "Present",
      dateTime: new Date().getFullYear(),
    },
    href: "https://www.bjss.com/",
    exclude: false,
  },
  {
    company: "RES",
    title: "Software Engineer",
    icon: RES,
    start: "2022",
    end: "2023",
    href: "https://www.res-group.com/",
    exclude: false,
  },
  {
    company: "Smarter Data Solutions",
    title: "Software Engineer",
    icon: SDS,
    start: "2016",
    end: "2022",
    href: "https://www.smarterds.com/",
    exclude: false,
  },
];

export const SOCIALS = [
  {
    name: "GitHub",
    link: "https://github.com/bhopalg",
    icon: GitHub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gurpreet-bhopal-063a6a73/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/GBhopal",
    icon: Twitter,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/gurps_bhopal?igshid=YmMyMTA2M2Y=",
    icon: Instagram,
  },
];
