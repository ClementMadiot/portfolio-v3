import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("lg:max-w-4xl md:max-w-2xl lg:px-0.5 m-auto", props.className)}>
      {props.children}
    </section>
  );
};
