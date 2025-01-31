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
  desc: React.ReactNode;
  image: StaticImageData;
  code: string;
  link: string;
  techs?: string[];
}

export const ProjectCard = (props: ProjectCardProps) => {
  // Modal
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="rounded-3xl flex flex-col gap-2 w-[290px] mx-2 h-[280px] mb-4 shadow-md bg-chart-5">
      <div className="rounded-[10px] w-full h-auto overflow-hidden cursor-pointer">
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
                className="text-primary hover:text-primary duration-150 ml-1"
              >
                Demo
              </Button>
            </a>
            {/* github link  */}
            <a className="z-50" target="_blank" href={props.code}>
              <Button
                size={"sm"}
                className="text-primary hover:text-primary duration-150"
              >
                <FaGithub className="button-small" />
              </Button>
            </a>
          </div>
        </div>
        <div className="w-full flex justify-start gap-2 flex-wrap">
          {props.techs &&
            props.techs.map((tech, index) => (
              <p key={index} className="text-[13px] font-medium text-techs">
                #{tech}
              </p>
            ))}
        </div>
      </div>
    </Card>
  );
};

export const projects = [
  {
    name: "Brainwave",
    desc: (
      <>
        Brainwave est une application de chat alimentée par l&apos;IA, offrant
        une expérience interactive et intuitive grâce au modèle avancé
        d&apos;OpenAI. Cette landing page et application web sont conçues pour
        mettre en avant le potentiel des conversations assistées par l&apos;IA à
        travers une interface fluide et esthétiquement soignée.
        <br />
        <br />
        Développé avec React et TailwindCSS, Brainwave garantit une expérience
        utilisateur optimale, enrichie par des animations dynamiques et un
        design réactif. L&apos;application intègre react-just-parallax pour des
        effets immersifs, scroll-lock pour un contrôle précis du défilement, et
        react-icons pour une interface élégante. La navigation est gérée
        efficacement avec react-router-dom, assurant un parcours utilisateur
        fluide et structuré.
      </>
    ),
    categories: "React",
    techs: ["React", "TailwindCSS", "Vite"],
    favoris: true,
    image: brainwave,
    code: "https://github.com/ClementMadiot/Brainwave_react_app_tailwindCSS",
    link: "https://brainwave-ai-cm.netlify.app/",
  },
  {
    name: "HookBank",
    desc: (
      <>
        Cette landing page de banque en ligne est conçue pour présenter une
        méthode de paiement de nouvelle génération, fiable et sécurisée.
        Développée avec React Vite pour des performances rapides et des temps de
        construction optimisés, le site garantit une expérience fluide et un
        design moderne et responsive.
      </>
    ),
    categories: "React",
    techs: ["React", "TailwindCSS", "Vite"],
    favoris: false,
    image: hookbank,
    code: "https://github.com/ClementMadiot/Bank_modern_app_react-TailwindCSS",
    link: "https://bank-modern-cm.netlify.app/",
  },
  {
    name: "Gerich Restaurant",
    desc: (
      <>
        Geritch Restaurant est un site Web de restaurant fictif construit avec
        React. Le site Web est une application monopage qui présente le menu,
        les services et les coordonnées du restaurant. Le site Web est
        entièrement responsive et mobile-friendly. Le site Web est hébergé sur
        Netlify.
      </>
    ),
    categories: "React",
    techs: ["React", "CSS", "Vite"],
    favoris: false,
    image: geritch,
    code: "https://github.com/ClementMadiot/Web_Design_Gerich_Restaurant_React",
    link: "https://main--geritch-restaurant-cm.netlify.app/",
  },
  {
    name: "Capture",
    desc: (
      <>
        Capture est une entreprise de photographie professionnelle proposant une
        large gamme de services de qualité. Son site web est entièrement
        responsive, s&apos;adaptant parfaitement aux écrans d&apos;ordinateur,
        tablette et mobile. Grâce à des animations fluides et des éléments
        interactifs, il offre une expérience utilisateur immersive et intuitive.
      </>
    ),
    categories: "Design",
    techs: ["JS", "CSS", "HTML"],
    favoris: false,
    image: capture,
    code: "https://github.com/ClementMadiot/Web_Design_Capture",
    link: "https://web-design-capture.netlify.app/",
  },
  {
    name: "Jadoo",
    desc: (
      <>
        Jadoo est une landing page dynamique dédiée à la réservation de voyages,
        offrant une expérience utilisateur fluide et interactive.
        <br />
        <br />
        Pour enrichir l&apos;expérience, ScrollReveal est utilisé pour révéler
        les composants avec élégance au chargement du site. La section client
        intègre un slider réactif développé avec Swiper.js, mettant en avant des
        témoignages pour une navigation immersive.
      </>
    ),
    categories: "Design",
    techs: ["JavaScript", "CSS", "HTML"],
    favoris: false,
    image: jadoo,
    code: "https://github.com/ClementMadiot/Web_Design_Jadoo",
    link: "https://web-design-jadoo.netlify.app/",
  },
  {
    name: "Foodie",
    desc: (
      <>
        Foodie est une landing page entièrement responsive, développée avec
        JavaScript et React, conçue pour un restaurant de livraison spécialisé
        dans la nourriture saine. Le site garantit une expérience utilisateur
        fluide et immersive sur tous les appareils.
        <br />
        <br />
        Pour une interface optimisée, React Icons est utilisé dans la navigation
        latérale mobile et la section &quot;work&quot;. La section témoignages
        intègre un slider dynamique et réactif construit avec Swiper.js,
        permettant aux utilisateurs de faire défiler les avis via
        swiper-pagination sur mobile et swiper-button sur tablette et
        ordinateur.
        <br />
        <br />
        Foodie associe des technologies web modernes à une interface intuitive
        pour offrir une expérience utilisateur fluide et interactive.
      </>
    ),
    categories: "Design",
    techs: ["React", "JavaScript", "CSS", "HTML"],
    favoris: false,
    image: foodie,
    code: "https://github.com/ClementMadiot/Web_Design_Foodie_React",
    link: "https://foodie-cm.netlify.app/",
  },
  {
    name: "OpenAI",
    desc: (
      <>
        Ce site web de résumé d&apos;articles alimenté par l&apos;IA utilise
        ChatGPT-4 pour générer instantanément des résumés concis de
        n&apos;importe quel article en un clic. 
        <br />
        <br />
        Grâce à l&apos;intégration de RapidAPI, la plateforme optimise les appels API pour une summarisation
        rapide et précise. L&apos;interface moderne et épurée, construite avec
        React et TailwindCSS, offre une expérience fluide à l&apos;utilisateur.
        <br />
        <br />
        Que ce soit pour résumer des articles longs ou sauvegarder
        l&apos;historique des résumés précédents, ce site simplifie le
        processus, facilitant l&apos;accès et le partage du contenu.
      </>
    ),
    categories: "App",
    favoris: true,
    techs: ["React", "TailwindCSS", "Redux", "RapidAPI"],
    image: OpenAI,
    code: "https://github.com/ClementMadiot/OpenAI_article_react_API?tab=readme-ov-file",
    link: "https://openai-cm.netlify.app/",
  },
  {
    name: "Coders Coffee",
    desc: (
      <>
        Ce site web de café entièrement responsive est développé avec ReactJS et
        Tailwind CSS, offrant une expérience fluide et moderne sur tous les
        appareils. Animé avec Framer Motion et react-tilt, il intègre des
        interactions fluides et des effets visuels dynamiques pour une
        navigation immersive.
      </>
    ),
    categories: "React",
    techs: ["React", "TailwindCSS", "Vite", "Framer Motion"],
    favoris: false,
    image: coderscoffee,
    code: "https://github.com/ClementMadiot/Coffee_react?tab=readme-ov-file",
    link: "https://coder-coffe-cm.netlify.app/",
  },
  {
    name: "Xora",
    desc: (
      <>
        Xora est une page d&apos;accueil SaaS moderne construite avec React,
        Tailwind CSS et une suite de puissantes bibliothèques : clsx pour la
        composition CSS utilitaire, react-scroll pour un défilement de page
        fluide, React-CountUp pour des compteurs animés engageants et
        react-slidedown pour des révélations de contenu dynamiques.
      </>
    ),
    categories: "React",
    techs: ["React", "TailwindCSS", "Vite"],
    favoris: false,
    image: xora,
    code: "https://github.com/ClementMadiot/Xora-react?tab=readme-ov-file",
    link: "https://xora-cm.netlify.app/",
  },
  {
    name: "myYoutube",
    desc: (
      <>
        Ce projet est un clone de YouTube, conçu pour répliquer certaines
        fonctionnalités de la célèbre plateforme. Il a été développé en
        utilisant React, TailwindCSS et Materialet UI (MUI).
        <br />
        <br />
        L&apos;intégration des données a été réalisée grâce à RapidAPI et l&apos;API
        YouTube v3
        <br />
        <br />
        Le site propose une barre de recherche fonctionnelle, un feed dynamique
        présentant les dernières vidéos, ainsi que des pages de chaînes
        affichant le nombre d&apos;abonnés et les vidéos associées.
      </>
    ),
    categories: "App",
    techs: ["React", "TailwindCSS", "MUI", "RapidAPI"],
    favoris: true,
    image: myYoutube,
    code: "https://github.com/ClementMadiot/YouTube-clone_react",
    link: "https://myyoutube-cm.netlify.app/",
  },
];
