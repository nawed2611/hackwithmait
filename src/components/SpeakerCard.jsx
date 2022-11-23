import React from 'react'

const SpeakerCard = ({ img, role, name }) => {
    return (
        <div className='w-[18%] p-3 flex flex-col items-center rounded-lg shadow-lg'>
            <img src={img} alt="photo" className='rounded-full h-32 w-32 mx-auto my-2' />
            <p className='font-semibold text-xl'>{name}</p>
            <p className='font-light text-lg'>{role}</p>
        </div>
    )
}

export default SpeakerCard