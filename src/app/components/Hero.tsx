import { Button } from "@/components/ui/button";
import { Code } from "./layout/Code";
import { Section } from "./layout/Section";
import Image from "next/image";

const Hero = () => {
  return (
    <Section
      id="intro"
      className="flex flex-row max-md:flex-col items-start gap-8 md:gap-4"
    >
      <div className="flex-[2] lg:flex-[3] w-full flex flex-col items-start gap-2 pt-6 lg:pt-12">
        <h2 className="font-caption max-vsm:text-[40px] text-5xl text-primary">
          Clément Madiot
        </h2>
        <h3 className="text-3xl max-vsm:text-2xl font-caption text-foreground/70 font-medium">
          Développeur Web
        </h3>
        <p className="leading-8 text-lg ">
          Depuis 2 ans, je conçois des sites modernes, performants et
          responsives. Passionné par les technologies modernes, je me suis
          spécialisé dans <Code>React</Code>, <Code>TailwindCSS</Code> et{" "}
          <Code>Next.js</Code> pour créer des expériences web uniques et
          intuitives.
        </p>
        <Button variant={"secondary"} className="mt-2 sm:mt-4">
          Mon CV
        </Button>
      </div>
      <div className="max-sm:hidden flex-[1] lg:flex-[2] flex justify-center items-center max-md:m-auto ml-auto pb-12 relative w-full h-auto max-w-xs">
        <div className="relative w-full pb-[100%]">
          <Image
            src="/assets/profile.jpg"
            alt="profile"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
