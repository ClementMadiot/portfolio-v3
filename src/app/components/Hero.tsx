import { Code } from "./layout/Code";
import { Section } from "./layout/Section";
import Image from "next/image";

const Hero = () => {
  return (
    <Section className="flex flex-row max-md:flex-col items-start gap-8 md:gap-4 mt-24  ">
      <div className="flex-[3] w-full flex flex-col gap-2 lg:pt-12">
        <h2 className="font-caption text-5xl text-primary">Clément Madiot</h2>
        <h3 className="text-3xl font-caption text-foreground/70 font-medium">
          Développeur Web
        </h3>
        <p className="leading-7 text-lg ">
          J&apos;adore créer des nouveaux projects avec <Code>React</Code>,{" "}
          <Code>TailwindCSS</Code> et <Code>Node.js</Code>.
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
