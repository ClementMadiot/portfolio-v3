// import Link from "next/link";
// import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  brainwave,
  geritch,
  hookbank,
  foodie,
  capture,
  jadoo,
  OpenAI,
  coderscoffee,
  xora,
  myYoutube,
} from "../../../public/index";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Modal } from "../components/layout/Modal";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef } from "react";

export const projects = [
  {
    name: "Brainwave",
    desc: "Conception d'une application web permettant aux utilisateurs d'explorer les possibilités de discussion avec l'IA via Brainwave, l'application de chat d'OpenAI.",
    categories: "React",
    techs: ["React", "TailwindCSS", "Vite"],
    favoris: true,
    image: brainwave,
    code: "https://github.com/ClementMadiot/Brainwave_react_app_tailwindCSS",
    link: "https://brainwave-ai-cm.netlify.app/",
  },
  {
    name: "HookBank",
    desc: "Conception web d'une banque en ligne offrant la nouvelle génération de paiements, rendant les transactions faciles, fiables et sécurisées.",
    categories: "React",
    techs: ["React", "TailwindCSS", "Vite"],
    favoris: false,
    image: hookbank,
    code: "https://github.com/ClementMadiot/Bank_modern_app_react-TailwindCSS",
    link: "https://bank-modern-cm.netlify.app/",
  },
  {
    name: "Gerich Restaurant",
    desc: "Design web d'un restaurant de luxe, mettant en avant des cocktails artisanaux et la vision culinaire du Chef Kevin Luo.",
    categories: "React",
    techs: ["React", "CSS", "Vite"],
    favoris: false,
    image: geritch,
    code: "https://github.com/ClementMadiot/Web_Design_Gerich_Restaurant_React",
    link: "https://main--geritch-restaurant-cm.netlify.app/",
  },
  {
    name: "Capture",
    desc: `La page de chargement de Capture présente des animations fluides et des diapositives mettant en avant nos services et les avis clients.`,
    categories: "Design",
    techs: ["JS", "CSS", "HTML"],
    favoris: false,
    image: capture,
    code: "https://github.com/ClementMadiot/Web_Design_Capture",
    link: "https://web-design-capture.netlify.app/",
  },
  {
    name: "Jadoo",
    desc: `Réservation de voyages dynamique, une page de chargement engageante avec des témoignages clients en interface interactive.`,
    categories: "Design",
    techs: ["JavaScript", "CSS", "HTML"],
    favoris: false,
    image: jadoo,
    code: "https://github.com/ClementMadiot/Web_Design_Jadoo",
    link: "https://web-design-jadoo.netlify.app/",
  },
  {
    name: "Foodie",
    desc: `Page d'accueil entièrement responsive conçue avec soin, Foodie livre des repas sains directement à ses clients.`,
    categories: "Design",
    techs: ["JavaScript", "CSS", "HTML"],
    favoris: false,
    image: foodie,
    code: "https://github.com/ClementMadiot/Web_Design_Foodie_React",
    link: "https://foodie-cm.netlify.app/",
  },
  {
    name: "OpenAI",
    desc: `Site web de résumé d'articles alimenté par l'IA qui extrait et résume les éléments clés d'une URL donnée.`,
    categories: "App",
    favoris: true,
    techs: ["React", "TailwindCSS", "Redux", "RapidAPI"],
    image: OpenAI,
    code: "https://github.com/ClementMadiot/OpenAI_article_react_API?tab=readme-ov-file",
    link: "https://openai-cm.netlify.app/",
  },
  {
    name: "Coders Coffee",
    desc: `Site Web entièrement réactif pour un café utilisant ReactJS et Tailwind CSS. Animé avec Framer motion et react-tilt`,
    categories: "React",
    techs: ["React", "TailwindCSS", "Vite", "Framer Motion"],
    favoris: false,
    image: coderscoffee,
    code: "https://github.com/ClementMadiot/Coffee_react?tab=readme-ov-file",
    link: "https://coder-coffe-cm.netlify.app/",
  },
  {
    name: "Xora",
    desc: `Page d'accueil SaaS moderne avec React, Tailwind CSS, et des bibliothèques comme clsx, react-scroll, React-CountUp et react-slidedown.`,
    categories: "React",
    techs: ["React", "TailwindCSS", "Vite"],
    favoris: false,
    image: xora,
    code: "https://github.com/ClementMadiot/Xora-react?tab=readme-ov-file",
    link: "https://xora-cm.netlify.app/",
  },
  {
    name: "myYoutube",
    desc: `Ce clone de YouTube reprend les fonctionnalités essentielles, conçu avec TailwindCSS, MUI, RapidAPI et l'API YouTube v3.`,
    categories: "App",
    techs: ["React", "TailwindCSS", "Material UI", "RapidAPI"],
    favoris: true,
    image: myYoutube,
    code: "https://github.com/ClementMadiot/YouTube-clone_react",
    link: "https://myyoutube-cm.netlify.app/",
  },
];

export const SlideReveal = (props: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  // Reveal Animation
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {props.children}
    </motion.div>
  );
};
export interface ProjectCardProps {
  name: string;
  desc: string;
  image: StaticImageData;
  code: string;
  link: string;
  techs?: string[];
}

export const ProjectCard = (props: ProjectCardProps) => {
  // Modal
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="rounded-3xl flex flex-col gap-2 w-[280px] mx-2 h-[280px] mb-4 shadow-md">
      <div className="rounded-[10px] w-[280px] h-[180px] overflow-hidden cursor-pointer">
        <Modal {...props} />
      </div>

      <div className="flex flex-col gap-2 px-2 pb-4">
        <div className="flex justify-between mb-1">
          <h3 className="text-xl font-semibold tracking-tight text-primary">
            {props.name}
          </h3>
          <div className="flex items-center gap-2 z-10">
            <a className="z-50" target="_blank" href={props.link}>
              <Button
                size={"sm"}
                className="text-primary/80 hover:text-primary duration-150 ml-1"
              >
                Demo
              </Button>
            </a>
            {/* github link  */}
            <a className="z-50" target="_blank" href={props.code}>
              <Button
                size={"sm"}
                className="text-primary/80 hover:text-primary duration-150"
              >
                <FaGithub className="button-small" />
              </Button>
            </a>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{props.techs}</p>
      </div>
    </Card>
  );
};
