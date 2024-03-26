import BJSSIcon from "@/components/icons/BJSS";
import GitHub from "@/components/icons/GitHub";
import Instagram from "@/components/icons/Instagram";
import Linkedin from "@/components/icons/Linkedin";
import Twitter from "@/components/icons/Twitter";
import RES from "@/components/icons/RES";
import SDS from "@/components/icons/SDS";
import AzureIcon from "@/components/icons/Azure";
import AWSIcon from "@/components/icons/AWS";
import VercelIcon from "@/components/icons/Vercel";
import SupabaseIcon from "@/components/icons/Supabase";

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
  {
    name: "Things I know",
    href: "/things-i-know",
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

export const CERTIFICATIONS = [
  {
    name: "AWS Cloud Practitioner",
    image: "/aws-certified-cloud-practitioner-badge.png",
    href: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
];

export const CLOUD_SERVICES = [
  {
    name: "AWS",
    icon: AWSIcon,
    href: "https://aws.amazon.com/",
  },
  {
    name: "Azure",
    icon: AzureIcon,
    href: "https://azure.microsoft.com/",
  },
  {
    name: "Vercel",
    icon: VercelIcon,
    href: "https://vercel.com/",
  },
  {
    name: "Supabase",
    icon: SupabaseIcon,
    href: "https://supabase.io/",
  },
];

export const LANGUAGES = [
  {
    name: "Python",
    href: "https://www.python.org/",
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "git",
    href: "https://git-scm.com/",
  },
  {
    name: "Go Lang",
    href: "https://golang.org/",
  },
  {
    name: "Swift",
    href: "https://developer.apple.com/swift/",
  },
  {
    name: "Java",
    href: "https://www.java.com/",
  },
  {
    name: "SQL",
    href: "https://en.wikipedia.org/wiki/SQL",
  },
  {
    name: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
].sort((a, b) => a.name.localeCompare(b.name));

export const FRAMEWORKS = [
  {
    name: "GitHub Actions",
    href: "https://docs.github.com/en/actions",
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/",
  },
  {
    name: "Angular",
    href: "https://angular.io/",
  },
  {
    name: "Docker",
    href: "https://www.docker.com/",
  },
  {
    name: "Kubernetes",
    href: "https://kubernetes.io/",
  },
  {
    name: "GraphQL",
    href: "https://graphql.org/",
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
  {
    name: "MySQL",
    href: "https://www.mysql.com/",
  },
  {
    name: "React",
    href: "https://reactjs.org/",
  },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    name: "Terrafom",
    href: "https://www.terraform.io/",
  },
  {
    name: "NestJS",
    href: "https://nestjs.com/",
  },
  {
    name: "TypeORM",
    href: "https://typeorm.io/",
  },
  {
    name: "AWS CDK",
    href: "https://aws.amazon.com/cdk/",
  },
  {
    name: "JSON",
    href: "https://www.json.org/json-en.html",
  },
  {
    name: "MSSQL",
    href: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
  },
  {
    name: "OpenAI",
    href: "https://openai.com/",
  },
  {
    name: "Playwright",
    href: "https://playwright.dev/",
  },
  {
    name: "Redis",
    href: "https://redis.io/",
  },
  {
    name: "Storybook",
    href: "https://storybook.js.org/",
  },
  {
    name: "Vite",
    href: "https://vitejs.dev/",
  },
  {
    name: "Flask",
    href: "https://flask.palletsprojects.com/",
  },
].sort((a, b) => a.name.localeCompare(b.name));

export const HOVER_EFFECTS_CLASSNAMES = ["duration-300", "ease-in-out", "transition-colors"];

export const CLOUD_FRONT_URL = "https://d36qya9vwg8890.cloudfront.net";
