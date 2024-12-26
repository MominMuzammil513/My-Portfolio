"use client";
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import {  Icon } from "../ui/evervault-card";
import Link from "next/link";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Project } from "@/lib/data";
import { CardContainer } from "../ui/3d-card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <CardContainer className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto relative inter-var">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <Link href={`/project/${project.id}`} className="relative w-full h-48" >
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          className="object-cover transition-transform"
        />
      </Link>

      <CardHeader className="border-t w-full p-0 pl-2 pt-4 pb-2">
        <Link href={`/project/${project.id}`} className="hover:text-purple-500">
          <CardTitle>{project.title}</CardTitle>
        </Link>
        <CardDescription className="py-2">
          {project.description}
        </CardDescription>
          </CardHeader>
        <div className="flex justify-between items-center border-t p-2 w-full">
          <div className="flex flex-row items-center justify-center">
            <AnimatedTooltip items={project.technologies} />
          </div>
          <Link
            href={project.gitHub}
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
          >
            <GoArrowUpRight className="w-4 h-4 text-zinc-400" />
          </Link>
        </div>
    </CardContainer>
  );
}
