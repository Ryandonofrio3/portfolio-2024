"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";

import { RiNextjsLine, RiNextjsFill} from "react-icons/ri";
import PythonLogo from '../public/pythonlogo.svg';
import TailwindLogo from '../public/tailwindlogo.svg';
import PostGresLogo from '../public/postgres.svg';
import DNA from '../public/molec.svg';
import RLogo from '../public/r.svg';
import R2Logo from '../public/r2.svg';
import { FaRProject } from 'react-icons/fa';



const PythonIconBefore = () => {
    return (
      <PythonLogo className="filter grayscale" />
    );
  };
  
  const PythonIconAfter = () => {
    return (
      <PythonLogo className="" />
    );
  };

  const TailwindIconBefore = () => {
    return (
      <div className="w-40 h-40">
        <TailwindLogo className="filter grayscale w-full h-full" />
      </div>
    );
  };
  
  const TailwindIconAfter = () => {
    return (
      <div className="w-40 h-40">
        <TailwindLogo className="w-full h-full" />
      </div>
    );
  };


  const PostGresIconBefore = () => {
    return (
      <PostGresLogo className="filter grayscale w-32 h-32" />
    );
  };
  
  const PostGresIconAfter = () => {
    return (
      <PostGresLogo className="w-32 h-32" />
    );
  };

  const DNAIconBefore = () => {
    return (
      <DNA className=" filter grayscale w-48 h-48 text-white" />
    );
  };
  
  const DNAIconAfter = () => {
    return (
      <DNA className="w-48 h-48" />
    );
  };

  const RIconBefore = () => (
    <div className="w-40 h-40">
      <RLogo className="filter grayscale w-full h-full" />
    </div>
  );
  
  const RIconAfter = () => (
    <div className="w-40 h-40">
      <RLogo className="w-full h-full" />
    </div>
  );

  const R2IconBefore = () => (
    <div>
      <FaRProject className="text-9xl text-center mx-auto text-white" />
    </div>
  );
  
  const R2IconAfter = () => (
    <FaRProject className="text-9xl text-center mx-auto text-blue-500" />
  );
export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto px-8 bg-black dark:bg-white w-full">
        <Card 
        title="Next JS" 
        icon_before={<RiNextjsFill className="text-white" />}
         icon_after={<RiNextjsLine className="text-white" />}
         projects_include="Eureka"
         link="https://furnisheureka.com"
         >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-slate-500"
          />
        </Card>
        <Card title="Python" 
        icon_before={<PythonIconBefore />} 
        icon_after={<PythonIconAfter /> } 
        link="https://research-radar.com"
        projects_include="ResearchRadar">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-yellow-300"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-white/50 dark:bg-white/90" />
        </Card>
        <Card title="TailwindCSS" icon_before={<TailwindIconBefore />} icon_after={<TailwindIconAfter />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-blue-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title="R" icon_before={<R2IconBefore />} icon_after={< R2IconAfter />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card> 
        <Card title="Postgres" icon_before={<PostGresIconBefore />} icon_after={<PostGresIconAfter />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-950"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card title="CRISPR Engineering" icon_before={<DNAIconBefore />} icon_after={<DNAIconAfter />}
        projects_include="Sirt6, SNMP2">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-rose-400"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
    title,
    icon_before,
    icon_after,
    projects_include,
    link,
    children,
  }: {
    title: string;
    icon_before: React.ReactNode;
    icon_after: React.ReactNode;
    children?: React.ReactNode;
    projects_include?: string;
    link?: string;
  }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
        >
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />
  
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full w-full absolute inset-0"
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
  
          <div className="relative z-20">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: hovered ? -20 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-center w-full mx-auto flex items-center justify-center"
            >
              {hovered ? (
                <div className="text-9xl">{icon_after}</div>
              ) : (
                <div className="text-9xl">{icon_before}</div>
              )}
            </motion.div>
            <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4 font-bold group-hover/canvas-card:text-white transition duration-200 text-center">
              {title}
            </h2>
            {projects_include && (
              <div className="mt-4 text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4 font-bold group-hover/canvas-card:text-white transition duration-200 text-center">
                Project Highlight: {projects_include}
              </div>
            )}

          </div>
        </div>
      </a>
    );
  };

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};
