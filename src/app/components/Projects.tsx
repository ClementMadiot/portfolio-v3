"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects, SlideReveal, ProjectCard } from "../constants/projectIndex";
import { Section } from "./layout/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [project, setProject] = useState<typeof projects>([]);
  const [activeFilter, setActiveFilter] = useState("Favs");
  const categories = ["App", "React",  "Design"];

  useEffect(() => {
    if (activeFilter === "Favs") {
      setProject(projects.filter((item) => item.favoris === true));
    } else {
      setProject(projects.filter((item) => item.categories === activeFilter));
    }
  }, [activeFilter]);

  const handleFilter = (category: string) => {
    let filterData = [];
    if (category === "Favs") {
      filterData = projects.filter((item) => item.favoris === true);
    } else {
      filterData = projects.filter((item) => item.categories === activeFilter);
    }
    setProject(filterData);
    setActiveFilter(category);
  };

  return (
    <Section id="projets" className="gap-4">
      <div className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Projets</Badge>
        <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4">
          Mes projets réalisés !
        </h2>
      </div>
      <motion.div
        className="flex flex-col items-center justify-center gap-4"
        whileInView={{ opacity: [0, 1] }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, delay: 0.25 }}
      >
        <div className="w-full flex flex-col ">
          {/* button filter */}
          <article className="flex justify-center flex-wrap gap-2 vsm:gap-4 sm:gap-6 ">
            {/* button "Favs"  */}
            <Button
              onClick={() => handleFilter("Favs")}
              className={`text-base py-1 px-2 sm:px-4 font-medium transition-colors ${
                activeFilter === "Favs"
                  ? "bg-[#915eff] text-white"
                  : "text-primary bg-background"
              }`}
            >
              Favoris
            </Button>
            {/* button "categories"  */}
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleFilter(category)}
                className={`text-base py-1 px-2 sm:px-4 font-medium transition-colors ${
                  activeFilter === category
                    ? "bg-[#915eff] text-white"
                    : "text-primary bg-background"
                }`}
              >
                {category}
              </Button>
            ))}
          </article>

          {/* Gallery */}
          <article className="mt-12 flex flex-col flex-wrap md:flex-row justify-center gap-4 mx-auto ">
            {project.map((item) => (
              <SlideReveal key={item.name}>
                <ProjectCard key={item.name} {...item} />
              </SlideReveal>
            ))}
          </article>
        </div>
      </motion.div>
    </Section>
  );
};

export default Projects;
