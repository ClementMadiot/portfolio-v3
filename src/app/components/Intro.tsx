import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  BrainCog,
  FolderCode,
  Upload,
  BadgeCheck,
} from "lucide-react";
// Component
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { GmailIcon, LinkedinIcon } from "../constants/socials";

const Intro = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      {/*  */}
      <div id="intro" className="flex-[2] w-full flex flex-col gap-2">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects</p>
          <div className="flex flex-col gap-4">
            {MY_EXPERIENCE.map((exp, index) => (
              <Experience key={index} {...exp} />
            ))}
          </div>
        </Card>
        <Card className="p-[18px] flex-1">
          <p className="text-lg text-muted-foreground pb-2">Contact</p>
          {MY_CONTACT.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-2">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Certifications</p>
          <div>
            {MY_CERTIFICATION.map((cert, index) => (
              <Certification key={index} {...cert} />
            ))}
          </div>
        </Card>
        <Card className="w-full p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Outils</p>
          <div className="grid grid-cols-2 grid-rows-3 ">
            {MY_OUTILS.map((outil, index) => (
              <Outils key={index} {...outil} />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};
// Experience
const MY_EXPERIENCE = [
  {
    logo: BrainCog,
    title: "Brainwave",
    description:
      "Landing page. Brainwave explore les possibilités du chat basé sur l'intelligence artificielle 🚀",
    url: "https://brainwave-ai-cm.netlify.app/",
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
    title: "StoreIt",
    description:
      "Offre des fonctionnalités telles que le téléchargement, le partage et le stockage de fichiers.",
    url: "https://github.com/ClementMadiot/StoreIt-nextjs",
    progress: true,
  },
];
type ExperienceProps = {
  logo: React.ElementType;
  title: string;
  description: string;
  url: string;
  progress?: boolean;
};
const Experience = (props: ExperienceProps) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      className="inline-flex w-full gap-4 items-center hover:bg-accent/50 transition-colors p-2 rounded-[10px]"
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
    url: "https://brainwave-ai-cm.netlify.app/",
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
type CertificationProps = {
  image: string;
  title: string;
  date: string;
  url: string;
};
const Certification = (props: CertificationProps) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      className="flex w-full gap-4 items-center hover:bg-accent/50 transition-colors p-2 rounded-[10px]"
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
      <div className="md:hidden">
        <Upload size={18} />
      </div>
    </Link>
  );
};
const MY_CONTACT = [
  {
    image: "/assets/porfile-linkedin.jpeg",
    mediumImage: LinkedinIcon,
    name: "Clément Madiot",
    description: "Mon Linkedin",
    url: "https://www.linkedin.com/in/cl%C3%A9ment-madiot-9862b824a/",
  },
  {
    image: "/assets/porfile-linkedin.jpeg",
    mediumImage: GmailIcon,
    name: "clementmadiot09@gmail.com",
    description: "Mon mail",
    url: "mailto:clementmadiot09@gmail.com",
  },
];

const ContactCard = (props: {
  image: string;
  mediumImage: React.ElementType;
  name: string;
  description: string;
  url: string;
}) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      className="w-full hover:bg-accent/50 transition-colors rounded-[10px]"
    >
      <Card
        id="contact"
        className="p-3 bg-accent/10 flex items-center gap-4 cursor-pointer"
      >
        <div className="flex relative">
          <Image
            src={props.image}
            alt={props.name}
            width={40}
            height={40}
            className="z-0 rounded-full object-contain"
          />
          <props.mediumImage
            size={16}
            className="absolute -bottom-1 left-6 z-50 rounded-full object-contain bg-background"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="sm:text-sm text-xs font-semibold">{props.name}</p>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight className="ml-auto" />
      </Card>
    </Link>
  );
};
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
type OutilsProps = {
  title: string;
  level: string;
};
const Outils = (props: OutilsProps) => {
  return (
    <div className="flex w-full gap-4 items-center hover:bg-accent/50 transition-colors p-2 rounded-[10px]">

      <BadgeCheck size={24} />
      <div className="flex flex-col items-start  text-start w-full lg:block">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.level}</p>
      </div>
    </div>
  );
};

export default Intro;
