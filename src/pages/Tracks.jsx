import React, { useState } from 'react';
import trackssvg from '../assets/tracks.svg';
import PageHeading from '../components/PageHeading';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
import fintech from '../assets/tracks/Fintech.jpg'
import sus_dev from '../assets/tracks/susdev.jpg'
import comm from '../assets/tracks/communication.jpg'
import edtech from '../assets/tracks/edtech.jpg'
import healthcare from '../assets/tracks/healthcare.jpg'
import open_inn from '../assets/tracks/open_inn.jpg'
import SponsorTracks from './SponsorTracks_trash';

const Tracks = () => {
    const [selectedId, setSelectedId] = useState(null);
    const items = {
        1: {
            header: "FinTech",
            content: "The rapid growth of fintech has created a wealth of career opportunities in this field. As more consumers turn to mobile payments and internet banking, the demand for skilled fintech professionals is on the rise. Participants in the fintech track will have the opportunity to explore this dynamic field and develop their own solutions.",
            imageUrl: fintech
        },
        2: {
            header: "HealthCare",
            content: "The rising number of patients has led to a decrease in the number of doctors per patient, resulting in a vicious cycle where ignored or delayed diagnoses make patients more dependent on doctors' check-ups. Some patients cannot afford to visit a doctor, exacerbating the problem. This situation has created a need for innovative solutions that can improve access to healthcare and reduce the reliance on in-person doctor's visits.",
            imageUrl: healthcare
        },
        3: {
            header: "Sustainable Development",
            content: "The demand for natural resources and the impact of human activities on the environment have raised concerns about sustainable development. HackwithMAIT3.0 offers a sustainability track for participants to explore and develop solutions that support economic growth without harming the planet. Participants will have the opportunity to learn about sustainability technologies and practices and to use their skills and creativity to make a difference.",
            imageUrl: sus_dev
        },
        4: {
            header: "EdTech",
            content: "Edtech involves using technology to enhance and support teaching and learning. In this track, participants will have the opportunity to learn about the latest edtech technologies and practices and to use their skills and creativity to develop innovative solutions and make a difference in the field of education.",
            imageUrl: edtech
        },
        5: {
            header: "Communication",
            content: "Communication technology is a broad field that encompasses a range of tools and approaches for facilitating communication and information sharing. This includes everything from messaging and video conferencing to social media and online collaboration tools. In communication track, participants will have the chance to learn about the latest technologies and practices in communication technology and to use their skills and creativity to make a difference.",
            imageUrl: comm

        },
        6: {
            header: "Open Innovation",
            content: "Open innovation involves involving people outside a company or organization in the development of new ideas and technologies. HackwithMAIT 4.0 offers an open innovation track for participants to explore and develop their own solutions. Participants will have the opportunity to learn about open innovation technologies and practices and to use their skills and creativity to make a difference.",
            imageUrl: "https://img.freepik.com/free-vector/business-team-meeting-office-co-working-space_74855-6913.jpg?w=1060&t=st=1671132595~exp=1671133195~hmac=6f1b9412ee3f34dd1bcfb198a3103d0c6a35b20b31c78aca3584e4e246977156"
        }
    }
    function ToggleContent({ header, id }) {
        return (
            <motion.div
                layout
                layoutId={id}
                onClick={() => setSelectedId(id)}
                className='flex z-10 flex-col justify-center items-center w-[40%] h-32 sm:w-[28vw] sm:h-[35vh] m-2 bg-white rounded-lg shadow-lg cursor-pointer max-md:my-4 max-md:h-1/5 max-md:w-3/4'
            >
                <motion.img src={items[id].imageUrl} className='w-full h-full object-fit rounded-lg hover:blur-md transition-all' alt='Tracks' />
                <motion.h2 className='bg-white drop-shadow-sm p-2 rounded-md absolute font-bold  text-xs sm:text-xl' layout>{header}</motion.h2>
            </motion.div>
        )
    }
    return (
        <div className='flex flex-col Tracks items-center min-h-screen '>
            <div className='flex flex-col sm:flex-row items-center sm:items-baseline w-full space-x-4 px-20 mt-8'>
                <div className='text-white font-semibold text-2xl'>
                    Hackathon Tracks
                </div>
                <div className='bg-gradient-to-r from-white to-transparent sm:w-[80%] w-full h-2 mt-4'>
                </div>
            </div>
            <br />
            <h1 className='text-white text-left font-semibold text-2xl border-2 p-2 border-white shadow-white shadow'> Innovative Tracks</h1>
            <div className='radial-bg-2 w-[98vw] h-screen absolute'></div>
            <div className={`flex flex-1 items-center justify-center flex-wrap mt-4 ` + (selectedId && ' blur-lg')}>
                {
                    Object.keys(items).map((id) => (
                        <ToggleContent
                            key={id}
                            id={id}
                            header={items[id].header}
                        />
                    ))
                }
            </div>
            <AnimatePresence>
                {selectedId && (

                    <motion.div className='bg-[#1e1e1e] text-white rounded-md drop-shadow-md border border-blue-800 p-4 absolute sm:mt-64 mt-32 w-[90vw] sm:w-[45vw] sm:min-h-[35vh]' layoutId={selectedId}>
                        <div className='flex items-center justify-between my-4 px-4'>
                            <motion.h1 className='font-bold text-2xl'>{items[selectedId].header}</motion.h1>
                            <motion.button className='flex items-end' onClick={() => setSelectedId(null)}>
                                <AiOutlineCloseCircle size={22} />
                            </motion.button>
                        </div>
                        <div className='flex items-center justify-between'>
                            <motion.p className='text-lg m-1'>{items[selectedId].content}</motion.p>
                            <motion.img src={items[selectedId].imageUrl} className='w-32 h-32 border object-cover rounded-lg' alt='Tracks' />
                        </div>
                    </motion.div>


                )}
            </AnimatePresence>

        </div>
    )
}

export default Tracks