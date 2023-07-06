import React from 'react'

export const Headers = () => {
  return (
    <>
    
        <header className='bg-black max-h-[40rem] w-full overflow-hidden relative brightness-100'>

          <div className='flex justify-around p-6'>
              <h1 className='text-[#ff0000] text-bold text-6xl z-50'>BBH<span className='text-gray-300'>93</span></h1>
              <nav className='flex items-center justify-center z-50'>
                  <ul className='flex text-2xl text-gray-400 gap-5 flex-wrap '>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>
              </nav>
              <a href="#contact" className='bg-[#575456] border-2 border-black border-solid py-3 px-16 flex items-center justify-center text-2xl hidden lg:block'>Sign Up</a>
          </div>
            <img src="/public/humo.jpeg" alt="GymTop" className='  w-full '/>
            <img src="/public/photo13-removebg.png" alt="GymTop" className='absolute bottom-0 right-[6rem] h-full object-cover scale-150'/>

          <h1 className='text-6xl text-gray-300 absolute inset-y-[12rem] inset-x-[7rem] max-w-lg'>Make yourself stronger than your excuses.</h1>
          <a className='absolute bottom-[8rem] left-[7.2rem] text-gray-300 bg-[#ff0000] py-4 px-10 text-2xl rounded-br-3xl '>get started</a>
          
        </header>
      
    </>
  )
}
