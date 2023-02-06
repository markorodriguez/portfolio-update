import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const NavBar = () => {

  const [burgerOpen, setBurgerOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setBurgerOpen(false);
    }
  })

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20)
    })
  }, [])

  return (
    <>
      <AnimatePresence>
        {burgerOpen && <SideBar />}
      </AnimatePresence>
        <div className={`w-screen fixed z-10 h-20 transition-all ${scroll ? 'bg-primary' : 'bg-transparent'} `}>
        <nav className={`md:container  mont-font  px-4 w-11/12 mx-auto py-4 font-medium text-white text-sm flex justify-between md:items-center `}>
          <motion.span
            initial={{ y: -10, opacity: 0 }}
            transition={{ duration: 1.85, type: "spring", delay: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            className="cursor-pointer -my-3 md:my-0 underline underline-offset-8 text-2xl decoration-4 text-light"
          >
            M
          </motion.span>
          <motion.div
            className="md:hidden"
            initial={{ y: -10, opacity: 0 }}
            transition={{ duration: 1.85, type: "spring", delay: 0.25 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div
              id="nav-icon3"
              className={`${burgerOpen ? "open " : ""}`}
              onClick={() => {
                setBurgerOpen(!burgerOpen);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.div>
          <div className="md:flex h-full md:items-center hidden">
            <motion.a
              href="/#about"
              initial={{ opacity: 0 }}
              transition={{ duration: 1.85, type: "spring", delay: 0.25 }}
              animate={{ y: 0, opacity: 1 }}
              className="mr-4 flex hover:text-light hover:cursor-pointer transition-all"
            >
              <span className="text-light font-semibold mx-2"> 01. </span> About
            </motion.a>
            <motion.a
              href="/#experience"
              initial={{ opacity: 0 }}
              transition={{ duration: 1.85, type: "spring", delay: 0.30 }}
              animate={{ y: 0, opacity: 1 }}
              className="mx-4 flex hover:text-light hover:cursor-pointer transition-all"
            >
              <span className="text-light font-semibold mx-2"> 02. </span>{" "}
              Experience
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              transition={{ duration: 1.85, type: "spring", delay: 0.35 }}
              animate={{ y: 0, opacity: 1 }}
              className="mx-4 flex hover:text-light hover:cursor-pointer transition-all"
            >
              <span className="text-light font-semibold mx-2"> 03. </span> Work
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              transition={{ duration: 1.85, type: "spring", delay: 0.40 }}
              animate={{ y: 0, opacity: 1 }}
              className="mx-4 flex hover:text-light hover:cursor-pointer transition-all"
            >
              <span className="text-light font-semibold mx-2"> 04. </span> Contact
            </motion.a>
            <motion.button
              initial={{ opacity: 0 }}
              transition={{ duration: 1.85, type: "spring", delay: 0.45 }}
              animate={{ y: 0, opacity: 1 }}
              className="ml-4 border-light text-light border-2 py-2 px-4 rounded-md hover:text-gray-300 hover:bg-light transition-all"
            >
              Resume
            </motion.button>
          </div>
        </nav>
      </div>


    </>
  );
};

const SideBar = () => {

  return (
    <div className="fixed overflow-hidden top-0 z-10 text-gray-300 flex flex-row-reverse h-screen w-full">
      <motion.div
        initial={{
          position: 'absolute',
          x: '100%',
          opacity: 0
        }}
        animate={{
          position: 'absolute',
          overflow: 'hidden',
          x: '0',
          opacity: 1
        }}
        exit={{
          position: 'absolute',
          x: '100%',
          opacity: 1
        }}
        className={`w-6/12 h-full shadow-lg bg-secondary `}>
        <div className="relative  font-semibold flex flex-col py-4 justify-center text-center gap-10 items-center mx-auto h-full">
          <motion.a
            href="/#about"
            initial={{ opacity: 1 }}
            transition={{ duration: 1.85, type: "spring", delay: 0.25 }}
            animate={{ x: 0, opacity: 1 }}
            className=" hover:text-light hover:cursor-pointer transition-all"
          >
            <span className="text-light font-semibold block "> 01. </span> About
          </motion.a>
          <motion.a
            href="/#experience"
            initial={{ opacity: 1 }}
            transition={{ duration: 1.85, type: "spring", delay: 0.30 }}
            animate={{ x: 0, opacity: 1 }}
            className=" hover:text-light hover:cursor-pointer transition-all"
          >
            <span className="text-light font-semibold block "> 02. </span>{" "}
            Experience
          </motion.a>
          <motion.a
            initial={{ opacity: 1 }}
            transition={{ duration: 1.85, type: "spring", delay: 0.35 }}
            animate={{ x: 0, opacity: 1 }}
            className="  hover:text-light hover:cursor-pointer transition-all"
          >
            <span className="text-light font-semibold block "> 03. </span> Work
          </motion.a>
          <motion.a
            initial={{ opacity: 1 }}
            transition={{ duration: 1.85, type: "spring", delay: 0.40 }}
            animate={{ x: 0, opacity: 1 }}
            className=" hover:text-light hover:cursor-pointer transition-all"
          >
            <span className=" text-light font-semibold block "> 04. </span> Contact
          </motion.a>
          <motion.button
            initial={{ opacity: 1 }}
            transition={{ duration: 1.85, type: "spring", delay: 0.45 }}
            animate={{ x: 0, opacity: 1 }}
            className=" border-light text-light border-2 py-2 px-4 rounded-md hover:text-gray-300 hover:bg-light transition-all"
          >
            Resume
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
};

export default NavBar;
