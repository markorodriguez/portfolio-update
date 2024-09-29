import React from "react";
import Blob from "./Me/Blob";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen h-full relative bg-primary" id="about" >
      <div className="md:container absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center  flex flex-col items-center mx-auto w-11/12">
        <motion.h2
          initial={{ y: -10, opacity: 0 }}
          transition={{ duration: 1.85, type: "spring", delay: 0.45 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl text-gray-200"
        >
          Who am I ?
        </motion.h2>
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          transition={{ duration: 1.85, type: "spring", delay: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl mb-14 my-4 text-light underline underline-offset-[1rem] decoration-gray-300 unica-font"
        >
          MARKO.
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          transition={{ duration: 1.85, type: "spring", delay: 0.55 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:w-5/12 w-10/12 text-base md:text-lg text-justify md:text-center  text-gray-300"
        >
          I'm a{" "}
          <span className="text-light font-semibold">software developer</span>{" "}
          with a passion for building beautiful and functional websites. I'm
          always eager to learn and{" "}
          <span className="text-light font-semibold">stay up-to-date </span>
          with the latest web development trends and technologies. I'm excited
          to continue growing as a{" "}
          <span className="text-light font-semibold">web developer</span> and
          creating impactful digital solutions.
        </motion.p>

        <motion.div
          className="relative md:block my-28 md:my-40"
          initial={{ y: 10, opacity: 0 }}
          transition={{ duration: 1.85, type: "spring", delay: 0.6 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Blob />
        </motion.div>
      </div>
      <div className="md:container hidden md:inline mx-auto left-1/2 -translate-x-1/2 absolute bottom-6 w-full">
        <motion.span initial={{ y: 0, opacity: 0 }}
          transition={{ duration: 1.85, type: "spring", delay: 0.65 }}
          animate={{ y: 0, opacity: 1 }} className="scroll-down mx-auto "></motion.span>
      </div>
    </div>
  );
};

export default Hero;
