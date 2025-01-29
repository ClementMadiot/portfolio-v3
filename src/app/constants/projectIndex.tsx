import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  brainwave,
  geritch,
  hookbank,
  foodie,
  capture,
  jadoo,
  OpenAI
} from "../../../public/index";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useIsDesktop } from "../components/layout/customHook";

export const projects = [
  {
    id: 1,
    name: "Brainwave",
    desc: "Conception d'une application web permettant aux utilisateurs d'explorer les possibilités de discussion avec l'IA via Brainwave, l'application de chat d'OpenAI.",
    categories: "React",
    favoris: true,
    image: brainwave,
    githubLink:
      "https://github.com/ClementMadiot/Brainwave_react_app_tailwindCSS",
    webSiteLink: "https://brainwave-ai-cm.netlify.app/",
  },
  {
    id: 2,
    name: "HookBank",
    desc: "Conception web d'une banque en ligne offrant la nouvelle génération de paiements, rendant les transactions faciles, fiables et sécurisées.",
    categories: "React",
    favoris: false,
    image: hookbank,
    githubLink:
      "https://github.com/ClementMadiot/Bank_modern_app_react-TailwindCSS",
    webSiteLink: "https://bank-modern-cm.netlify.app/",
  },
  {
    id: 3,
    name: "Gerich Restaurant",
    desc: "Design web d'un restaurant de luxe, mettant en avant des cocktails artisanaux et la vision culinaire du Chef Kevin Luo.",
    categories: "React",
    favoris: false,
    image: geritch,
    githubLink:
      "https://github.com/ClementMadiot/Web_Design_Gerich_Restaurant_React",
    webSiteLink: "https://main--geritch-restaurant-cm.netlify.app/",
  },
  {
    id: 4,
    name: "Capture",
    desc: `La page de chargement de Capture présente des animations fluides et des diapositives mettant en avant nos services et les avis clients.`,
    categories: "Design",
    favoris: true,
    image: capture,
    githubLink: "https://github.com/ClementMadiot/Web_Design_Capture",
    webSiteLink: "https://web-design-capture.netlify.app/",
  },
  {
    id: 5,
    name: "Jadoo",
    desc: `Réservation de voyages dynamique, une page de chargement engageante avec des témoignages clients en interface interactive.`,
    categories: "Design",
    favoris: false,
    image: jadoo,
    githubLink: "https://github.com/ClementMadiot/Web_Design_Jadoo",
    webSiteLink: "https://web-design-jadoo.netlify.app/",
  },
  {
    id: 6,
    name: "Foodie",
    desc: `Page d'accueil entièrement responsive conçue avec soin, Foodie livre des repas sains directement à ses clients.`,
    categories: "Design",
    favoris: false,
    image: foodie,
    githubLink: "https://github.com/ClementMadiot/Web_Design_Foodie_React",
    webSiteLink: "https://foodie-cm.netlify.app/",
  },
  {
    id: 7,
    name: "OpenAI",
    desc: `Site web de résumé d'articles alimenté par l'IA qui extrait et résume les éléments clés d'une URL donnée.`,
    categories: "App",
    favoris: true,
    image: OpenAI,
    githubLink: "https://github.com/ClementMadiot/OpenAI_article_react_API?tab=readme-ov-file",
    webSiteLink: "https://openai-cm.netlify.app/",
  },
];

export const SlideReveal = (props: { children: React.ReactNode }) => {
  const isDesktop = useIsDesktop();
  return (
    <motion.div
      whileInView={isDesktop ? { opacity: [0, 1], y: [100, 0] } : {}}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {props.children}
    </motion.div>
  );
};

export const ProjectCard = (props: {
  name: string;
  desc: string;
  image: StaticImageData;
  githubLink: string;
  webSiteLink: string;
}) => {
  return (

      <Card className="rounded-3xl flex flex-col gap-2 w-[250px] mx-2 h-[350px] mb-4 shadow-md">
        <Link
          rel="preload"
          href={props.webSiteLink}
          as="style"
          target="_blank"
          className="rounded-[10px] w-[250px] h-[180px] overflow-hidden"
        >
          <Image
            src={props.image}
            alt={props.name}
            width={248}
            height={185}
            priority
            style={{ width: "auto", height: "auto" }}
            className="rounded-[10px] lg:min-h-[180px] hover:scale-110 duration-300 z-10 "
          />
        </Link>

        <div className="flex flex-col gap-2 px-2 pb-4">
          <div className="flex justify-between mb-1">
            <h3 className="text-xl font-semibold tracking-tight text-primary">
              {props.name}
            </h3>
            <div className="flex items-center gap-2 z-10">
              <a className="z-50" target="_blank" href={props.webSiteLink}>
                <Button
                  size={"sm"}
                  className="text-primary/80 hover:text-primary duration-150 "
                >
                  Demo
                </Button>
              </a>
              {/* github link  */}
              <a
                className="z-50"
                target="_blank"
                href={"https://github.com/ClementMadiot"}
              >
                <Button
                  size={"sm"}
                  className="text-primary/80 hover:text-primary duration-150"
                >
                  <FaGithub className="button-small" />
                </Button>
              </a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{props.desc}</p>
        </div>
      </Card>
    
  );
};
