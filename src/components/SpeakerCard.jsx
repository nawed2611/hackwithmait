import React from 'react'

const SpeakerCard = ({ img, role, name }) => {
    return (
        <div className='card-bg p-[1.2px] rounded-xl drop-shadow-lg'>
            <div className='sm:w-[18vw] h-64 bg-[#1e1e1e] text-white hover:scale-105 transition-all p-4 flex flex-col items-center rounded-xl shadow-lg'>
                <img src={img} alt="photo" className='rounded-full h-32 w-32 mx-auto my-2' />
                <p className='font-semibold text-xl'>{name}</p>
                <p className='font-light text-lg'>{role}</p>
            </div>
        </div>
    )
}

export default SpeakerCard