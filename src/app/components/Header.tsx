"use client";

import { MenuSvg } from "@/components/ui/MenuSvg";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
// import Image from "next/image";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import SectionSvg from "@/layout/SectionSvg";
// import Image from "next/image";

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
      className={`fixed top-0 left-0 z-50 w-full py-2 lg:bg-chart-2/90 lg:backdrop-blur-sm border-b border-chart-3 ${
        isOpen ? "bg-chart-2 " : "bg-chart-2/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-4xl w-full lg:px-0.5 m-auto flex items-center px-2 max-lg:py-2 gap-4 ">
        <a
          className="z-50"
          target="_blank"
          href={"https://github.com/ClementMadiot"}
        >
          <Button className="text-primary/80 hover:text-primary duration-300">
            <FaGithub className="button " />
          </Button>
        </a>
        <ThemeSwitcher className="flex lg:hidden" />
        <nav
          className={`${
            isOpen ? "flex " : "hidden"
          } fixed top-[69px] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent bg-chart-2`}
        >
          {/* line  */}
          <div
            className={`lg:hidden ${
              isOpen
                ? "absolute -top-8 left-5 w-[1px] h-full bg-chart-3"
                : "hidden"
            }`}
          />
          <div
            className={`lg:hidden ${
              isOpen
                ? "absolute -top-8 right-5 w-[1px] h-full bg-chart-3"
                : "hidden"
            }`}
          />
          <SectionSvg crossesOffset="-top-1.5 left-[15px] lg:hidden" />
          <SectionSvg crossesOffset="-top-1.5 right-[15px] lg:hidden" />
          <ul className="relative block m-auto lg:flex lg:items-center lg:flex-row">
            <Navbar title="intro" handleClick={handleClick} />
            {/* <div className="dot" /> */}
            <Navbar title="projects" handleClick={handleClick} />
            {/* <div className="dot" /> */}
            <Navbar title="compétences" handleClick={handleClick} />
            {/* <div className="dot" /> */}
            <Navbar title="contact" handleClick={handleClick} />
          </ul>
        </nav>
        {/* nav image mobile device */}
        <div
          className={`lg:hidden ${
            isOpen
              ? "block absolute top-[400px] left-0 w-[960px] h-[380px] translate-x-[-220px] -translate-y-1/2 rotate-90 "
              : "hidden"
          }`}
        >
          {/* <Image src={'/assets/bg-outlines-fill.png'} width={960} height={380} alt="outline" className="relative z-[2]" /> */}
        </div>
        {/* hamburger button  */}
        <Button
          className="ml-auto lg:hidden px-3 rounded-tr-[8px] z-50"
          onClick={toggleMenu}
        >
          <MenuSvg openNavigation={isOpen} />
        </Button>
        <ThemeSwitcher className="hidden lg:flex" />
      </div>
    </header>
  );
};
