import React from 'react';
import Logo from '../assets/react.svg';
import HeroBG from '../assets/hero.svg';

const navLinks = ['About Us', 'Speakers', 'Tracks', 'Timeline', 'Sponsors', 'Team Members', 'FAQs', 'Contact Us'];

const Hero = () => {
    return (
        <div className='flex flex-col text-white'>
            <div className='flex items-center justify-between mx-8 px-8 h-[15vh] border-black'>
                <img src={Logo} alt='React Logo' className='w-18 h-18' />
                <nav>
                    <ul className='flex text-lg gap-8'>
                        {
                            navLinks.map((link, index) => (
                                <li className='hover:scale-105 hover:text-slate-50 cursor-pointer transition-all hover:underline' key={index}>{link}</li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <img src={HeroBG} alt='Hero Background' className='absolute top-0 object-cover w-screen h-screen -z-10' />
            <div className='flex flex-col items-center mt-20 justify-center'>
                <h1 className='font-bold text-8xl'>Hack with MAIT 3.0</h1>
                <p className='text-3xl mt-6'>Towards a better world through tech</p>
                <p className='text-3xl mt-12'>14th, 15th, 16th November 2022</p>
                <button className='mt-20 text-2xl bg-blue-400 p-2 button-bg px-8 hover:scale-105 transition-all rounded-xl'>Register here</button>
            </div>
        </div>
    )
}

export default Hero