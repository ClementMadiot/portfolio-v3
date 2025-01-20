import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import Image from "next/image";
import { cn } from "@nextui-org/react";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return <span className={cn("bg-accent/80 hover:bg-accent/50  font-mono border-accent px-1 py-0.5 m-1 rounded-[5px] font-semibold", className)} {...props} />;
};

const Hero = () => {
  return (
    <Section className="flex flex-row max-md:flex-col items-start gap-8 md:gap-4 mt-32 lg:mt-44 ">
      <div className="flex-[3] w-full flex flex-col gap-2 lg:pt-12">
        <h2 className="font-caption text-5xl text-primary">Clément Madiot</h2>
        <h3 className="text-3xl font-caption text-foreground/70 font-medium">Développeur Web</h3>
        <p className="leading-7 text-lg ">
          J&apos;adore créer des nouveaux projects avec <Code>React</Code>, <Code>TailwindCSS</Code> et <Code>Node.js</Code>.
        </p>
      </div>
      <div className="flex-[1] lg:flex-[2] flex justify-center items-center max-md:m-auto ml-auto pb-12">
        <Image
          src="/assets/porfile-linkedin.jpeg"
          alt="profile"
          layout="responsive"
          width={300}
          height={300}
          className="w-full h-auto max-w-xs rounded-full max-md:w-10"
        />
      </div>
    </Section>
  );
};

export default Hero;
