import { UsesListProps } from "@/components/uses/list";

export const NAVIGATION = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/#about-me",
  },
  {
    name: "Articles",
    href: "/articles",
  },
  {
    name: "Uses",
    href: "/uses",
  },
];

export const EXPERIENCE_START_YEAR = 2014;

export const RESUME = [
  {
    company: "RES",
    title: "Software Engineer",
    logo: "res-group.svg",
    start: "2022",
    end: {
      label: "Present",
      dateTime: new Date().getFullYear(),
    },
    href: "https://www.res-group.com/",
  },
  {
    company: "Smarter Data Solutions",
    title: "Software Engineer",
    logo: "/sdm-logo.jpeg",
    start: "2016",
    end: "2022",
    href: "https://www.smarterds.com/",
  },
  {
    company: "Sports Direct",
    title: "Web Designer",
    logo: "sports-direct.svg",
    start: "2014",
    end: "2015",
    href: "https://www.sportsdirectplc.com",
  },
];

export const SOCIALS = [
  {
    name: "GitHub",
    link: "https://github.com/bhopalg",
    image: "/github-icon.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gurpreet-bhopal-063a6a73/",
    image: "/linkedin-icon.svg",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/GBhopal",
    image: "/twitter-icon.svg",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/gurps_bhopal?igshid=YmMyMTA2M2Y=",
    image: "/instagram-icon.svg",
  },
];

export const USES_LIST: UsesListProps[] = [
  {
    title: "Workstation",
    description: "My main workstation",
    items: [
      {
        name: "MacBook Pro",
        imageUrl: "/macbook-pro.png",
        link: "https://www.apple.com/macbook-pro-13/",
        description: "My main workstation",
      },
    ],
  },
];
