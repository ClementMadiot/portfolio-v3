"use client";

import { MenuSvg } from "@/components/ui/MenuSvg";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
// import Image from "next/image";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // button switch Menu to hamburgerMenu
  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  // close menu onclick to the anchor
  const handleClick = () => {
    if (!isOpen) return;

    setIsOpen(false);
  };

  const Navbar = ({
    title,
    handleClick,
  }: {
    title: string;
    handleClick: () => void;
  }) => {
    return (
      <a
        href={`#${title}`}
        className={clsx(
          "relative block base-bold text-primary/85 uppercase transition-colors duration-300 cursor-pointer hover:text-primary max-lg:my-4 max-lg:h5 px-4 py-2 md:py-5 lg:text-sm "
        )}
        onClick={handleClick}
      >
        {title}
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-chart-3 lg:bg-chart-2/90 lg:backdrop-blur-sm ${
        isOpen ? "bg-chart-2" : "bg-chart-2/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-4xl w-full lg:px-0.5 m-auto flex items-center px-2 max-lg:py-2 gap-4">
        <a target="_blank" href={"https://github.com/ClementMadiot"}>
          <Button className="text-primary/80 hover:text-primary duration-300">
            <FaGithub className="button " />
          </Button>
        </a>
        <ThemeSwitcher className="flex lg:hidden" />
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } fixed top-20 left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent bg-chart-2`}
        >
          <ul className="relative z-20 flex flex-col items-center justify-center m-auto lg:flex-row">
            <Navbar title="intro" handleClick={handleClick} />
            {/* <div className="dot" /> */}
            <Navbar title="projects" handleClick={handleClick} />
            {/* <div className="dot" /> */}
            <Navbar title="compétences" handleClick={handleClick} />
            {/* <div className="dot" /> */}
            <Navbar title="contact" handleClick={handleClick} />
          </ul>
        </nav>
        {/* hamburger button  */}
        <Button
          className="ml-auto lg:hidden px-3 rounded-tr-[8px]"
          onClick={toggleMenu}
        >
          <MenuSvg openNavigation={isOpen} />
        </Button>
        <ThemeSwitcher className="hidden lg:flex" />

        
      </div>
    </header>
  );
};
