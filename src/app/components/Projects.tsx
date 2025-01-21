"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects, SlideReveal, ProjectCard } from "../constants/projectIndex";
import { Section } from "./layout/Section";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [project, setProject] = useState<ProjectCard[]>([]);
  const [activeFilter, setActiveFilter] = useState("Favs");
  const categories = ["React", "NextJS", "Javascript"];

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
    <Section className="gap-2">
      <motion.div
        id="projects"
        className="flex flex-col items-center justify-center gap-4"
        whileInView={{ opacity: [0, 1] }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, delay: 0.25 }}
      >
        <div className="w-full flex flex-col">
          {/* button filter */}
          <article className=" flex justify-center gap-2 mb-8">
            {/* button "Favs"  */}
            <Button
              onClick={() => handleFilter("Favs")}
              className={`text-base p-1 px-4 mx-3 font-medium transition-colors ${
                activeFilter === "Favs"
                  ? "bg-[#915eff] text-white"
                  : "text-primary-foreground bg-primary"
              }`}
            >
              Favoris
            </Button>
            {/* button "categories"  */}
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleFilter(category)}
                className={`text-base p-1 px-4 mx-3 font-medium transition-colors ${
                  activeFilter === category
                    ? "bg-[#915eff] text-white"
                    : "text-primary-foreground bg-primary"
                }`}
              >
                {category}
              </Button>
            ))}
          </article>
          {/* projects filter  */}
          <article className="mt-12 flex justify-center flex-wrap gap-2">
            {project.map((item, index) => (
              <SlideReveal key={item.id}>
                <ProjectCard key={`project-${index}`} {...item} />
              </SlideReveal>
            ))}
          </article>
        </div>
      </motion.div>
    </Section>
  );
};

export default Projects;
