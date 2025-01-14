"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black backdrop-blur-[8px]"
      )}
    >
      <div className="container flex justify-center h-14 items-center max-lg:px-5">
        {/* menu  */}
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:bg-background max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-20 max-lg:my-auto flex justify-between items-center">
              <a target="_blank" href={"https://github.com/ClementMadiot"}>
                <Button>
                  <FaGithub className="button-github" />
                </Button>
              </a>
              <ul className="flex justify-center items-center gap-4  max-lg:block max-lg:px-12">
                <Navbar title="Intro" onClick={() => setIsOpen(false)} />
                <div className="dot" />
                <Navbar title="Projects" onClick={() => setIsOpen(false)} />
                <div className="dot" />
                <Navbar title="Compétences" onClick={() => setIsOpen(false)} />
                <div className="dot" />
                <Navbar title="Contact" onClick={() => setIsOpen(false)} />
              </ul>
              <ThemeSwitcher />
            </nav>
          </div>
        </div>
        {/* hanburger menu  */}
      </div>
    </header>
  );
};
