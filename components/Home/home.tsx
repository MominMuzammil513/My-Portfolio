"use client";
import { motion } from "framer-motion";
import React from "react";
import Hero from "./Hero";
import Avatar from "./Avatar";
import { BackgroundGradient } from "@/components/ui/background-gradient"; // Adjust the import path as needed

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="bg-gradient-to-br from-purple-400/10 via-purple-700/10 to-purple-400/20"
    >
      <BackgroundGradient
        containerClassName="p-0 w-full rounded-md" // Add padding to the container if needed
        className="rounded-md p-4 sm:p-10 bg-white dark:bg-black w-full" // Apply rounded corners to the inner content
      >
        <div className=" relative z-10 flex flex-col md:flex-row items-center justify-center w-full p-10 border-none rounded-none  ">
          <Hero />
          <Avatar />
          </div>
      </BackgroundGradient>
    </motion.div>
  );
};

export default Home;