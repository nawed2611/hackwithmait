import React from 'react';
import trackssvg from '../assets/tracks.svg';

const Tracks = () => {
    return (
        <div className='flex Tracks justify-center items-center h-screen'>
            <div className='flex w-full space-x-4 px-20 mt-6'>
                <div className='text-white font-semibold text-2xl'>
                    Hackathon Tracks
                </div>
                <div className='bg-gradient-to-r from-white to-transparent w-[70vw] h-2 mt-4'>
                </div>
            </div>
            <img src={trackssvg} className='absolute object-cover w-screen h-screen -z-10' alt='Tracks' />
        </div>
    )
}

export default Tracks