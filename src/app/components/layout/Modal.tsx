import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ProjectCardProps } from "@/app/constants/projectIndex";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight, X } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export function Modal({
  image,
  name,
  desc,
  techs,
  code,
  link = "#",
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside); 
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild className="w-full">
        <Image
          src={image}
          alt={name}
          width={280}
          height={185}
          priority
          style={{ width: "100%", height: "auto" }}
          className="rounded-[10px] lg:min-h-[180px] hover:scale-110 duration-300 z-10 "
        />
      </AlertDialogTrigger>
      <AlertDialogContent ref={modalRef}>
        <AlertDialogCancel className="absolute rounded-full p-1.5 right-3 top-2 border-none bg-background ">
          <X />
        </AlertDialogCancel>
        {/* modal image  */}
        <div className="w-full flex justify-center overflow-hidden ">
          <Image
            src={image}
            alt={name}
            width={1080}
            height={608}
            className="w-full h-auto rounded-t-[10px] object-cover"
          />
        </div>

        <div className="flex flex-col gap-2 px-2 pb-4">
          <div className="flex justify-between mb-1 mt-4">
            <AlertDialogTitle className="text-3xl font-semibold tracking-tight text-primary">
              {name}
            </AlertDialogTitle>
            {/* Website link  */}
            <div className="flex items-center gap-4">
              <a target="_blank" href={link}>
                <Button
                  size={"lg"}
                  className="text-primary/80 hover:text-primary duration-150 px-4"
                >
                  Demo
                  <SquareArrowOutUpRight className="button-small" />
                </Button>
              </a>
              {/* github link  */}
              <a target="_blank" href={code}>
                <Button
                  size={"lg"}
                  className="text-primary/80 hover:text-primary duration-150"
                >
                  Repo
                  <FaGithub className="button-small" />
                </Button>
              </a>
            </div>
          </div>
          <AlertDialogDescription className="text-base text-primary/90 font-normal py-4">
            {desc}
          </AlertDialogDescription>
          <div className="w-full flex justify-start gap-4 flex-wrap">
            {techs &&
              techs.map((tech, index) => (
                <p key={index} className="text-[15px] text-techs font-medium">
                  #{tech}
                </p>
              ))}
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
