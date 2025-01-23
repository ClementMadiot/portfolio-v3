import React from "react";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, GmailIcon, LinkedinIcon } from "../constants/socials";
import { Section } from "./layout/Section";
import { ContactCard } from "./layout/ContactCard";

const Contact = () => {
  const MY_CONTACT = [
    {
      image: "/assets/porfile-linkedin.jpeg",
      mediumImage: LinkedinIcon,
      name: "Clément Madiot",
      description: "Mon Linkedin",
      url: "https://www.linkedin.com/in/cl%C3%A9ment-madiot-9862b824a/",
    },
    {
      image: "/assets/porfile-linkedin.jpeg",
      mediumImage: GmailIcon,
      name: "clementmadiot09@gmail.com",
      description: "Mon Mail",
      url: "mailto:clementmadiot09@gmail.com",
    },
    {
      image: "/assets/porfile-linkedin.jpeg",
      mediumImage: GithubIcon,
      name: "ClementMadiot",
      description: "Mon Github",
      url: "https://github.com/ClementMadiot",
    },
  ];

  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact</Badge>
      <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Je serait ravi de travailler avec vous !
      </h2>
      <div className="flex max-md:flex-col gap-4">
        {MY_CONTACT.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
    </Section>
  );
};

export default Contact;
