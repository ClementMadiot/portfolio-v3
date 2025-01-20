import { ThemeProvider } from "next-themes";
import { Header } from "./components/Header";
import { Spacing } from "../layout/Spacing";
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
          <Spacing size="md" />
          <Intro/>
          <Spacing size="md" />
          <Skills />
        </main>
      </ThemeProvider>
    </>
  );
}
