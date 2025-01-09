"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex">
      {theme === "light" && (
        <button onClick={() => setTheme("dark")}>
          <CiLight className="size-8" />
        </button>
      )}
      {theme === "dark" && (
        <button onClick={() => setTheme("light")}>
          <MdOutlineDarkMode className="size-8" />
        </button>
      )}
    </div>
  );
}
