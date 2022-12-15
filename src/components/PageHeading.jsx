import React from 'react'

const PageHeading = ({ name, color }) => {
    return (
        <div className={'flex flex-col sm:flex-row w-full space-x-4 sm:px-20 items-center p-2 mt-6 ' + (color == "blue" ? 'text-black' : 'text-white')}>
            <p className='font-bold text-2xl'>
                {name}
            </p>
            <div className={'bg-gradient-to-r w-[90%]  sm:w-[80%] h-2 mt-4 ' + (color == "blue" ? 'from-white to-transparent' : 'from-[#2441A7] to-transparent')}>
            </div>
        </div>
    )
}

export default PageHeading