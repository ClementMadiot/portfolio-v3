import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{ className?: string, id?: string }>) => {
  return (
    <section id={props.id} className={cn("xl:max-w-5xl  lg:max-w-4xl md:max-w-2xl mx-auto my-2 max-vsm:px-2 max-sm:px-4 max-md:px-6 pt-10", props.className)}>
      {props.children}
    </section>
  );
};
