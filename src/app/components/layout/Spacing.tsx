import { cn } from "@/lib/utils";

export type SpacingProps = {
  size?: "sm" | "md" | "lg";
};
export const Spacing = ({ size = "md" }: SpacingProps) => {
  return (
    <div
      className={cn({
        "h-4 lg:h-6": size === "sm",
        "h-8 lg:h-16": size === "md",
      })}
    />
  );
};
