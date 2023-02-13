
import Link from 'next/link'
import React, {useEffect} from 'react'
import {FaLink, FaGithub } from 'react-icons/fa'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IWorkCard {
  title: string,
  tools: string[],
  github: string,
  deployed: string
}

const variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 1.5, type: "spring" } },
};


const WorkCard = ({title, tools, github, deployed}:IWorkCard) => {
  
  const controls = useAnimation();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

  return (
    <motion.div 
    ref={ref}
    animate={controls}
    variants={variants}
    initial="hidden" 
    className='bg-secondary  h-full w-full mx-auto flex flex-col justify-around rounded-lg shadow-lg py-6'>
      <span className='font-semibold text-lg text-gray-300'>{title}</span>
      <div className='flex mt-4 flex-wrap justify-center'>
        {tools.map((tool, idx) => (
          <span className='bg-light bg-opacity-10 text-gray-100 text-sm py-2 px-3 mx-4 my-4 rounded-lg shadow-md' key={idx}>{tool}</span>
        ))}
      </div>
      <div className='flex flex-col text-c-white text-sm items-center justify-center'>
        <Link target='_blank' href={deployed}  className='my-2 hover:text-light transition-all'><span>Deployed version  </span><FaLink className='inline-block mx-4' /></Link>
        <Link target='_blank' href={github} className='my-2 hover:text-light  transition-all'><span>GitHub repo  </span><FaGithub className='inline-block mx-4' /></Link>
      </div>
    </motion.div>
  )
}

export default WorkCard