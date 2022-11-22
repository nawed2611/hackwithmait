import React from 'react';
import Logo from '../assets/react.svg';
import HeroBG from '../assets/hero.svg';
import { BsCalendar3 } from 'react-icons/bs';
import { BiUserPlus } from 'react-icons/bi';
import { Link } from 'react-scroll';

const navLinks = ['About Us', 'Speakers', 'Tracks', 'Timeline', 'Sponsors', 'Team Members', 'FAQs', 'Contact Us'];

const Hero = () => {
    return (
        <div className='flex flex-col h-screen text-white'>
            <div className='flex items-center justify-between mx-8 px-8 h-[15vh] border-black'>
                <img src={Logo} alt='React Logo' className='w-18 h-18' />
                <nav>
                    <ul className='flex text-lg gap-8'>
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
                </nav>
            </div>
            <img src={HeroBG} alt='Hero Background' className='absolute top-0 object-cover w-screen h-screen -z-10' />
            <div className='flex flex-col items-center mt-20 justify-center'>
                <h1 className='font-[800] text-8xl'>Hack with MAIT <strong className='hero-text font-[800]'>3.0</strong></h1>
                <p className='text-2xl mt-4'>Towards a better world through tech</p>
                <div className='flex text-xl items-center justify-center mt-12'><BsCalendar3 size={18} className='mx-2' />{' '} <p>14th, 15th, 16th November 2022</p></div>
                <button className='mt-20 flex items-center text-2xl  justify-center px-4 p-2 button-bg hover:scale-105 transition-all hover:border rounded-xl'><BiUserPlus size={24} className='mr-2' />{' '}<p>Register Here</p></button>
            </div>
        </div>
    )
}

export default Hero