import { Code } from "./layout/Code";
import { Section } from "./layout/Section";
import Image from "next/image";

const Hero = () => {
  return (
    <Section className="flex flex-row max-md:flex-col items-start gap-8 md:gap-4  ">
      <div className="flex-[3] w-full flex flex-col gap-2 lg:pt-12">
        <h2 className="font-caption max-vsm:text-[40px] text-5xl text-primary">
          Clément Madiot
        </h2>
        <h3 className="text-3xl max-vsm:text-2xl font-caption text-foreground/70 font-medium">
          Développeur Web
        </h3>
        <p className="leading-8 text-lg ">
        Depuis 2 ans, je conçois des sites modernes, performants et responsives. Passionné par les technologies modernes, je me suis spécialisé dans <Code>React</Code>,{" "}
          <Code>TailwindCSS</Code> et <Code>Next.js</Code>{" "}pour créer des expériences web uniques et intuitives.
        </p>
      </div>
      <div className="max-sm:hidden flex-[1] lg:flex-[2] flex justify-center items-center max-md:m-auto ml-auto pb-12">
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
