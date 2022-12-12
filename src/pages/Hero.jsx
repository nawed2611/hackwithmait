import React, { useState } from 'react';
import Logo from '../assets/react.svg';
import HeroBG from '../assets/hero.svg';
import { BsCalendar3 } from 'react-icons/bs';
import { BiUserPlus } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { motion } from "framer-motion"

const variants = {
    open: { opacity: 10, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const navLinks = ['About Us', 'Speakers', 'Tracks', 'Timeline', 'Sponsors', 'Team Members', 'FAQs', 'Contact Us'];

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex flex-col min-h-screen overflow-x-hidden text-white'>
            <motion.div
                className='flex items-center justify-between mx-8 px-8 h-[15vh] border-black'>
                <img src={Logo} alt='React Logo' className='w-18 h-18' />
                <nav>
                    <ul className='invisible sm:visible flex text-lg gap-8'>
                        {
                            navLinks.map((link, index) => {
                                if (link === 'About Us')
                                    link = link.substring(0, link.indexOf(' '))
                                return (
                                    <li className='hover:scale-105 hover:text-slate-50 cursor-pointer transition-all hover:underline' key={index}><Link to={link} spy={true} smooth={true}>{link}</Link></li>
                                )
                            })
                        }
                    </ul>
                    <button onClick={() => setIsOpen(isOpen => !isOpen)} className="visible sm:invisible absolute top-10 right-10"><GiHamburgerMenu size={20} /></button>
                    <motion.ul
                        className='absolute top-0 left-0 w-screen h-screen bg-black z-200 flex flex-col items-center justify-center gap-8'
                        animate={isOpen ? "open" : "closed"}
                        variants={variants}
                    >
                        <button onClick={() => setIsOpen(isOpen => !isOpen)} className=""><AiFillCloseCircle size={24} /></button>
                        {
                            navLinks.map((link, index) => {
                                if (link === 'About Us')


                                    link = link.substring(0, link.indexOf(' '))
                                return (
                                    <li className='hover:scale-105 hover:text-slate-50 cursor-pointer transition-all hover:underline' key={index}><Link to={link} spy={true} smooth={true}>{link}</Link></li>
                                )
                            })
                        }
                    </motion.ul>
                </nav>
            </motion.div>
            <img src={HeroBG} alt='Hero Background' className='absolute top-0 object-cover w-screen h-screen -z-10' />
            <motion.div
                animate={{ y: -20 }}
                transition={{ type: "spring" }}
                className={'flex flex-col items-center mt-14 sm:mt-24 justify-center' + (isOpen && ' blur-xl')}>
                <h1 className='font-[800] text-center text-8xl text-wrapper'>Hack with MAIT <strong className='hero-text font-[800]'>3.0</strong></h1>
                <div className='svg-wrapper'>
                    <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                        <rect className="shape" height="60" width="320" />
                    </svg>
                    <p className='text-2xl mt-16'>Towards a better world through tech</p>
                </div>
                <div className='flex text-xl items-center justify-center mt-12 sm:mt-4'><BsCalendar3 size={18} className='mx-2' />{' '} <p>22nd-23rd December 2022</p></div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    className='mt-6 sm:mt-12 flex items-center text-2xl  justify-center px-4 p-2 button-bg  rounded-xl'><BiUserPlus size={24} className='mr-2' />{' '}<p>Register Here</p></motion.button>
            </motion.div>
        </div>
    )
}

export default Hero