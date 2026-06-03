"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-20 mt-24 md:mt-40 w-full z-[20] overflow-x-hidden gap-10 max-w-[1440px] mx-auto"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start z-[20] mt-[100px] sm:mt-auto">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full-Stack Developer &nbsp;
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 text-5xl sm:text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Transforming Ideas into
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Solutions
            </span>{" "}

          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-4 md:my-5 max-w-[600px]"
        >
          Experienced full-stack developer with a strong focus on backend API development and database design, proficient in Node.js and Laravel. I build scalable backend systems that power dynamic UIs, modernize legacy platforms, and improve performance through targeted audits and cross-functional collaboration.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="#skills"
        >
          My skills
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none w-[260px] sm:w-[360px] md:w-[650px] h-auto"
        />
      </motion.div>
    </motion.div>
  );
};
