import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <Image src='/images/me.jpg' className='rounded-full' width='200' height='200' alt='profile_picture' />
  )
}

export default Profile