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
} from "../../../public/index";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useIsDesktop } from "../components/layout/customHook";

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
    categories: "Design",
    favoris: true,
    image: capture,
    githubLink: "https://github.com/ClementMadiot/Web_Design_Capture",
    webSiteLink: "https://web-design-capture.netlify.app/",
  },
  {
    id: 5,
    name: "Jadoo",
    desc: `Dynamic travel booking: Our loading page keeps users engaged while showcasing stunning client testimonials in a slide-based interface.`,
    categories: "Design",
    favoris: false,
    image: jadoo,
    githubLink: "https://github.com/ClementMadiot/Web_Design_Jadoo",
    webSiteLink: "https://web-design-jadoo.netlify.app/",
  },
  {
    id: 6,
    name: "Foodie",
    desc: `Fully responsive landing page built with Design, Foodie delivers healthy meals straight to their customers.`,
    categories: "Design",
    favoris: false,
    image: foodie,
    githubLink: "https://github.com/ClementMadiot/Web_Design_Foodie_React",
    webSiteLink: "https://foodie-cm.netlify.app/",
  },
];

export const SlideReveal = (props: { children: React.ReactNode }) => {
  const isDesktop = useIsDesktop();
  return (
    <motion.div
      whileInView={isDesktop ? { opacity: [0, 1], y: [100, 0] } : {}}
      viewport={isDesktop ? { once: false } : {}}
      transition={isDesktop ? { duration: 0.5, delay: 0.25 } : {}}
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
    <Card className="rounded-3xl flex flex-col gap-2 w-[250px] mx-2 h-[350px] ">
      <Link
        href={props.webSiteLink}
        target="_blank"
        className="rounded-[10px] w-[250px] h-[180px]  overflow-hidden"
      >
        <Image
          src={props.image}
          alt={props.name}
          width={248}
          height={185}
          className="rounded-[10px] lg:min-h-[180px] hover:scale-105 duration-300"
        />
      </Link>

      <article className="">
        {/* Link web  */}
        {/* <Link
            href={props.webSiteLink}
            target="_blank"
            className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-full transition-transform"
          >
            <Image
              src={website}
              alt={"website"}
              width={20}
              height={20}
              className="w-1/2 h-1/2"
            />
          </Link> */}
        {/* Link Github */}
        {/* <Link
            href={props.webSiteLink}
            target="_blank"
            className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-full transition-transform"
          >
            <Image
              src={github}
              alt={"github"}
              width={20}
              height={20}
              className="w-1/2 h-1/2"
            />
          </Link> */}
      </article>

      <div className="flex flex-col gap-2 px-2 pb-4">
        <div className="flex justify-between mb-1">
          <h3 className="text-xl font-semibold tracking-tight text-primary">
            {props.name}
          </h3>
          <div className="flex items-center gap-2">
            <a className="z-50" target="_blank" href={props.webSiteLink}>
              <Button
                size={"sm"}
                className="text-primary/80 hover:text-primary duration-150"
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
