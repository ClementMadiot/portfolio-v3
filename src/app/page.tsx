import { ThemeProvider } from "next-themes";
import { Header } from "./components/Header";
import { Spacing } from "./components/layout/Spacing";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <main className="dark:bg-background dark:text-foreground">
          <Header />
          <Spacing size="md" />
          <Hero />
          <Spacing size="sm" />
          <Intro />
          <Spacing size="md" />
          <Skills />
        </main>
      </ThemeProvider>
    </>
  );
}
