import { ThemeProvider } from "next-themes";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { Spacing } from "../layout/Spacing";
import Intro from "./components/Intro";

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
        </main>
      </ThemeProvider>
    </>
  );
}
