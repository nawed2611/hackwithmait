import React from 'react'

const SpeakerCard = ({ img, role, name }) => {
    return (
        <div className='sm:w-[16vw] h-64 hover:scale-105 transition-all p-4 flex flex-col items-center rounded-xl bg-white shadow-lg'>
            <img src={img} alt="photo" className='rounded-full h-32 w-32 mx-auto my-2' />
            <p className='font-semibold text-xl'>{name}</p>
            <p className='font-light text-lg'>{role}</p>
        </div>
    )
}

export default SpeakerCard