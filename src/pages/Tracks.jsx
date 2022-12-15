import React, { useState } from 'react';
import trackssvg from '../assets/tracks.svg';
import PageHeading from '../components/PageHeading';
import { AnimatePresence, motion } from 'framer-motion';


const Tracks = () => {
    const [selectedId, setSelectedId] = useState(null);
    const items = {
        1: {
            header: "FinTech",
            content: "lprem12",
        },
        2: {
            header: "HealthCare",
            content: "lprem12",
        },
        3: {
            header: "Sustainable Development",
            content: "lprem12",
        },
        4: {
            header: "EdTech",
            content: "lprem12",
        },
        5: {
            header: "Communication",
            content: "lprem12",

        },
        6: {
            header: "Open Innovation",
            content: "lprem12",
        }
    }
    function ToggleContent({ header, id }) {
        return (
            <motion.div
                layout
                layoutId={id}
                onClick={() => setSelectedId(id)}
                className='flex z-10 flex-col justify-center items-center w-32 h-32 sm:w-[28vw] sm:h-[35vh] m-2 bg-white rounded-lg shadow-lg cursor-pointer'
            >
                <motion.h2 layout>{header}</motion.h2>
            </motion.div>
        )
    }
    return (
        <div className='flex flex-col Tracks items-center min-h-screen'>
            <PageHeading name="Hackathon Tracks" color="blue" />
            <img src={trackssvg} className='absolute object-cover w-screen h-screen -z-10' alt='Tracks' />
            <div className={`flex items-center justify-center flex-wrap mt-4 ` + (selectedId && ' blur-lg')}>
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
                    <motion.div className='bg-white rounded-md p-4 absolute sm:mt-64 w-[28vw] h-[35vh]' layoutId={selectedId}>
                        <motion.h1>{items[selectedId].header}</motion.h1>
                        <motion.p>{items[selectedId].content}</motion.p>
                        <motion.button onClick={() => setSelectedId(null)}>
                            Check
                        </motion.button>
                    </motion.div>

                )}
            </AnimatePresence>


        </div>
    )
}

export default Tracks