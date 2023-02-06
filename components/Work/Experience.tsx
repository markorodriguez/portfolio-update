import React from 'react'
import ExpCard from './ExpCard'

const expData = [
  {
    title: 'Pokemon App',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    tools: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    image: 'https://i.imgur.com/4Z0ZQ2M.png',
    url: 'https://pokemon-app-eta.vercel.app/'
  },

  
]

const Experience = () => {
  return (
    <div className='md:container text-center h-screen py-24 mx-auto w-11/12' id="experience">

        <h2 className='text-2xl text-gray-300 underline underline-offset-8 decoration-light decoration-4'>Experience</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
          {expData.map((exp, index) => (
            <ExpCard key={index} title={exp.title} description={exp.description} tools={exp.tools} image={exp.image} url={exp.url} />
          ))}
        </div>
    </div>
  )
}

export default Experience