import { Badge } from "@/components/ui/badge";
import { Section } from "./layout/Section";
import { OpenAiIcon, ReactIcon, TailwindIcon } from "../constants/socials";
import { Code } from "./layout/Code";

const skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Ce que je sais faire !
      </h2>
      <div className="flex max-md:flex-col gap-8">
        {MY_SKILLS.map((skill, index) => (
          <SkillSection key={index} {...skill} />
        ))}
      </div>
    </Section>
  );
};

const MY_SKILLS = [
  {
    logo: ReactIcon,
    title: "React",
    description: (
      <>
        Mon framework principal est <Code className="text-primary">React</Code>, <Code className="text-primary">Next.js</Code> en
        tant que framework backend et frontend.
      </>
    ),
    className: "animate-spin",
  },
  {
    logo: TailwindIcon,
    title: "TailwindCSS",
    description: (
      <>
        Je peux créer une application modern en quelques secondes en utilisant
        <Code className="text-primary">TailwindCSS</Code>.
      </>
    ),
  },
  {
    logo: OpenAiIcon,
    title: "AI Integration",
    description:
      "Je suis un expert de l'intégration de l'IA dans vos applications pour créer la meilleure  expérience utilisateur possible",
  },
];

type SkillProps = {
  logo: React.ElementType;
  title: string;
  description: React.ReactNode;
  className?: string;
};

const SkillSection = (props: SkillProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-skillRounded lg:h-12 lg:w-12 ">
          <props.logo size={24} className={`text-primary ${props.className}`} />
        </div>
        <h3 className="mb-2 text-2xl font-semibold tracking-tight">
          {props.title}
        </h3>
      </div>
      <p className="text-muted-foreground text-sm leading-6">{props.description}</p>
    </div>
  );
};

export default skills;
