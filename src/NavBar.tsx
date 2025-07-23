// import { useState } from 'react'

function NavBar() {

  return (
    <>
      {/* return some navbar code */}
        {/* <div className='w-full top-0 z-50 bg-white border-b-2 fixed flex items-center h-10 px-5'> */}
        <div className='w-full top-0 z-50 bg-white/20 backdrop-blur-md border-b-1 fixed flex items-center h-10 px-5'>
            <div className='w-1/3 flex justify-start'>
                <a className='uppercase px-2'>ABOUT</a>
                <a className='uppercase px-2'>PROJECTS</a>
            </div>
            
            <div className='w-1/3 flex justify-center'>
                <p className='uppercase'>Raumaan</p>
            </div> 


        </div>
    </>
  )
}

export default NavBar;