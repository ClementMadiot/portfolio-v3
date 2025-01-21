import { ComponentPropsWithoutRef } from "react";
import { cn } from "@nextui-org/react";

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/80 hover:bg-accent/50  font-mono border-accent px-1 py-0.5 m-1 rounded-[5px] font-semibold",
        className
      )}
      {...props}
    />
  );
};