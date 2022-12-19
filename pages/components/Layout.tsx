import React from 'react'

const Layout = ({children}:any) => {
  return (
    <div className='w-full min-h-screen bg-primary'>
      <>{children}</>
    </div>
  )
}

export default Layout