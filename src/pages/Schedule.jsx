import React from 'react';
import location from '../assets/location.svg';

const Schedule = () => {
    return (
        <div className='flex flex-col h-screen Timeline'>
            <div className='flex w-full space-x-4 mt-6 px-20'>
                <div className='font-bold text-2xl'>
                    Schedule
                </div>
                <div className='bg-gradient-to-r from-[#2441A7] to-transparent w-[70%] h-2 mt-4'>
                </div>
            </div>

            <div className='flex flex-col w-full space-x-4 mt-12 px-20'>
                <div className='flex items-center'>
                    <div className='box rounded-l-lg p-4 bg-gradient-to-r from-red-700 to-rose-400 w-[10%]' style={{ 'marginRight': '-2.5vw' }}>
                    </div>
                    <div className='box p-3 bg-white w-[6%]' style={{ 'borderRadius': '2.5vw 2.5vw 2.5vw 2.5vw', 'zIndex': '1', }}>
                        <img src={location} alt='location' className='relative hover:-top-8 transition-all -top-6' />
                        <div className='absolute mt-2 ml-6'>
                            <p className='font-bold text-xl'>1. Lorem Ipsum Dolor</p>
                        </div>
                    </div>
                    <div className='box p-4 bg-gradient-to-r from-rose-600 to-orange-600 w-[40%]' style={{ 'marginLeft': '-2.5vw', 'marginRight': '-2.5vw' }}>
                    </div>
                    <div className='box p-3 bg-white w-[6%]' style={{ 'borderRadius': '2.5vw 2.5vw 2.5vw 2.5vw', 'zIndex': '1' }}>
                        <img src={location} alt='location' className='relative hover:-top-8 transition-all -top-6' />
                        <div className='absolute mt-2 ml-6'>
                            <p className='font-bold text-xl'>1. Lorem Ipsum Dolor</p>
                        </div>
                    </div>
                    <div className='box p-4 bg-gradient-to-r  from-orange-600 to-orange-500 w-[40%]' style={{ 'marginRight': '-2.5vw', 'marginLeft': '-2.5vw' }}>
                    </div>
                    <div className='box p-3 bg-white w-[6%]' style={{ 'borderRadius': '2.5vw 2.5vw 2.5vw 2.5vw', 'zIndex': '1' }}>
                        <img src={location} alt='location' className='relative hover:-top-8 transition-all -top-6' />
                        <div className='absolute mt-2 ml-6'>
                            <p className='font-bold text-xl'>1. Lorem Ipsum Dolor</p>
                        </div>
                    </div>
                    <div className=' box p-4 bg-gradient-to-r from-orange-500 to-orange-400 w-[30%]' style={{ 'marginLeft': '-2.5vw', 'marginRight': '0px' }}>
                    </div>
                    <div className='box rounded-tr-full p-4 bg-gradient-to-r from-orange-400 to-orange-400 w-[3.5%]' style={{ 'marginLeft': '-1px' }}>
                    </div>
                </div>


                <div className='flex flex-col items-end -mt-6 justify-end'>
                    <div className='box p-4 bg-gradient-to-b from-orange-400 to-orange-300 w-[3.5%]' style={{ 'marginLeft': '-1px' }}>
                    </div>
                    <div className='box p-4 bg-gradient-to-b from-orange-300 to-yellow-200 w-[3.5%]' style={{ 'marginLeft': '-1px' }}>
                    </div>
                    <div className='box p-4 bg-gradient-to-b from-yellow-200 to-yellow-200 w-[3.5%]' style={{ 'marginLeft': '-1px' }}>
                    </div>
                    <div className='box p-4 bg-gradient-to-b from-yellow-200 to-yellow-200 w-[3.5%]' style={{ 'marginLeft': '-1px' }}>
                    </div>
                    <div className='box p-4 bg-gradient-to-b from-yellow-200 to-yellow-300 w-[3.5%]' style={{ 'marginLeft': '-1px' }}>
                    </div>
                </div>

                <div className='flex items-center -mt-6'>
                    <div className='box rounded-tl-full p-4 bg-gradient-to-l from-cyan-400 to-cyan-400 w-[10%]' style={{ 'marginRight': '-2.5vw' }}>
                    </div>
                    <div className='box p-3 bg-white w-[6%]' style={{ 'borderRadius': '2.5vw 2.5vw 2.5vw 2.5vw', 'zIndex': '1' }}>
                        <img src={location} alt='location' className='relative hover:-top-8 transition-all -top-6' />
                        <div className='absolute mt-2 ml-6'>
                            <p className='font-bold text-xl'>1. Lorem Ipsum Dolor</p>
                        </div>
                    </div>
                    <div className='box p-4 bg-gradient-to-l from-green-300 to-cyan-400 w-[40%]' style={{ 'marginLeft': '-2.5vw', 'marginRight': '-2.5vw' }}>
                    </div>
                    <div className='box p-3 bg-white w-[6%]' style={{ 'borderRadius': '2.5vw 2.5vw 2.5vw 2.5vw', 'zIndex': '1' }}>
                        <img src={location} alt='location' className='relative hover:-top-8 transition-all -top-6' />
                        <div className='absolute mt-2 ml-6'>
                            <p className='font-bold text-xl'>1. Lorem Ipsum Dolor</p>
                        </div>
                    </div>
                    <div className='box p-4 bg-gradient-to-l from-yellow-200 to-green-300 w-[40%]' style={{ 'marginRight': '-2.5vw', 'marginLeft': '-2.5vw' }}>
                    </div>
                    <div className='box p-3 bg-white w-[6%]' style={{ 'borderRadius': '2.5vw 2.5vw 2.5vw 2.5vw', 'zIndex': '1' }}>
                        <img src={location} alt='location' className='relative hover:-top-8 transition-all -top-6' />
                        <div className='absolute mt-2 ml-6'>
                            <p className='font-bold text-xl'>1. Lorem Ipsum Dolor</p>
                        </div>
                    </div>
                    <div className='box p-4 bg-gradient-to-l from-yellow-300 to-yellow-200 w-[10%]' style={{ 'marginLeft': '-2.5vw', 'marginRight': '0px' }}>
                    </div>
                    <div className='box rounded-br-full p-4 bg-gradient-to-l from-yellow-300 to-yellow-300 w-[3.5%]' style={{ 'marginLeft': '0px' }}>
                    </div>
                </div>

                <div className='flex flex-col items-start -mt-6'>
                    <div className='box p-4 bg-gradient-to-b from-cyan-400 to-cyan-300 w-[3.5%]' style={{ 'marginLeft': '0px' }}>
                    </div>
                    <div className='box p-4 bg-gradient-to-b from-cyan-300 to-cyan-300 w-[3.5%]' style={{ 'marginLeft': '0px' }}>
                    </div>
                    <div className='box p-4 bg-gradient-to-b from-cyan-300 to-cyan-300 w-[3.5%]' style={{ 'marginLeft': '0px' }}>
                    </div>
                    <div className='box p-4 bg-gradient-to-b from-cyan-300 to-blue-200 w-[3.5%]' style={{ 'marginLeft': '0px' }}>
                    </div>
                    <div className='box p-4 bg-gradient-to-b from-blue-200 to-blue-300 w-[3.5%]' style={{ 'marginLeft': '0px' }}>
                    </div>
                </div>
                <div className='flex -mt-6 items-center'>
                    <div className='box rounded-bl-full p-4 bg-gradient-to-r from-blue-300 to-blue-300 w-[10%]' style={{ 'marginRight': '-2.5vw' }}>
                    </div>
                    <div className='box p-3 bg-white w-[6%]' style={{ 'borderRadius': '2.5vw 2.5vw 2.5vw 2.5vw', 'zIndex': '1' }}>
                        <img src={location} alt='location' className='relative hover:-top-8 transition-all -top-6' />
                        <div className='absolute mt-2 ml-6'>
                            <p className='font-bold text-xl'>1. Lorem Ipsum Dolor</p>
                        </div>
                    </div>
                    <div className='box p-4 bg-gradient-to-r from-blue-300 to-purple-300 w-[40%]' style={{ 'marginLeft': '-2.5vw', 'marginRight': '-2.5vw' }}>
                    </div>
                    <div className='box p-3 bg-white w-[6%] ' style={{ 'borderRadius': '2.5vw 2.5vw 2.5vw 2.5vw', 'zIndex': '1' }}>
                        <img src={location} alt='location' className='relative hover:-top-8 transition-all -top-6' />
                        <div className='absolute mt-2 ml-6'>
                            <p className='font-bold text-xl'>1. Lorem Ipsum Dolor</p>
                        </div>
                    </div>
                    <div className='box p-4 bg-gradient-to-r from-purple-300 to-purple-500 w-[40%]' style={{ 'marginRight': '-2.5vw', 'marginLeft': '-2.5vw' }}>
                    </div>
                    <div className='box p-3 bg-white w-[6%] ' style={{ 'borderRadius': '2.5vw 2.5vw 2.5vw 2.5vw', 'zIndex': '1' }}>
                        <img src={location} alt='location' className='relative hover:-top-8 transition-all -top-6' />
                        <div className='absolute mt-2 ml-6'>
                            <p className='font-bold text-xl'>1. Lorem Ipsum Dolor</p>
                        </div>
                    </div>
                    <div className='box p-4 bg-gradient-to-r from-purple-500 to-purple-600 w-[10%]' style={{ 'marginLeft': '-2.5vw', 'marginRight': '0px' }}>
                    </div>
                    <div className='box p-4 rounded-r-lg bg-gradient-to-r from-purple-600 to-purple-600 w-[3.5%]' style={{ 'marginLeft': '-1px' }}>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Schedule
