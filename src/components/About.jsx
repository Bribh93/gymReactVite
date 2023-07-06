import React from 'react'

export const About = () => {
  return (
    <>
       <section className='md:flex p-24 bg-black gap-20'>
           <div className='w-[30rem] relative'>  
                <img src="/public/photo12.jpeg" alt="GymTOp" className='rounded-lg border-l border-[#ff0000]'/>
                <p className='bg-[#ff0000] w-40 h-40 absolute inset-y-80 right-0 hidden lg:block '></p>
           </div>
           <div className='md:flex-1 text-gray-500 pt-16'>

                <h2 className='text-[#ff0000] text-xl mb-4'>about us</h2>
                <h1 className='text-4xl text-gray-300 mb-10'>Every day is a chance to become better</h1>
                <p className='mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque officia neque voluptatem voluptates adipisi consequatur ab suscipit, necessitatibus eveniet tempore nemo? Optio quasi dolor corrupti accusamus tempore modi voluptates expedita?</p>
                <div className='flex'>
                    <div className=''>
                        
                        <h2 className='text-[#ff0000] text-xl mb-6 text-center'>body and mind</h2>
                        <p className='mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, impedit.</p>
                        <h2 className='text-[#ff0000] text-xl mb-6 text-center'>strategies</h2>
                        <p className='mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, impedit.</p>

                        <a className='text-gray-300 bg-[#ff0000] py-2 px-6  rounded-br-3xl'>read more</a>
                    </div>
                    <div cla>
                            <h2 className='text-[#ff0000] text-xl mb-6 text-center'>healthy life</h2>
                            <p className='mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, impedit.</p>
                            <h2 className='text-[#ff0000] text-xl mb-6 text-center'>workout</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, impedit.</p>
                    </div>
                </div>
            </div>
            
       </section>
    </>
  )
}
