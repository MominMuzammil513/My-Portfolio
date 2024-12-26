"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuSend } from "react-icons/lu";
import MagicButton from "../ui/magic-button";
const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);

  const textArray = useMemo(
    () => [
      "Crafting smooth user experiences.",
      "Building secure backend systems.",
      "Designing reliable databases.",
      "Optimizing app performance.",
      "Ensuring robust authentication.",
      "Delivering user-focused solutions.",
      "Scaling systems effectively."
    ],
    []
  );
  
  

  const period = 1000;

  const tick = useCallback(() => {
    const i = loopNum % textArray.length;
    const fullText = textArray[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed((prevSpeed) => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(50);
    }
  }, [isDeleting, loopNum, text, textArray]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => {
      clearInterval(ticker);
    };
  }, [tick, typingSpeed]);

  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0"
      >
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Hi, I&apos;m{" "}
            <span className="inline-block">
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-400 text-transparent bg-clip-text">
                Muzammil
              </span>
              ,
            </span>{" "}
            Yet another{" "}
            <span className="inline-block relative">
              <span className="text-gray-400">Fullstack</span>
              <div className="absolute bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400/50 to-transparent transform -skew-x-12"></div>
            </span>{" "}
            <span className="block relative">
              <span className="text-gray-400">developer</span>
              <span className="text-violet-400/80">.</span>
              <div className="absolute bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400/50 to-transparent transform -skew-x-12"></div>
            </span>
          </h1>
        <motion.p
          initial={{ y: 2, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-balance md:text-xl text-muted-foreground py-4 font-semibold"
        ><span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-400 text-transparent bg-clip-text">{text}</span>
          <span className="cursor border-r-2 border-gray-400 rounded-full animate-blink"></span>
        </motion.p>
        {/* <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 text-justify"
        >
          I&apos;m a Full-Stack Developer crafting high-performance web
          solutions. I blend creativity with technical expertise to exceed
          expectations and push boundaries.
        </motion.p> */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-grow flex-wrap justify-center md:justify-start items-center gap-4"
        >
          <Link href="#projects">
            <MagicButton
              title="Show my work"
              icon={<LuSend className="h-4 w-4" />}
              position="right"
              otherClasses="bg-blue-500 text-white font-bold py-3 px-6 hover:bg-purple-950/20"
              mainClassName="p-[2px]"
            />
          </Link>
          {/* <Link href="mailto:muzammilaumed2376@gmail.com">
              <MagicButton
                title="get in touch"
                icon={ />}
                position="right"
                otherClasses="bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              />
            </Link> */}
          {/* <Link href="mailto:muzammilaumed2376@gmail.com">
              <MagicButton
                title="get in touch"
                icon={<FaLocationArrow />}
                position=""
                otherClasses="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              />
            </Link> */}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
