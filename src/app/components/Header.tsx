"use client";

import { MenuSvg } from "@/components/ui/MenuSvg";
import { ThemeSwitcher } from "./layout/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { FaGithub } from "react-icons/fa";
import SectionSvg from "./layout/SectionSvg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isActive, setIsActive] = useState<string>("");
  const sectionsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});

  // button switch Menu to hamburgerMenu
  useEffect(() => {
    if (isOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }

    return () => enablePageScroll();
  }, [isOpen]);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
      sectionsRef.current[section.id] =
        (observer
          .takeRecords()
          .find(
            (entry) => entry.target.id === section.id
          ) as IntersectionObserverEntry) || ({} as IntersectionObserverEntry);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // close menu onclick to the anchor
  const handleClick = (title: string) => {
    setIsActive(title);
    if (!isOpen) return;
    setIsOpen(false);
  };

  const Navbar = ({
    title,
    handleClick,
  }: {
    title: string;
    handleClick: (title: string) => void;
  }) => {
    return (
      <a
        href={`#${title}`}
        className={clsx(
          "relative block base-bold text-primary/80 uppercase transition-colors duration-300 cursor-pointer hover:text-primary max-lg:my-4 max-lg:h5 px-4 py-2 md:py-5 lg:text-sm z-20",
          isActive === title && "text-primary/100"
        )}
        onClick={() => handleClick(title)}
      >
        {title}
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-2 lg:bg-chart-2/90 lg:backdrop-blur-sm border-b border-chart-3  ${
        isOpen ? "bg-chart-2 " : "bg-chart-2/90 backdrop-blur-sm"
      }`}
    >
      <div className="xl:max-w-5xl lg:max-w-4xl md:max-w-2xl w-full lg:px-0.5 m-auto flex items-center px-2 max-lg:py-2 gap-4  ">
        <a
          className="z-50"
          target="_blank"
          href={"https://github.com/ClementMadiot"}
        >
          <Button className="text-primary/80 hover:text-primary duration-150">
            <FaGithub className="button" />
          </Button>
        </a>
        <ThemeSwitcher
          className="flex lg:hidden"
          theme={theme || "light"}
          setTheme={setTheme}
        />

        <div className="relative m-auto ">
          <nav
            className={`${
              isOpen ? "flex " : "hidden"
            } fixed top-[69px] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent bg-chart-2`}
          >
            {/* line left  */}
            <div
              className={`lg:hidden ${
                isOpen
                  ? "absolute -top-8 left-[30px] w-[1px] h-full bg-chart-3"
                  : "hidden"
              }`}
            />
            {/* line right */}
            <div
              className={`lg:hidden ${
                isOpen
                  ? "absolute -top-8 right-[30px] w-[1px] h-full bg-chart-3"
                  : "hidden"
              }`}
            />
            <SectionSvg crossesOffset="-top-1.5 right-[25px] lg:hidden" />
            {/* <SectionSvg crossesOffset="-top-1.5 right-[15px] lg:hidden" /> */}
            <ul className="relative block m-auto lg:flex lg:items-center lg:flex-row">
              <Navbar title="intro" handleClick={handleClick} />
              <Navbar title="compétences" handleClick={handleClick} />
              <Navbar title="projets" handleClick={handleClick} />
              <Navbar title="contact" handleClick={handleClick} />
            </ul>
          </nav>
        </div>
        {/* hamburger button  */}
        <Button
          className="ml-auto lg:hidden px-3 rounded-tr-[8px] z-50 text-primary/80 hover:text-primary duration-150"
          onClick={toggleMenu}
        >
          <MenuSvg openNavigation={isOpen} />
        </Button>
        <ThemeSwitcher
          className="hidden lg:flex"
          theme={theme || "default"}
          setTheme={setTheme}
        />
      </div>
    </header>
  );
};
