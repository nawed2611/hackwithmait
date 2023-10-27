import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';
import devfolioimg from '../assets/Sponsors/Devfolio.png'
import replitimg from '../assets/Sponsors/Replit.png'
import polygonimg from '../assets/Sponsors/Polygon.png'
import Maitlogo from '../assets/Sponsors/MAITLogo_white.png'
import hwmlogo from '../assets/Sponsors/HWM_LOGO.jpeg'
import Footer from './Footer';


const variants = {
    open: { opacity: 10, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const navLinks = ['Home', 'Innovative Tracks', 'Sponsor Tracks'];


const table = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const items = {
        1: {
            header: "FinTech",
            content: "The rapid growth of fintech has created a wealth of career opportunities in this field. As more consumers turn to mobile payments and internet banking, the demand for skilled fintech professionals is on the rise. Participants in the fintech track will have the opportunity to explore this dynamic field and develop their own solutions.",
            imageUrl: "https://img.freepik.com/free-vector/fintech-business-related_24908-57041.jpg?w=740&t=st=1671131881~exp=1671132481~hmac=4fec8120e2ed4eb70de1e0004eebb0d4f12ee391fa3c880f1859d4187e26f390"
        },
        2: {
            header: "HealthCare",
            content: "The rising number of patients has led to a decrease in the number of doctors per patient, resulting in a vicious cycle where ignored or delayed diagnoses make patients more dependent on doctors' check-ups. Some patients cannot afford to visit a doctor, exacerbating the problem. This situation has created a need for innovative solutions that can improve access to healthcare and reduce the reliance on in-person doctor's visits.",
            imageUrl: "https://img.freepik.com/free-vector/medical-workers-analyzing-electronic-record_1262-19834.jpg?w=1060&t=st=1671132454~exp=1671133054~hmac=12d437b01b7d97962f37ff50646220a6c282a9d6cfae3a210f36028e25669d0e"
        },
        3: {
            header: "Sustainable Development",
            content: "The demand for natural resources and the impact of human activities on the environment have raised concerns about sustainable development. HackwithMAIT3.0 offers a sustainability track for participants to explore and develop solutions that support economic growth without harming the planet. Participants will have the opportunity to learn about sustainability technologies and practices and to use their skills and creativity to make a difference.",
            imageUrl: "https://img.freepik.com/free-vector/illustration-human-avatar-with-environment_53876-17627.jpg?w=1060&t=st=1671132491~exp=1671133091~hmac=8185b524e3750c928c4d6065c422fb5f26c52027dd8ce80d51782c7c4a12e17b"
        },
        4: {
            header: "EdTech",
            content: "Edtech involves using technology to enhance and support teaching and learning. In this track, participants will have the opportunity to learn about the latest edtech technologies and practices and to use their skills and creativity to develop innovative solutions and make a difference in the field of education.",
            imageUrl: "https://img.freepik.com/free-vector/illustration-human-avatar-with-environment_53876-17627.jpg?w=1060&t=st=1671132491~exp=1671133091~hmac=8185b524e3750c928c4d6065c422fb5f26c52027dd8ce80d51782c7c4a12e17b"
        },
        5: {
            header: "Communication",
            content: "Communication technology is a broad field that encompasses a range of tools and approaches for facilitating communication and information sharing. This includes everything from messaging and video conferencing to social media and online collaboration tools. In communication track, participants will have the chance to learn about the latest technologies and practices in communication technology and to use their skills and creativity to make a difference.",
            imageUrl: "https://img.freepik.com/free-vector/people-communicating-via-social-media_74855-5551.jpg?w=1380&t=st=1671132559~exp=1671133159~hmac=b0665e05b3d655d98ba7774f6d0a1dceab50745befb50c67baaeb86abb7d955f"

        },
        6: {
            header: "Open Innovation",
            content: "Open innovation involves involving people outside a company or organization in the development of new ideas and technologies. HackwithMAIT 4.0 offers an open innovation track for participants to explore and develop their own solutions. Participants will have the opportunity to learn about open innovation technologies and practices and to use their skills and creativity to make a difference.",
            imageUrl: "https://img.freepik.com/free-vector/business-team-meeting-office-co-working-space_74855-6913.jpg?w=1060&t=st=1671132595~exp=1671133195~hmac=6f1b9412ee3f34dd1bcfb198a3103d0c6a35b20b31c78aca3584e4e246977156"
        }
    }
    return (
        <>
            <div className='radial-bg-2 w-[98vw] h-screen absolute'></div>
            <motion.div
                className='flex items-center justify-between text-white mx-4 sm:mx-8 pl-8 pr-2 h-[15vh]  border-black max-md:bg-black max-md:mb-4  max-md:h-16 max-md:m-0 max-md:pl-2'>
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
                                    <li className='hover:scale-105 hover:text-slate-50 cursor-pointer transition-all hover:underline' key={index}>{(link != "Innovative Tracks" && link != "Sponsor Tracks") ? <a href='/' spy={true} smooth={true}>{link}</a> : (link == "Innovative Tracks" && link != "Sponsor Tracks") ? <a href='/table'>Innovative Tracks</a> : <a href='/sptable'>Sponsor Tracks</a>}</li>
                                )
                            })
                        }
                    </ul>
                    <button onClick={toggleMenu} className="visible sm:invisible absolute top-10 right-10 max-md:right-6 max-md:top-6">
                        {isOpen ? (
                            <AiFillCloseCircle size={24} />
                        ) : (
                            <GiHamburgerMenu size={20} />
                        )}
                    </button>
                    <motion.ul
                        className='absolute top-0 left-0 w-[90%] m-auto h-screen bg-black z-200 flex flex-col items-center justify-center gap-3'
                        animate={isOpen ? "open" : "closed"}
                        variants={variants}
                    >
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
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
                <table class="w-full text-sm text-left sm:rounded-lg  text-gray-500 dark:text-gray-400 my-5 max-md:my-0">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 max-md:invisible">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Track
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Problem Statement
                            </th>
                        </tr>
                    </thead>
                    {
                        Object.keys(items).map((id) => (
                            <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 max-md:flex max-md:flex-col">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white text-2xl ">
                                    {items[id].header}
                                </th>
                                <td class="px-6 py-4 text-xl">
                                    {items[id].content}
                                </td>
                            </tr>
                        ))
                    }
                </table>
                <Footer />
            </div>

        </>
    )
}

export default table