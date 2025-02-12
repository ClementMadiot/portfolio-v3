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
  title: "Clément Madiot - Développeur Web",
  description:
    "Clément Madiot est un développeur web passionné, spécialisé dans la création d'interfaces utilisateur dynamiques et réactives avec React, Next.js et Tailwind CSS. Avec un œil attentif pour le design et un engagement à fournir des expériences web de haute qualité, Clément transforme les idées en sites web interactifs et visuellement attrayants. Explorez le portfolio pour découvrir une sélection de projets innovants et en savoir plus sur l'expertise de Clément dans les technologies modernes de développement web.",
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
        <ThemeProvider defaultTheme="light"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
