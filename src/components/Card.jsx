import React from 'react'
import { ImLinkedin } from 'react-icons/im'
const Card = ({ img, linkedin, name, role }) => {
  return (
    <div className='w-[18%] p-2 bg-gradient-to-r from-[#1C42C9] to-[#8E3DAA] flex flex-col items-center rounded-lg'>
      <img src={img} alt="photo" className='rounded-full h-32 w-32 mx-auto my-2' />
      <p className='text-white font-semibold text-xl'>{name}</p>
      <p className='text-white font-light text-lg'>{role}</p>
      <div><a href={linkedin}><ImLinkedin className='text-white w-6 h-6 mb-1 mt-1' /></a></div>
    </div>
  )
}

export default Card
