import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <>
      <AnimatePresence>
        {burgerOpen && <SideBar />}
      </AnimatePresence>
      <nav className="md:container w-11/12 mx-auto py-4 text-white text-sm flex justify-between md:items-center">
        <motion.span
          initial={{ y: -10, opacity: 0 }}
          transition={{ duration: 1.85, type: "spring", delay: 0.2 }}
          animate={{ y: 0, opacity: 1 }}
          className="h-full cursor-pointer"
        >
          Logo
        </motion.span>
        <motion.div
          className="md:hidden z-30"
          initial={{ y: -10, opacity: 0 }}
          transition={{ duration: 1.85, type: "spring", delay: 0.25 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div
            id="nav-icon3"
            className={` ${burgerOpen ? "open" : ""}`}
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
            initial={{ opacity: 0 }}
            transition={{ duration: 1.85, type: "spring", delay: 0.25 }}
            animate={{ y: 0, opacity: 1 }}
            className="mr-4 flex hover:text-light hover:cursor-pointer transition-all"
          >
            <span className="text-light font-semibold mx-2"> 01. </span> About
          </motion.a>
          <motion.a
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
            className="ml-4 border-light text-light border-2 py-2 px-4 rounded-md hover:text-c-white hover:bg-light transition-all"
          >
            Resume
          </motion.button>
        </div>
      </nav>

    </>
  );
};

const SideBar = () => {

  return (
    <div  className="absolute top-0 h-screen w-full z-10">
      <motion.div initial={{display: 'none'}} animate={{position: 'absolute', right: '0'}} className={`w-5/12 h-full shadow-lg bg-secondary `}></motion.div>
    </div>
  )
};

export default NavBar;
