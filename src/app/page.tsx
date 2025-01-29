
import { Header } from "./components/Header";
import { Spacing } from "./components/layout/Spacing";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
        <main className="dark:bg-background dark:text-foreground">
          <Header />
          <Spacing size="md" />
          <Hero />
          <About />
          <Spacing size="sm" />
          <Skills />
          <Projects />
          {/* <Spacing size="md" /> */}
          <Contact />
          <Footer />
        </main>
    </>
  );
}
