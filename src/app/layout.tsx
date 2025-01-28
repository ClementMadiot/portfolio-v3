import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Clément Madiot - Web developer",
  description:
    "Web developer specializing in crafting user interfaces with React, Nextjs & Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        <ThemeProvider
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
