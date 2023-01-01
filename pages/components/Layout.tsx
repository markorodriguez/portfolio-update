import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Layout = ({ children }: any) => {
  return (
    <div className='w-full min-h-screen bg-primary'>
      <>{children}</>
      <VerticalLinks />
    </div>
  )
}

const VerticalLinks = () => {
  return (
    <motion.div animate={{bottom: 0}} className='md:container md:left-1/2 md:-translate-x-1/2 px-8 absolute bottom-0' >
      <div className='flex flex-col'>
        <FaGithub className='mb-10 cursor-pointer scale-150 text-c-white hover:text-light transition-all' />
        <FaLinkedin className='mb-8 cursor-pointer scale-150 text-c-white hover:text-light transition-all' />
        <span className='border-2 ml-1 h-60 w-0'>
        </span>
      </div>
    </motion.div>

  )
}

export default Layout