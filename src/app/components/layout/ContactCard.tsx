import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export const ContactCard = (props: {
  image: string;
  mediumImage: React.ElementType;
  name: string;
  description: string;
  url: string;
  classCard?: string;
  classDesc?: string;
}) => {
  return (
    <Link href={props.url} target="_blank">
      <Card
        className={`bg-accent/10 hover:bg-accent/50 transition-colors flex items-center gap-4 cursor-pointer mb-2 p-2 ${props.classCard}`}
      >
        <div className="flex relative z-10">
          <Image
            src={props.image}
            alt={props.name}
            width={40}
            height={40}
            className="z-0 rounded-full object-contain"
          />
          <props.mediumImage
            size={16}
            className="absolute -bottom-1 left-6 z-50 rounded-full object-contain bg-background bg-[#ffffff]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className={`${props.classDesc} text-xs font-semibold`}>
            {props.name}
          </p>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight className="ml-auto" />
      </Card>
    </Link>
  );
};
