import Link from "next/link";
import Image from "next/image";
import {
  Bot,
  BrainCog,
  FolderCode,
  Eye,
  EyeOff,
  BadgeCheck,
} from "lucide-react";
// Component
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GmailIcon, LinkedinIcon } from "../constants/socials";
import { Section } from "./layout/Section";
import { ContactCard } from "./layout/ContactCard";

const About = () => {
  return (
    <Section id="compétences" className="flex flex-col gap-4">
      <div className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Compétences</Badge>
        <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          À propos de moi
        </h2>
      </div>
      <div className="flex max-lg:flex-col items-start gap-4">
        <div className="flex-[2] w-full flex flex-col gap-2">
          {/* SIDE PROJECTS  */}
          <Card className="w-full p-4 flex flex-col gap-2 xl:gap-4">
            <p className="text-lg text-muted-foreground font-semibold ">
              Side, fun projects
            </p>
            <div className="flex flex-col gap-4">
              {MY_EXPERIENCE.map((exp, index) => (
                <Experience key={index} {...exp} />
              ))}
            </div>
          </Card>
          {/* CONTACT  */}
          <Card className="p-[18px] flex-1">
            <p className="text-lg text-muted-foreground pb-2 font-semibold">
              Contact
            </p>
            <div className="flex flex-col xl:gap-3">
              {MY_CONTACT.map((contact, index) => (
                <ContactCard key={index} truntract={true} {...contact} classDesc="sm:text-sm" />
              ))}
            </div>
          </Card>
        </div>
        <div className="flex-[2] w-full flex flex-col gap-2">
          {/* CERTIFICATION  */}
          <Card className="p-4 flex-1">
            <p className="text-lg text-muted-foreground font-semibold ">
              Certifications
            </p>
            <div>
              {MY_CERTIFICATION.map((cert, index) => (
                <Certification key={index} {...cert} />
              ))}
            </div>
          </Card>
          {/* OUTIL  */}
          <Card className="w-full p-4 flex-1 flex flex-col gap-2">
            <p className="text-lg text-muted-foreground font-semibold">
              Outils
            </p>
            <div className="grid grid-cols-2 grid-rows-3 ">
              {MY_OUTILS.map((outil, index) => (
                <Outils key={index} {...outil} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
// Experience
const MY_EXPERIENCE = [
  {
    logo: BrainCog,
    title: "GTA VI",
    description:
      "GTA VI Landing Page Clone | Animation avec GSAP, ScrollTrigger",
    url: "https://github.com/ClementMadiot/GTAVI_landing_react",
  },
  {
    logo: Bot,
    title: "OpenAI",
    description:
      "L'IA extrait et résume les éléments clés d'une URL donnée. 🤖",
    url: "https://github.com/ClementMadiot/OpenAI_article_react_API",
  },
  {
    logo: FolderCode,
    title: "BookWise",
    description:
      "Fullstack App avec un admin Dashboard | Next.js, PostgreSQL, Redis, Auth.js",
    url: "https://github.com/ClementMadiot/BookWise-nextjs-app",
    progress: true,
  },
];

const Experience = (props: {
  logo: React.ElementType;
  title: string;
  description: string;
  url: string;
  progress?: boolean;
}) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      className="inline-flex w-full gap-4 items-center hover:bg-accent/50 transition-colors p-2 xl:py-[10px] rounded-[10px]"
    >
      <span className="bg-accent text-accent-foreground p-2 rounded-[4px]">
        <props.logo size={16} />
      </span>
      <div>
        <div className="flex items-center gap-3">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.progress && (
            <Badge variant={"outline"} className="rounded-[6px] bg-progress">
              in progress
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
// Certification
const MY_CERTIFICATION = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvsq9F0YxdNyWbMGNtY_MDOgpcOhYYtZHuzXOC2jBgoOZCfujiLPuzffUjO9KdIQl54s&usqp=CAU",
    title: "Web Developper",
    date: "OpenClassrooms |  2023",
    url: "https://white-avivah-23.tiiny.site/",
  },
  {
    image:
      "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mY2RhNDM4NTI2MDg2MjZmZTQ2ZDdmZDQzMTQ1NzY2ZT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.l-5iyLZMhxA8NPM6apqba6oCeJ4p8f63d6aVep6utAI",
    title: "Responsive Design",
    date: "FreeCodeCamp | 2024",
    url: "https://www.freecodecamp.org/certification/Clement_Madiot/responsive-web-design",
  },
  {
    image:
      "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mY2RhNDM4NTI2MDg2MjZmZTQ2ZDdmZDQzMTQ1NzY2ZT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.l-5iyLZMhxA8NPM6apqba6oCeJ4p8f63d6aVep6utAI",
    title: "JS Algorithms",
    date: "FreeCodeCamp | 2024",
    url: "https://www.freecodecamp.org/certification/Clement_Madiot/javascript-algorithms-and-data-structures-v8",
  },
  {
    image:
      "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mY2RhNDM4NTI2MDg2MjZmZTQ2ZDdmZDQzMTQ1NzY2ZT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.l-5iyLZMhxA8NPM6apqba6oCeJ4p8f63d6aVep6utAI",
    title: "Front End Development",
    date: "FreeCodeCamp | 2024",
    url: "https://www.freecodecamp.org/certification/Clement_Madiot/front-end-development-libraries",
  },
];

const Certification = (props: {
  image: string;
  title: string;
  date: string;
  url: string;
}) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      className="flex w-full gap-4 items-center hover:bg-accent/50 transition-colors p-2 rounded-[10px] group"
    >
      <Image
        className="rounded-[4px] object-contain lg:w-7 lg:h-7"
        src={props.image}
        alt={props.title}
        width={26}
        height={26}
      />

      <div className="flex flex-col md:items-center  md:flex-row md:justify-between w-full lg:block">
        <div className="flex items-center">
          <p className="text-lg font-semibold">{props.title}</p>
        </div>
        <p className="text-sm text-muted-foreground">{props.date}</p>
      </div>
      <div className="lg:mr-4 relative group">
        <Eye
          size={18}
          className="hidden group-hover:block transition-opacity duration-150 lg:absolute lg:opacity-0 lg:group-hover:opacity-100 lg:-top-[9px] lg:right-1"
        />
        <EyeOff
          size={18}
          className="hidden lg:block group-hover:hidden transition-opacity duration-150 lg:absolute lg:opacity-100 lg:group-hover:opacity-0 lg:-top-[9px] lg:right-1"
        />
      </div>
    </Link>
  );
};
const MY_CONTACT = [
  {
    image: "/assets/profile.jpg",
    mediumImage: LinkedinIcon,
    name: "Clément Madiot",
    description: "Mon Linkedin",
    url: "https://www.linkedin.com/in/cl%C3%A9ment-madiot-9862b824a/",
  },
  {
    image: "/assets/profile.jpg",
    mediumImage: GmailIcon,
    name: "clementmadiot09@gmail.com",
    description: "Mon mail",
    url: "mailto:clementmadiot09@gmail.com",
  },
];

// Outils
const MY_OUTILS = [
  {
    title: "ChatGPT",
    level: "Avancé",
  },
  {
    title: "Figma",
    level: "Intermédiaire",
  },
  {
    title: "Copilot",
    level: "Avancé",
  },
  {
    title: "VSCode",
    level: "Avancé",
  },
  {
    title: "git",
    level: "Avancé",
  },
  {
    title: "git",
    level: "Avancé",
  },
];
const Outils = (props: { title: string; level: string }) => {
  return (
    <div className="flex w-full gap-4 items-center p-2">
      <BadgeCheck size={24}  />
      <div className="flex flex-col items-start  text-start w-full lg:block">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.level}</p>
      </div>
    </div>
  );
};

export default About;
