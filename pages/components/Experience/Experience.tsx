import React from 'react'
import { Tab } from '@headlessui/react'
import { FaHospital, FaSms } from 'react-icons/fa'

const expData = [
  {
    company: 'Clinica San Andrés',
    place: 'Lima, Peru',
    position: 'Intern Developer',
    period: 'March 2022 - June 2022',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    tools: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    image: <FaHospital className='mx-4' />,
    activities: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    ]
  },
  {
    company: 'Mowa Consultora',
    place: 'Lima, Peru',
    position: 'Intern Developer',
    period: 'September 2022 - Now',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    tools: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    image: <FaSms className='mx-4' />,
    activities: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    ]
  },


]

const Experience = () => {
  return (
    <div className='md:container text-center h-screen py-24 mx-auto w-11/12' id="experience">

      <h2 className='text-2xl text-gray-300 underline underline-offset-8 decoration-light decoration-4'>Experience</h2>

      <div className="w-auto mx-auto max-w-screen-sm px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-light bg-opacity-10 rounded-lg">
            {expData.map((exp, index) => (
              <Tab key={index} className={({ selected }) =>
                `${selected ? 'bg-light text-white ' : 'text-gray-300 '
                } relative flex-1 flex justify-center items-center py-2.5 text-sm font-medium rounded-lg cursor-pointer focus:outline-none`}
              >
                {exp.image} {exp.company}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-10">
            {expData.map((exp, index) => (
              <Tab.Panel key={index} className="px-4 py-2 text-gray-300">
                <div className='bg-secondary rounded-lg shadow-lg p-4'>
                  <div className='flex flex-col text-left'>
                    <span className='text-light font-semibold'>Period: </span> {exp.period} 
                    <span className='text-light font-semibold'>Role: </span> {exp.position}
                    <span className='text-light font-semibold'>Activities: </span> {exp.activities}
                    <span className='text-light font-semibold'>Tools: </span> {exp.tools}
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>



    </div>
  )
}

export default Experience