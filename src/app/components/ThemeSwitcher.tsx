"use client";

import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher({
  className,
  theme,
  setTheme,
}: {
  className: string;
  theme: string;
  setTheme: (theme: string) => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`${className}`}>
      {theme === "light" && (
        <Button
          className="text-primary/80 hover:text-primary duration-300"
          onClick={() => setTheme("dark")}
        >
          <MdOutlineDarkMode className="button" />
        </Button>
      )}
      {theme === "dark" && (
        <Button
          className="text-primary/80 hover:text-primary duration-300"
          onClick={() => setTheme("light")}
        >
          <CiLight className="button-mode" />
        </Button>
      )}
    </div>
  );
}
