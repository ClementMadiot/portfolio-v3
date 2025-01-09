"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex">
      {theme === "light" && (
        <Button onClick={() => setTheme("dark")}>
          <MdOutlineDarkMode className="size-8" />
        </Button>
      )}
      {theme === "dark" && (
        <Button onClick={() => setTheme("light")}>
          <CiLight className="size-8" />
        </Button>
      )}
    </div>
  );
}
