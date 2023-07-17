import React from 'react'
import Profile from './Profile'

const Blob = () => {
  return (
    <div className='relative w-full flex items-center justify-center '>
      <div className='absolute w-40 scale-[1.45] md:scale-[2]'>
      <svg  viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00ADB5" d="M69.4,-24.2C76.5,-0.7,59.6,29,34.7,46.9C9.8,64.8,-23,70.9,-42,57.2C-61.1,43.6,-66.2,10.2,-56.9,-16.4C-47.6,-42.9,-23.8,-62.7,3.7,-63.9C31.2,-65.1,62.3,-47.7,69.4,-24.2Z" transform="translate(100 100)" />
        </svg>
      </div>
        
      <div className='absolute w-60'>
        <Profile  />
      </div>
    </div>


  )
}

export default Blob