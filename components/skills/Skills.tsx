"use client"
// components/SkillsSection.tsx
import React from "react";
import { motion } from "framer-motion";
// import { SkillsImages } from "@/lib/data"; // Assuming SkillsImages is an array of objects with src and alt properties
import Image from "next/image";
import { SiDrizzle, SiExpress, SiFirebase, SiGraphql, SiMongodb, SiPostman, SiPrisma, SiRedux, SiRemix } from "react-icons/si";
import { FaDatabase, FaGitAlt, FaNodeJs, FaServer } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { IoBugSharp } from "react-icons/io5";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { LuDatabase } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
const SkillsImages = [
  { src: "/next1.svg", alt: "Next.js", className:"" },
  { src: "/re.svg", alt: "React", className:"" },
  { src: "/tail.svg", alt: "Tailwind CSS", className:"" },
  { src: "/three.svg", alt: "Three.js", className:"" },
  { src: FaNodeJs, alt: "Node.js", className:"text-green-500 text-3xl" },
  { src: SiExpress, alt: "Express.js", className:"text-white text-3xl" },
  { src: "/ts.svg", alt: "TypeScript", className:"" },
  { src: "/javascript.svg", alt: "JavaScript", className:"" },
  { src: "/git.svg", alt: "Git", className:"" },
  { src: "/dock.svg", alt: "docker-icon", className:"" },
  { src: "/python.svg", alt: "Python", className:"" },
  { src: "/html.svg", alt: "HTML", className:"" },
  { src: "/css.svg", alt: "CSS", className:"" },
  { src: BiLogoPostgresql, alt: "PostgreSQL", className:"text-4xl text-sky-400" },
  { src: RiSupabaseFill, alt: "Supabase", className:"text-3xl text-green-600" },
  { src: FaGitAlt, alt: "Git Branch", className:"text-3xl text-orange-600" },
  { src: SiRedux, alt: "Redux", className:"text-3xl text-purple-600" },
  { src: SiMongodb, alt: "MongoDB", className:"text-3xl text-green-600" },
  { src: GrMysql, alt: "MySQL", className:"text-3xl text-white/80" },
  { src: SiPostman, alt: "Postman", className:"text-4xl text-orange-600" },
  { src: VscVscode, alt: "VSCode", className:"text-4xl text-blue-400" },
  { src: SiFirebase, alt: "Firebase", className:"text-4xl text-red-500" },
  { src: SiPrisma, alt: "Prisma", className:"text-4xl text-gray-200" },
  { src: SiDrizzle, alt: "Drizzle", className:"text-4xl text-yellow-400" },
  { src: SiRemix, alt: "Remix", className:"text-3xl text-white/80" },
  { src: SiGraphql, alt: "GraphQL", className:"text-3xl text-pink-500" },
  { src: IoBugSharp, alt: "Debugging", className:"text-3xl text-orange-600" },
  { src: FaDatabase, alt: "Database", className:"text-3xl text-red-500" },
];
const SkillsSection: React.FC = () => {
  return (
    <motion.section
      id="skills"
      className="bg-gradient-to-br from-purple-400/10 via-purple-700/10 to-purple-400/20 p-10 flex justify-between items-start"
      initial="initial"
      animate="animate"
    >
    
      <div className="max-w-7xl mx-auto relative z-10 w-3/4">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl text-white leading-tight tracking-tight w-full flex flex-col justify-start items-start pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-400 text-transparent bg-clip-text">
          Skills
        </span>{" "}
        <span className="inline-block relative">
              <span className="text-gray-400 text-xl md:text-2xl lg:text-3xl">Tools & Technologies I work with</span>
            </span>
        </motion.h2>
        <motion.div
          className="flex flex-wrap gap-5 justify-start items-start"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {SkillsImages.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              }}
              className="flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 border-2 border-white/20 rounded-full backdrop-blur-sm h-16 w-16 flex items-center justify-center overflow-hidden"
              >
               {typeof skill.src === "string" ? (
                  <Image
                    src={skill.src}
                    alt={skill.alt}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <skill.src className={`${skill.className}`} /> // Render React icon
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
        <Timeline />
    </motion.section>
  );
};

export default SkillsSection;

interface TimelineEvent {
  title: string;
  description: string;
  icon: JSX.Element;
}

const timelineData: TimelineEvent[] = [
  {
    title: "Frontend Development",
    description: "Designed and developed the user interface.",
    icon: <HiOutlinePaintBrush />
  },
  {
    title: "Backend Development",
    description: "Implemented server-side logic and APIs.",
    icon: <FaServer />
  },
  {
    title: "Database Design",
    description: "Structured the database for efficiency.",
    icon: <LuDatabase />
  },
  {
    title: "System Integration",
    description: "Integrated frontend, backend, and database.",
    icon: <FiMonitor />
  },
  {
    title: "Deployment",
    description: "Deployed the project securely.",
    icon: <MdOutlineSecurity />
  }
];

const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Timeline: React.FC = () => {
  return (
    <div className="w-1/5 mx-auto">
      {/* Gradient Line */}
      <div className="relative h-full">
        <div className="absolute top-0 left-4 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-pink-500 dark:to-indigo-500"></div>

        {/* Timeline Events */}
        <div className="relative flex flex-col space-y-4">
          {timelineData.map((event, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Event Dot */}
              <div className="absolute left-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-pink-500 dark:to-indigo-500 flex items-center justify-center text-white">
                {event.icon}
              </div>

              {/* Event Content */}
              <motion.div
                className="relative ml-10 w-full"
                variants={stagger}
                initial="initial"
                animate="animate"
              >
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-500/10 rounded blur-xl" />

                {/* Content Container */}
                <div className="bg-white/5 backdrop-blur-xl p-1 border border-white/10 relative">
                  <motion.div className="space-y-0.5" variants={fadeInUp}>
                    <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">{event.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{event.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};