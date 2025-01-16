import React from "react";
import { Section } from "./Section";
import { Card } from "@/components/ui/card";
import { Bot, BrainCog, FolderCode } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Intro = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      {/*  */}
      <div id="intro" className="flex-[3] w-full flex flex-col gap-2">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects</p>
          <div className="flex flex-col gap-4">
            {MY_EXPERIENCE.map((exp, index) => (
              <Experience key={index} {...exp} />
            ))}
          </div>
        </Card>
        <Card className="w-full p-4 flex flex-col gap-2">
        <p className="text-lg text-muted-foreground">Contact</p>
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
        <Card className="p-4 flex-1">
        <p className="text-lg text-muted-foreground">Outils</p>
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
  },
];
type ExperienceProps = {
  logo: React.ElementType;
  title: string;
  description: string;
  url: string;
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
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
// Certification
const MY_CERTIFICATION = [
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvsq9F0YxdNyWbMGNtY_MDOgpcOhYYtZHuzXOC2jBgoOZCfujiLPuzffUjO9KdIQl54s&usqp=CAU",
    title: "Web Developper",
    date: "OpenClassrooms |  2023",
    url: "https://brainwave-ai-cm.netlify.app/",
  },
  {
    image: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mY2RhNDM4NTI2MDg2MjZmZTQ2ZDdmZDQzMTQ1NzY2ZT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.l-5iyLZMhxA8NPM6apqba6oCeJ4p8f63d6aVep6utAI",
    title: "Responsive Design",
    date: "FreeCodeCamp | 2024",
    url: "https://www.freecodecamp.org/certification/Clement_Madiot/responsive-web-design",
  },
  {
    image: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mY2RhNDM4NTI2MDg2MjZmZTQ2ZDdmZDQzMTQ1NzY2ZT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.l-5iyLZMhxA8NPM6apqba6oCeJ4p8f63d6aVep6utAI",
    title: "JS Algorithms",
    date: "FreeCodeCamp | 2024",
    url: "https://www.freecodecamp.org/certification/Clement_Madiot/javascript-algorithms-and-data-structures-v8",
  },
  {
    image: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9mY2RhNDM4NTI2MDg2MjZmZTQ2ZDdmZDQzMTQ1NzY2ZT9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.l-5iyLZMhxA8NPM6apqba6oCeJ4p8f63d6aVep6utAI",
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
      <span className="bg-accent text-accent-foreground p-2 rounded-[4px]">
        <Image src={props.image} alt={props.title} width={16} height={16} />
      </span>
      <div className="flex items-center justify-between w-full lg:block">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};
// Outils
const MY_OUTILS = [
  {
    image:"",
    title: "ChatGPT",
    level: "Avancé",
  },
  {
    image: "",
    title: "Figma",
    level: "Intermédiaire",
  },
  {
    image: "",
    title: "Copilot",
    level: "Avancé",
  },
  {
    image: "",
    title: "VSCode",
    level: "Avancé",
  },
  {
    image: "",
    title: "git",
    level: "Avancé",
  },
];
type OutilsProps = {
  image: string;
  title: string;
  level: string;
};
const Outils = (props: OutilsProps) => {
  return (
    <div
      className="flex w-full gap-4 items-center hover:bg-accent/50 transition-colors p-2 rounded-[10px]"
    >
      <span className="bg-accent text-accent-foreground p-2 rounded-[4px]">
        <Image src={props.image} alt={props.title} width={16} height={16} />
      </span>
      <div className="flex items-center justify-between w-full lg:block">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.level}</p>
      </div>
    </div>
  );
};

export default Intro;
