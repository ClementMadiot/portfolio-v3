// import Image from "next/image";

import { ThemeProvider } from "next-themes";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <main className="dark:bg-background dark:text-foreground">
          <ThemeSwitcher />
          <Header/>
        </main>
      </ThemeProvider>
    </>
  );
}
