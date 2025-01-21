import { Badge } from "@/components/ui/badge";
import { Section } from "./layout/Section";
import { ReactIcon, TailwindIcon } from "../constants/socials";

const skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Ce que je sais faire !
      </h2>
      {MY_SKILLS.map((skill, index) => (
        <SkillSection key={index} {...skill} />
      ))}
    </Section>
  );
};

const MY_SKILLS = [
  {
    logo: ReactIcon,
    title: "React",
    description:
      "Mon framework principal est React, Next.js en tant que framework backend et frontend.",
  },
  {
    logo: TailwindIcon,
    title: "TailwindCSS",
    description:
      "Je peux créer une application modern en quelques secondes en utilisant TailwindCSS.",
  },
  {
    logo: ReactIcon,
    title: "AI Integration",
    description:
      "Je suis un expert de l'intégration de l'IA dans vos applications pour créer la meilleure  expérience utilisateur possible",
  },
];

type SkillProps = {
  logo: React.ElementType;
  title: string;
  description: string;
};

const SkillSection = (props: SkillProps) => {
  return (
    <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary/10 lg:h-12 lg:w-12 ">
        <props.logo size={24} className="text-primary" />
      </div>
      <h3 className="mb-2 text-2xl font-semibold tracking-tight">
        {props.title}
      </h3>
      <p className="text-muted-foreground text-sm">{props.description}</p>
    </div>
  );
};

export default skills;
