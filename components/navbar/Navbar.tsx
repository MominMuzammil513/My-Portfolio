"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/switcher/ThemeSwitcher";
import { navItems } from "@/lib/data";

const Navbar = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  console.log(scrollYProgress.get(), scrollYProgress.getPrevious(),"------",visible,"TTTTT");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "relative inline-flex h-auto w-full max-w-fit md:min-w-[70vw] lg:min-w-fit overflow-hidden p-[1px] focus:outline-none mx-auto",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          borderRadius: "12px",
        }}
      >
        {/* Spinning border gradient */}
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

        {/* Navbar content */}
        <div
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-zinc-950 px-5 text-sm font-medium backdrop-blur-3xl gap-2 py-3`}
        >
          {navItems.map(
            (
              navItem: {
                name: string;
                link: string;
                icon?: JSX.Element;
              },
              index: number
            ) => (
              <Link
                key={`link=${index}`}
                href={navItem.link}
                className="relative group"
              >
                <div className="relative px-3 py-1 overflow-hidden transition-colors duration-300 ease-in-out group-hover:text-white border rounded-md">
                  <span className="absolute hidden group-hover:inline-block inset-[-1000%] animate-[spin_2s_linear_infinite] opacity-80 rounded-md bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_10%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="relative z-10 flex items-center">
                    {navItem.icon && (
                      <span className="block sm:hidden mr-2">
                        {navItem.icon}
                      </span>
                    )}
                    <span className="text-sm !cursor-pointer">
                      {navItem.name}
                    </span>
                  </span>
                </div>
              </Link>
            )
          )}
        <ThemeSwitcher/>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
