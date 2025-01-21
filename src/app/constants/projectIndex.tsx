import Image from "next/image";
import { motion } from "framer-motion";

import { github, website } from "../../../public/index";
import {
  brainwave,
  geritch,
  hookbank,
  foodie,
  capture,
  jadoo,
} from "../../../public/index";
import Link from "next/link";

export const projects = [
  {
    id: 1,
    name: "Brainwave",
    desc: "Web application design that enables users to explore the Possibilities of AI Chatting with Brainwave, the open AI chap app.",
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
    desc: "Web design of an online bank, that propose the next generation payment method. A new way to make the payment an easy, reliable and secure.",
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
    desc: "Web design of the luxurious restaurant. Explore the handcrafted cocktails and the Chef Kevin Luo's culinary vision.",
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
    desc: `The loading page features Smooth animations introduce our professional photography services. Stunning slides showcase client comments.`,
    categories: "Javascript",
    favoris: true,
    image: capture,
    githubLink: "https://github.com/ClementMadiot/Web_Design_Capture",
    webSiteLink: "https://web-design-capture.netlify.app/",
  },
  {
    id: 5,
    name: "Jadoo",
    desc: `Dynamic travel booking: Our loading page keeps users engaged while showcasing stunning client testimonials in a slide-based interface.`,
    categories: "Javascript",
    favoris: false,
    image: jadoo,
    githubLink: "https://github.com/ClementMadiot/Web_Design_Jadoo",
    webSiteLink: "https://web-design-jadoo.netlify.app/",
  },
  {
    id: 6,
    name: "Foodie",
    desc: `Fully responsive landing page built with Javascript, Foodie delivers healthy meals straight to their customers.`,
    categories: "Javascript",
    favoris: false,
    image: foodie,
    githubLink: "https://github.com/ClementMadiot/Web_Design_Foodie_React",
    webSiteLink: "https://foodie-cm.netlify.app/",
  },
];

export const SlideReveal = (props: { children: number }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
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
  image: string;
  githubLink: string;
  webSiteLink: string;
}) => {
  return (
    <div className="p-5 rounded-3xl bg-primary-foreground text-primary flex flex-col sm:w-[250px] max-h-[480px] w-full mb-3">
      <div className="relative w-full h-[200px] rounded-[10px]">
        <Image src={props.image} alt={props.name} width={200} height={180} className="rounded-[10px] w-full h-full max-w-[200px] object-contain" />
        <article className="flex">
          {/* Link web  */}
          <Link
            href={props.webSiteLink}
            target="_blank"
            className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-full transition-transform bg-gradient-to-r from-gray to-white"
          >
            <Image
              src={website}
              alt={"website"}
              width={20}
              height={20}
              className="w-1/2 h-1/2"
            />
          </Link>
          {/* Link Github */}
          <Link
            href={props.webSiteLink}
            target="_blank"
            className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-full transition-transform bg-gradient-to-r from-gray to-black"
          >
            <Image
              src={github}
              alt={"github"}
              width={20}
              height={20}
              className="w-1/2 h-1/2"
            />
          </Link>
        </article>
      </div>

      <div>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};
