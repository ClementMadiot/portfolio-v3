import { ThemeProvider } from "next-themes";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { Spacing } from "./components/Spacing";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <main className="dark:bg-background dark:text-foreground">
          <Header />
          <Spacing size="md" />
          <Hero />
        </main>
      </ThemeProvider>
    </>
  );
}
