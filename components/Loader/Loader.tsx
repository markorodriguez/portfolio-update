import React, { useState } from 'react'
import { motion, AnimatePresence} from 'framer-motion'

interface ILoader {
  changeAfterAnimation: any
}

interface ILoaderComponent {
  isVisible: boolean,
  updatePresence: any
}

const LoaderComponent = ({ isVisible, updatePresence }: ILoaderComponent) => {

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className='loader'
          key="loader"
          initial={{ opacity: 1, rotate: 45 }}
          animate={{ opacity: 1 }}
          transition={{ duration: '1' }}
          exit={{ opacity: 0, scale: 0 }}
          onAnimationEnd={()=>{
            updatePresence(false)
          }}
        />
      )}
    </AnimatePresence>
  )
}



const Loader = ({ changeAfterAnimation }: ILoader) => {
  const [isVisible, setIsVisible] = useState(true)

  setTimeout(() => {
    setIsVisible(false)
  }, 1500)

  const updatePresence = (value: boolean): void => {
    changeAfterAnimation(value);
  }


  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-primary'>
      <LoaderComponent isVisible={isVisible} updatePresence={updatePresence} />
    </div>
  )
}

export default Loader