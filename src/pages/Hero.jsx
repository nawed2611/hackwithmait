import React, { useState } from 'react';
import Logo from '../assets/logo.jpg';
import HeroBG from '../assets/hero.svg';
import { BsCalendar3 } from 'react-icons/bs';
import { BiMoney, BiUserPlus } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaDiscord, FaJoint, FaMoneyBill, FaMoneyBillWave, FaUser } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from "framer-motion"
import devfolioimg from '../assets/Sponsors/Devfolio.png'
import replitimg from '../assets/Sponsors/Replit.png'
import polygonimg from '../assets/Sponsors/Polygon.png'
import Maitlogo from '../assets/Sponsors/MAITLogo_white.png'
import hwmlogo from '../assets/Sponsors/HWM_LOGO.jpeg'

const variants = {
    open: { opacity: 10, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const navLinks = ['About Us', 'Speakers', 'Tracks', 'Timeline', 'Sponsors', 'Team Members', 'FAQs', 'Contact Us'];

const Hero = () => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex flex-col min-h-screen overflow-x-hidden text-white max-md:min-h-full'>
            <motion.div
                className='flex items-center justify-between mx-4 sm:mx-8 pl-8 pr-2 h-[15vh]  border-black max-md:bg-black max-md:mb-4  max-md:h-16 max-md:m-0 max-md:pl-2'>
                <div className='flex items-center mt-12 gap-x-8 max-md:mb-10 max-md:gap-x-0 max-md:p-0'>
                    <img src={Maitlogo} alt="MAIT Logo" className='h-20 max-md:h-10 max-md:mx-2' />
                    <img src={hwmlogo} alt='HackwithMAIT 4.0 Logo' className='h-20 max-md:h-10' />
                </div>
                <nav className=''>
                    <ul className='invisible sm:visible px-4 py-2 ring rounded-md glass flex text-lg gap-8 max-md:w-0'>
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
                    <button onClick={() => setIsOpen(isOpen => !isOpen)} className="visible sm:invisible absolute top-10 right-10 max-md:right-6 max-md:top-6"><GiHamburgerMenu size={20} /></button>
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
                className={'flex bg-clip-text flex-col items-center mt-4 sm:mt-24 justify-center' + (isOpen && ' blur-xl')}>

                <div className='flex justify-center items-center max-md:gap-2 gap-6 max-md:px-4 max-md:my-5'>
                    <div>
                        <img src={devfolioimg} alt="DEVFOLIO LOGO" className='h-12 max-md:h-8' />
                    </div>
                    <div>
                        <img src={polygonimg} alt="POLYGON LOGO" className='h-12 max-md:h-8' />
                    </div>
                    <div>
                        <img src={replitimg} alt="REPLIT LOGO" className='h-12 max-md:h-8' />
                    </div>
                </div>
                <h1 className='font-[800] text-center text-8xl text-wrapper'>Hack with MAIT <strong className='hero-text font-[800]'>4.0</strong></h1>
                <div className='svg-wrapper'>
                    <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                        <rect className="shape" height="60" width="320" />
                    </svg>
                    <p className='text-2xl mt-16 sm:mt-16'>Towards a better world through tech</p>
                </div>
                <div className='flex text-xl items-center justify-center sm:mt-4'><BsCalendar3 size={18} className='mx-2' />{' '} <p>22nd-23rd November 2023</p></div>
                <div
                    class="apply-button"
                    data-hackathon-slug="hackwithmait4"
                    data-button-theme="light"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}
                        className='mt-6 sm:mt-12 flex items-center ring text-2xl  justify-center px-4 p-2 button-bg rounded-xl'>
                        <p>Apply with Devfolio</p></motion.button>
                </div>
                <div className='flex flex-col sm:flex-row gap-x-6'>
                    <motion.a
                        href='https://docs.google.com/forms/d/e/1FAIpQLSdfU7NMvTDDVi-WfmwIlJwd04pMEdUIvgHU2HX6pcxZgMpB4Q/viewform'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}
                        className='mt-6 sm:mt-12 flex items-center text-2xl  justify-center px-4 p-2 button-bg rounded-xl'>
                        <FaMoneyBillWave size={24} className='mr-2' />{' '}<p>Call for Sponsors</p></motion.a>
                    <motion.a
                        href='https://discord.gg/A385NNEHKD'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}
                        className='mt-6 sm:mt-12 flex items-center text-2xl  justify-center px-4 p-2 button-bg rounded-xl'>
                        <FaDiscord size={24} className='mr-2' />{' '}<p>Join Our Discord</p></motion.a>
                </div>
            </motion.div>
        </div >
    )
}

export default Hero