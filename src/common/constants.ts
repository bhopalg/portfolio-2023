import { UsesListProps } from "@/components/uses/uses.model";
import * as process from "process";

export const EXPERIENCE_START_YEAR = 2014;
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

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
    name: "Uses",
    href: "/uses",
  },
  {
    name: "My Docs",
    href: "https://my-docs.gbhopal.co.uk",
    target: "_blank",
  },
];

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
        imageUrl: "/macbook-pro.jpeg",
        link: "https://www.apple.com/shop/buy-mac/macbook-pro/14-inch",
        description: "14 inch, M1 Pro, 32GB RAM, 1TB SSD",
      },
      {
        name: "ipad Mini",
        imageUrl: "/ipad-mini.webp",
        link: "https://www.apple.com/ipad-mini/",
        description: "6th Generation, 64GB",
        transitionDelay: "delay-100",
      },
      {
        name: "LG HDR 4K Display",
        imageUrl: "/lg-monitors.jpeg",
        link: "https://www.lg.com/uk/monitors/lg-27UK650",
        description: "27 inch, 4K, HDR",
        transitionDelay: "delay-200",
      },
      {
        name: "Logitech MX Master 3",
        imageUrl: "/logitech-mx-master.jpeg",
        link: "https://www.logitech.com/en-gb/products/mice/mx-master-3s.910-006559.html",
        description: "Wireless Mouse",
        transitionDelay: "delay-300",
      },
      {
        name: "Logitech MX Keys",
        imageUrl: "/logitech-mx-keys.jpeg",
        link: "https://www.logitech.com/en-gb/products/keyboards/mx-keys-wireless-keyboard.html",
        description: "Wireless Keyboard",
        transitionDelay: "delay-[400ms]",
      },
      {
        name: "iPhone 13 Pro",
        imageUrl: "/iphone-13-pro.jpg",
        link: "https://www.apple.com/iphone-13-pro/",
        description: "128GB, Sierra Blue",
        transitionDelay: "delay-500",
      },
    ],
  },
  {
    title: "Development tools",
    description: "My main development tools",
    items: [
      {
        name: "IntelliJ IDEA",
        imageUrl: "/intellij-idea.png",
        link: "https://www.jetbrains.com/idea/",
        description: "My main IDE",
      },
      {
        name: "Intellij PyCharm",
        imageUrl: "/pycharm.png",
        link: "https://www.jetbrains.com/pycharm/",
        description: "My main Python IDE",
        transitionDelay: "delay-100",
      },
      {
        name: "iTerm2",
        imageUrl: "/iterm2.png",
        link: "https://iterm2.com/",
        description: "My main terminal",
        transitionDelay: "delay-200",
      },
      {
        name: "Fish Shell",
        imageUrl: "/fish-shell.png",
        link: "https://fishshell.com/",
        description: "My main shell",
        transitionDelay: "delay-300",
      },
    ],
  },
  {
    title: "Productivity",
    description: "My main productivity tools",
    items: [
      {
        name: "Alfred",
        imageUrl: "/alfred.png",
        link: "https://www.alfredapp.com/",
        description: "I use Alfred to launch applications, search the web, and more",
        transitionDelay: "delay-100",
      },
      {
        name: "Airmail",
        imageUrl: "/airmail.png",
        link: "https://airmailapp.com/",
        description: "My main email client",
        transitionDelay: "delay-200",
      },
      {
        name: "Brave Browser",
        imageUrl: "/brave-browser.svg",
        link: "https://brave.com/",
        description: "My main browser",
        transitionDelay: "delay-300",
      },
    ],
  },
];
