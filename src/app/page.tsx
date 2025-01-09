import { ThemeProvider } from "next-themes";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <main className="dark:bg-background dark:text-foreground overflow-hidden">
          <Header />
        </main>
      </ThemeProvider>
    </>
  );
}
