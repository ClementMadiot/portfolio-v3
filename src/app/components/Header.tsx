"use client";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Navbar = ({
    title,
    onClick,
  }: {
    title: string;
    onClick: () => void;
  }) => {
    return (
      <a
        href={title}
        className="base-bold text-primary uppercase transition-colors duration-300 cursor-pointer hover:text-muted-foreground max-lg:my-4 max-lg:h5"
        onClick={onClick}
      >
        {title}
      </a>
    );
  };

  return (
    <header className="w-full py-8 transition-all duration-300 max-lg:py-4">
      <div className="container w-full flex h-14 items-center max-lg:px-5">
        {/* menu  */}
        <div
          className={clsx(
            "w-full max-lg:bg-background max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <nav className="max-lg:relative max-lg:z-20 max-lg:my-auto flex justify-between items-center">
            <a target="_blank" href={"https://github.com/ClementMadiot"}>
              <Button>
                <FaGithub className="button-github" />
              </Button>
            </a>
            <ul className="flex justify-center items-center gap-4 px-4  max-lg:block max-lg:px-12">
              <Navbar title="intro" onClick={() => setIsOpen(false)} />
              <div className="dot" />
              <Navbar title="projects" onClick={() => setIsOpen(false)} />
              <div className="dot" />
              <Navbar title="compétences" onClick={() => setIsOpen(false)} />
              <div className="dot" />
              <Navbar title="contact" onClick={() => setIsOpen(false)} />
            </ul>
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
};
