"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { HoverEffect } from "./hover-effect";

const filters = ["All", "Frontend", "DevOps", "Backend", "Full Stack"] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const filteredProjects = projects.filter((project) =>
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <motion.section
      id="skills"
      className="bg-gradient-to-br from-purple-400/10 via-purple-700/10 to-purple-400/20 p-10 flex justify-between items-start"
      initial="initial"
      animate="animate"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl text-white leading-tight tracking-tight w-full flex flex-col justify-start items-start pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-400 text-transparent bg-clip-text">
            Projects
          </span>{" "}
          <span className="inline-block relative">
            <span className="text-gray-400 text-xl md:text-2xl lg:text-3xl">
              Things I&apos;ve built
            </span>
          </span>
        </motion.h2>
        <div className="">
          <div className="flex flex-wrap gap-2 border-y border-white/50 p-1 w-max">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant="ghost"
                size="sm"
                className={`text-sm rounded-none cursor-pointer  ${
                  activeFilter === filter
                    ? "bg-zinc-800 text-zinc-100 border border-white/50"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-4"
            layout
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <HoverEffect/>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
