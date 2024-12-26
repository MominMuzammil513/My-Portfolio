"use client";

import { Check, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skills = [
    { text: "Collaborating on projects", available: true },
    { text: "Debugging and optimizing code", available: true },
    { text: "Recommending tools and resources", available: true },
    { text: "Providing technical support", available: false }
  ]
  
export default function AboutSection() {
  return (
    <div className="bg-gradient-to-br from-purple-400/10 via-purple-700/10 to-purple-400/20 text-white p-8 relative overflow-hidden">
      {/* Background Grid */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_2px)] bg-[size:50px_50px]" /> */}

      <h1 className="text-2xl md:text-3xl lg:text-4xl text-white leading-tight tracking-tight w-full flex justify-start items-start pb-8">
        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-400 text-transparent bg-clip-text">
          About
        </span>
      </h1>
      <div className="max-w-7xl mx-auto flex justify-center items-center flex-col gap-14 md:flex-row relative z-10">
        {/* Left Column */}
        <motion.div
          className="space-y-8 w-3/4 pr-14 border-r-2 border-e border-white/20"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div className="flex items-center gap-6" variants={fadeInUp}>
            <div className="relative  h-16 w-16">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-400 rounded-full blur opacity-70 group-hover:opacity-100 transition" />
              {/* from-emerald-500 to-cyan-500 */}
              <Image
                src="/my-pic.png"
                alt="Profile picture"
                width={80}
                height={80}
                className="rounded-full object-cover relative border-2 border-white/10 w-full h-full"
              />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Momin Muzammil
            </h1>
          </motion.div>

          <motion.div className="space-y-8" variants={fadeInUp}>
            <p className="leading-relaxed font- text-zinc-300">
              I&apos;m a dedicated Fullstack Developer with a passion for creating
              seamless, high-performance web applications. I specialize in
              JavaScript, React, and Node.js, focusing on building scalable
              solutions that deliver exceptional user experiences. I thrive on
              solving complex problems and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-400 font-semibold"> optimizing </span> code to ensure efficiency
              and performance. My goal is to create impactful, user-centric
              products and stay ahead of the curve with the latest technologies.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-400 font-semibold"> Let’s connect </span>
              and build something amazing together!
            </p>

            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors group"
              >
                More Info
                <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="relative w-1/4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-500/10 rounded blur-xl" />
          <div className="bg-white/5 backdrop-blur-xl p-4 rounded border border-white/10 relative">
            <motion.div
              className="space-y-2"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              <h3 className="text-lg font-medium mb-2">Things I can do</h3>
              <ul className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                  >
                    {skill.available ? (
                      <div className="p-1 rounded-full bg-emerald-500/10">
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                    ) : (
                      <div className="p-1 rounded-full bg-red-500/10">
                        <X className="w-4 h-4 text-red-500" />
                      </div>
                    )}
                    <span className="font-light text-sm">{skill.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
