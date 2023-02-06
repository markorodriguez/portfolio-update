import React from 'react'

interface IExpCard {
  title: string,
  description: string,
  tools: string[],
  image: string,
  url: string
}

const ExpCard = ({ title, description, tools, image, url }: IExpCard) => {
  return (
    <div>
      <div className='bg-gray-900 rounded-lg shadow-lg p-4'>
        <div className='flex flex-col items-center'>
          <img src={image} alt={title} className='w-32 h-32 rounded-full object-cover' />
          <h3 className='text-xl text-gray-300 mt-4'>{title}</h3>
          <p className='text-gray-300 mt-2'>{description}</p>
          <div className='flex flex-wrap justify-center mt-4'>
            {tools.map((tool, index) => (
              <span key={index} className='bg-gray-700 text-gray-300 py-1 px-2 rounded-lg m-1'>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpCard