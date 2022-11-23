import React from 'react'

const Carousel = () => {
    return (
        <div className='flex flex-col carousel-bg items-center h-screen'>
            <div className='flex w-full space-x-4 px-20 mt-6'>
                <div className='text-white font-semibold text-2xl'>
                    Hack with MAIT 1.0
                </div>
                <div className='bg-gradient-to-r from-white to-transparent w-[70vw] h-2 mt-4'>
                </div>
            </div>
            <div className='ring m-12 h-full w-[90vw]'>

            </div>
        </div>
    )
}

export default Carousel