import React from "react";
import { Section } from "./layout/Section";

const Footer = () => {
  return (
    <footer className="bg-card">
      <Section className="py-4 sm:py-6 lg:py-8">
        <p className="text-muted-foreground text-sm">©Copyright 2025. All rights reserved.</p>
      </Section>
    </footer>
  );
};

export default Footer;
