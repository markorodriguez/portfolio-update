import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Layout = ({ children }: any) => {
  return (
    <div className='w-full min-h-screen bg-primary'>
      {children}
      {/* <VerticalLinks /> */}
    </div>
  )
}

const VerticalLinks = () => {
  return (
    <motion.div transition={{ duration: 1.85, type: "spring", delay: 0.2 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='md:container md:left-1/2 md:-translate-x-1/2 px-8 absolute bottom-0' >
      <div className='flex'>
        <div className='flex flex-col'>
          <FaGithub className='mb-10 cursor-pointer scale-150 text-c-white hover:text-light transition-all' />
          <FaLinkedin className='mb-8 cursor-pointer scale-150 text-c-white hover:text-light transition-all' />
          <span className='border-2 ml-1 h-60 w-0'>
          </span>
        </div>
      </div>

    </motion.div>

  )
}

export default Layout