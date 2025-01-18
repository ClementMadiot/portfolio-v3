"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher({ className }: { className: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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
