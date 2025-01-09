import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex flex-col">
        <h1 className="text-4xl font-bold text-primary">Clément</h1>
        <p className="text-lg text-muted-foreground">Web developer</p>
        <div className="flex-1" />
      </Section>
    </header>
  );
};
