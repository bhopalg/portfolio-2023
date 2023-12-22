import { ArrowPathIcon, HomeIcon, LinkIcon, RectangleGroupIcon, TableCellsIcon, WindowIcon } from "@heroicons/react/20/solid";
import TailwindCSSIcon from "@/components/icons/TailwindCSS";
import ReactIcon from "@/components/icons/React";
import Kubernetes from "@/components/icons/Kubernetes";
import BJSSIcon from "@/components/icons/BJSS";
import GitHub from "@/components/icons/GitHub";
import Instagram from "@/components/icons/Instagram";
import Linkedin from "@/components/icons/Linkedin";
import Twitter from "@/components/icons/Twitter";
import RES from "@/components/icons/RES";

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
    logo: "/sdm-logo.jpeg",
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

export const MILLISECONDS_IN_ONE_MINUTE = 60000;

export interface MyDocsNavigation {
  name: string;
  href: string;
  icon?: any;
  isHome?: boolean;
  children?: MyDocsNavigation[];
}

export const MY_DOCS_NAVIGATION: MyDocsNavigation[] = [
  { name: "Home", href: "/", icon: HomeIcon, isHome: true },
  { name: "Table of contents", href: "/my-docs", icon: TableCellsIcon },
  {
    name: "Useful Links",
    href: "/my-docs/useful-links",
    icon: LinkIcon,
  },
  {
    name: "Tailwind CSS",
    href: "/my-docs/tailwindcss",
    icon: TailwindCSSIcon,
    children: [
      {
        name: "Templates",
        href: "/templates",
        icon: RectangleGroupIcon,
        children: [
          { name: "Side Navigation", href: "/side-nav", icon: WindowIcon },
          { name: "Loading Spinner", href: "/loading-spinner", icon: ArrowPathIcon },
        ],
      },
    ],
  },
  {
    name: "React",
    href: "/my-docs/react",
    icon: ReactIcon,
    children: [
      {
        name: "React Query",
        href: "/react-query",
        icon: ReactIcon,
      },
    ],
  },
  {
    name: "Kubernetes",
    href: "/my-docs/kubernetes",
    icon: Kubernetes,
  },
];
