import React from 'react'

export const Features = () => {
  return (
    <>
        <div className='bg-black  text-center grid place-items-center relative '>
            <h1 className='border border-gray-500 text-[#ff0000] text-4xl  py-2 px-6 text-center w-58 text-bold rounded z-50 bg-black '>gym features</h1>
            <p className='border-b-2 border-gray-500 absolute w-full '></p>
        </div>
        <div className='flex flex-wrap max-w-full bg-black justify-center items-center pt-8'>
            <img src="/public/photo6.jpeg" alt="photo6" className='w-[26rem] h-[26rem] object-fill'/>
            <div className='bg-[#111111] w-[26rem] h-[26rem] flex justify-center items-center flex-col '>
                    <img src="/public/Fitness_men.svg" alt="men" className='w-[10rem] h-[10rem] '/>
                    <h2 className='text-[#ff0000] text-bold text-2xl pt-2'>gym for men</h2>
                    <p className='text-gray-300 text-center px-8 py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, natus.</p>
                    <a href="#" className='text-gray-300 bg-[#ff0000] py-2 px-6  rounded-br-3xl'>read more</a>
            </div>
            <img src="/public/photo8.jpeg" alt="photo6" className='w-[26rem] h-[26rem] object-fill'/>
            <div className='bg-[#111111] w-[26rem] h-[26rem] flex justify-center items-center flex-col'>
                    <img src="/public/Fitness.svg" alt="men" className='w-[10rem] h-[10rem] '/>
                    <h2 className='text-[#ff0000] text-bold text-2xl pt-2'>body building</h2>
                    <p className='text-gray-300 text-center px-8 py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, natus.</p>
                    <a href="#" className='text-gray-300 bg-[#ff0000] py-2 px-6  rounded-br-3xl'>read more</a>
            </div>
            <img src="/public/photo10.jpeg" alt="photo6" className='w-[26rem] h-[26rem] object-fill'/>
            <div className='bg-[#111111] w-[26rem] h-[26rem] flex justify-center items-center flex-col'>
                    <img src="/public/Fitness_woman.svg" alt="men" className='w-[10rem] h-[10rem] '/>
                    <h2 className='text-[#ff0000] text-bold text-2xl pt-2'>gym for woman</h2>
                    <p className='text-gray-300 text-center px-8 py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, natus.</p>
                    <a href="#" className='text-gray-300 bg-[#ff0000] py-2 px-6  rounded-br-3xl'>read more</a>
            </div>
        </div >
    
    </>
  )
}
