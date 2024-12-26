// import Image from "next/image";

import AboutSection from "@/components/about/about-section";
import ContactSection from "@/components/contact/contact-section";
import Experience from "@/components/experience/Experience";
import Home from "@/components/Home/home";
import { Projects } from "@/components/projects/Projects";
import SkillsSection from "@/components/skills/Skills";

export default function Main() {
  return (
    <main className="max-w-7xl w-full flex flex-col gap-10 mx-auto px-1 sm:px-6 lg:px-8 py-20">
    <Home/>
    <SkillsSection/>
    <Experience/>
    <Projects/>
    <AboutSection/>
    <ContactSection/>
    </main>
  );
}
