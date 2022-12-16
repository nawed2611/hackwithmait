import React from 'react';
import { ImLinkedin } from 'react-icons/im';
import { motion } from 'framer-motion';

const Card = ({ img, linkedin, onClick, name, role }) => {
  return (
    <motion.div onClick={onClick} className='w-44 bg-[black] cursor-pointer sm:w-[16vw] drop-shadow-lg hover:scale-105 transition-all p-2 flex flex-col items-center rounded-lg'>
      <img src={img} alt="photo" className='rounded-full h-32 w-32 object-cover mx-auto my-2' />
      <p className=' font-semibold text-xl'>{name}</p>
      <p className=' font-light text-lg'>{role}</p>
      <div>
        <a href={linkedin}><ImLinkedin className=' w-6 h-6 mb-1 mt-1' /></a>
      </div>
    </motion.div>
  )
}

export default Card
