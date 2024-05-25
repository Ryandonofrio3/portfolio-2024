"use client";
import { BackgroundBeams } from "./ui/bg-beams";
import { Button } from "./ui/button";
import { TypewriterEffectDemo } from "./components/typewriter";
import { TracingBeam } from "./ui/tracing-beam";
import { HoverEffect } from "./ui/card-hover";
import Footer from "./components/footer";

import { AiOutlinePython } from "react-icons/ai";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaRProject } from "react-icons/fa";
import { GiDna1 } from "react-icons/gi";
import { BiLogoPostgresql } from "react-icons/bi";
import { BackgroundGradient } from "./components/background-gradient";
import { GlowingStarsBackgroundCard } from "./components/glowing-stars";
import { CanvasRevealEffectDemo } from "./components/hover-effect";


export default function Home() {

  const hoverItems = [
    {
      title: "Python",
      description: "",
      icon_before: <AiOutlinePython className="text-6xl text-center mx-auto text-white" />,
      icon_after: <AiOutlinePython className="text-6xl text-center mx-auto text-black" />,
    },
    {
      title: "NextJS",
      description: "",
      icon: <RiNextjsLine className="text-6xl text-center mx-auto text-white" />,
    },
    {
      title: "TailwindCSS",
      description: "",
      icon: <RiTailwindCssFill className="text-6xl text-center mx-auto text-white" />,
    },
    {
      title: "R",
      description: "",
      icon: <FaRProject className="text-6xl text-center mx-auto text-white" />,
    },
    {
      title: "CRISPR Engineering",
      description: "",
      icon: <GiDna1 className="text-6xl text-center mx-auto text-white" />,
    },
    {
      title: "PostgreSQL",
      description: "",
      icon: <BiLogoPostgresql className="text-6xl text-center mx-auto text-white" />,
    },
    
  ];

  return (
    <main>
      <div className="h-[50rem] w-full dark:bg-white bg-black dark:bg-grid-small-black/[0.2] bg-grid-small-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
        <TypewriterEffectDemo />
        <BackgroundBeams />
      </div>
      <div className="text-white text-6xl font-bold ml-64">
        Experience
      </div>
      <TracingBeam>
        <div className="text-center text-white bg-black">
          <div className="mt-10">
            <h3 className="text-2xl font-semibold">Maximus</h3>
            <p className="italic">AI Software Engineer | June 2024 – Present</p>
            <ul className="list-disc list-inside mt-4 text-left">
              <li>Working on Internal AI-focused Tooling for Healthcare</li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold">Dr. Craig Montell Lab</h3>
            <p className="italic">Graduate Student Researcher | Aug 2021 – Jan 2024</p>
            <ul className="list-disc list-inside mt-4 text-left">
              <li>Independently engineered neural networks for detection and classification of mosquito feeding behavior, playing a crucial role in advancing lab research</li>
              <li>Led a comprehensive project conducting 500,000+ Monte Carlo simulations to model the dynamics of mosquitoes in naturalistic environments, informing vector control strategies in two ongoing studies</li>
              <li>Utilized CRISPR-Cas9 to induce genetic mutations in Mosquitoes and Fruit flies</li>
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold">ResearchRadar</h3>
            <p className="italic">Co-Founder | Feb 2023 – Dec 2023</p>
            <ul className="list-disc list-inside mt-4 text-left">
              <li>Launched and strategically grew an AI-driven platform offering personalized, real-time updates on scientific literature personalized to individual interests and subfield</li>
              <li>Attracted and retained 400+ users in targeted academic communities within the first three months</li>
            </ul>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold">Longevity Clinic</h3>
            <p className="italic">AI Software Engineer and Consultant | Oct 2023 – Jan 2024</p>
            <ul className="list-disc list-inside mt-4 text-left">
              <li>Drove the end-to-end development of an AI-powered chatbot for life sciences, guiding the project from initial concept to deployment in a production environment</li>
              <li>Solely responsible for the conception and implementation of an advanced Retrieval Augmented Generation (RAG) pipeline, managing and processing over 10,000 documents, significantly enhancing chatbot responsiveness and accuracy</li>
            </ul>
          </div>
      </div>
    </TracingBeam>
    <div className="text-white text-6xl font-bold ml-64 mt-64">
      Skills and Projects
    </div>
    <div className="mt-10">
        <CanvasRevealEffectDemo
      
      />
    </div>
    <div className="mt-10 text-white text-6xl font-bold ml-64">
      {/* <CanvasRevealEffect
        animationSpeed={5.1}
        containerClassName="bg-emerald-900"
      /> */}
    </div>
    <div className="mt-10">
      <Footer />
    </div>
  </main>
);
}