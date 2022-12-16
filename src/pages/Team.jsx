import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ImLinkedin } from 'react-icons/im';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Anupam from '../assets/Team_Pics/Anupam.jpeg';
import Khushboo from '../assets/Team_Pics/Khushboo.jpeg';
import Kunal from '../assets/Team_Pics/Kunal.jpg';
import Megha from '../assets/Team_Pics/Megha.jpeg';
import Prakhar from '../assets/Team_Pics/Prakhar.jpeg';
import Reeha from '../assets/Team_Pics/Reeha.jpeg';
import Rishabh from '../assets/Team_Pics/Rishabh.jpg';

const Team = () => {
    const [selectedId, setSelectedId] = React.useState(null);

    const technicalCommittee = {
        1: {
            name: "Aditi Agarwal (0496402720)",
        },
        2: {
            name: "Mohammed Khundmeer Siddiq (08814802720)"
        },
        3: {
            name: "Nawed Ali(09314802720)"
        },
        4: {
            name: "Harsh Rajput (05614802720)"
        },
        5: {
            name: "Himanshu Kataria (06514802720)"
        },
        6: {
            name: "Bhavy Khatter (35914802720)"
        },
        7: {
            name: "Ansh Goyal (1014802721)"
        },
        8: {
            name: "Shreya Rathi (21014802721)"
        },
        9: {
            name: "Saksham Singh (02714802721)"
        },
        10: {
            name: "Khushi Kataria (35614802721)"
        },
        11: {
            name: "Sarthak Mittal (20314802721)"
        },
        12: {
            name: "Aryan Mathur (04914812721)"
        },
        13: {
            name: "Dipen Kalsi (01514812721)"
        }
    }

    const eventCommittee = {
        1: {
            name: "Himanshu Kataria (06514802720)"
        },
        2: {
            name: "Nawed Ali(09314802720)"
        },
        3: {
            name: "Harsh Rajput (05614802720)"
        },
        4: {
            name: "Kartik Raj (07414802720)"
        },
        5: {
            name: "Arpit Goyal (02514802720)"
        },
        6: {
            name: "Arnav Raj (01214812720)"
        },
        7: {
            name: "Mohit Sharma (75814802721)"
        },
        8: {
            name: "Ankit Sharma (75814802721)"
        },
        9: {
            name: "Ishaan Sagwan (10714802721)"
        },
        10: {
            name: "Srthak Mittal (20314802721)"
        }
    }

    const designCommittee = {
        1: {
            name: "Harsh Rajput (05614802720)"
        },
        2: {
            name: "Kartik Raj (07414802720)"
        },
        3: {
            name: "Arpit Goyal (02514802720)"
        },
        4: {
            name: "Vivek Kaushal (21714802721)"
        },
        5: {
            name: "Manya (12514802721)"
        },
        6: {
            name: "Janvi Guliyan (00614812721)"
        },
        7: {
            name: "Swati Goel(36114802720)"
        },
        8: {
            name: "Abhishek Bhatt (00514822721)"
        },
        9: {
            name: "Dev Kumar (04414802720)"
        },
        10: {
            name: "Shreyam Jain (36714802721)"
        },
        11: {
            name: "Shreya Rathi (21014802721)"
        },
        12: {
            name: "Gaurika Gupta (20714812721)"
        },
        13: {
            name: "Anushka Agrani(35514812721)"
        },
        14: {
            name: "Ujjwal Jindal (00714812721)"
        }
    }

    const publicRelationsCommittee = {
        1: {
            name: "Aryan Mathur (04914812721)"
        },
        2: {
            name: "Anushka Agrani(35514812721)"
        },
        3: {
            name: "Ansh Goyal (1014802721)"
        },
        4: {
            name: "Shreya Rathi (21014802721)"
        },
        5: {
            name: "Saksham Singh (02714802721)"
        },
        6: {
            name: "Khushi Kataria (35614802721)"
        },
        7: {
            name: "Sarthak Mittal (20314802721)"
        },
        8: {
            name: "Dipen Kalsi (01514812721)"
        },
        9: {
            name: "Apurba Koley (02614802721)"
        },
        10: {
            name: "Deepanshu Chawla (04314802720)"
        }
    }

    const disciplineCommittee = {
        1: {
            name: "Aditi Agarwal(0496402720)"
        },
        2: {
            name: "Aryan Chandra (36814802721)"
        },
        3: {
            name: "Tushar (35514812720)"
        },
        4: {
            name: "Divyansha (35114812720)"
        },
        5: {
            name: "Raghav Agarwal (01414812721)"
        },
        6: {
            name: "Vivek Kaushal (21714802721)"
        }
    }

    const Card = ({ img, linkedin, onClick, name, role }) => {
        return (
            <motion.div className='card-bg p-[1.6px] rounded-md'>
                <motion.div onClick={onClick} className='w-44 cursor-pointer sm:w-[16vw] drop-shadow-lg hover:scale-105 transition-all p-2 text-white bg-[#1e1e1e] flex flex-col items-center rounded-lg'>
                    <img src={img} alt="photo" className='rounded-full h-32 w-32 object-cover mx-auto my-2' />
                    <p className=' font-semibold text-xl'>{name}</p>
                    <p className=' font-light text-lg'>{role}</p>
                    <div>
                        <a href={linkedin}><ImLinkedin className=' w-6 h-6 mb-1 mt-1' /></a>
                    </div>
                </motion.div>
            </motion.div>
        )
    }

    return (
        <div className='flex flex-col sm:p-6 carousel-bg min-h-screen Team Members' >
            <div className='flex w-full flex-col sm:flex-row items-center sm:items-baseline space-x-4 text-white px-20 my-6'>
                <div className='font-bold text-2xl'>
                    Team Members
                </div>
                <div className='bg-gradient-to-r from-white to-transparent w-full sm:w-[80%] h-2 mt-4'>
                </div>
            </div>

            {/* team members row1 */}
            <motion.div className={`flex flex-1 flex-wrap gap-4 gap-x-6 pb-4 mx-auto sm:w-[80%] items-center justify-center ` + (selectedId && ' blur-lg')} >
                <Card img={Prakhar} layout layoutId={1} onClick={() => setSelectedId(1)} id={1} linkedin="#" name="Prakhar" role="President" />
                <Card img={Anupam} layout layoutId={2} onClick={() => setSelectedId(2)} id={2} linkedin="#" name="Anupam" role="Vice President" />
                <Card img={Megha} layout layoutId={3} onClick={() => setSelectedId(3)} id={3} linkedin="#" name="Megha" role="Operational Head" />
                <Card img={Reeha} layout layoutId={4} onClick={() => setSelectedId(4)} id={4} linkedin="#" name="Reeha" role="General Secretary" />
                <Card img={Kunal} layout layoutId={5} onClick={() => setSelectedId(5)} id={5} linkedin="#" name="Kunal" role="Senior Student Coordinator" />
                <Card img={Khushboo} layout layoutId={6} onClick={() => setSelectedId(6)} id={6} linkedin="#" name="Khushboo" role="Social Media Incharge" />
                <Card img={Rishabh} layout layoutId={7} onClick={() => setSelectedId(7)} id={7} linkedin="#" name="Rishabh" role="Senior Student Coordinator" />
            </motion.div >

            <AnimatePresence>
                {
                    selectedId && (
                        <motion.div className='bg-black text-white rounded-md sm:ml-72 ml-4 drop-shadow-md border border-blue-800 p-4 absolute mt-32 w-[90vw] sm:w-[45vw] sm:min-h-[50vh]'
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5 }}

                            layoutId={selectedId}
                        >
                            <motion.button
                                className='flex justify-end w-full'
                                onClick={() => setSelectedId(null)}
                            >
                                <AiOutlineCloseCircle size={22} />
                            </motion.button>
                            <motion.div className='rounded-md flex justify-between w-full'>
                                <motion.div
                                >
                                    {selectedId === 1 &&
                                        <motion.div className="flex gap-x-12 justify-between w-full">
                                            <motion.div className='flex flex-col items-center justify-center '>
                                                <img src={Prakhar} className='rounded-full w-32 sm:w-44 sm:h-44  object-cover' />
                                                <p className='font-bold'>Prakhar</p>
                                            </motion.div>
                                            <motion.div className='flex flex-col'>
                                                <h1 className='font-bold text-lg mb-2 mx-auto'>Technical Committee</h1>
                                                {
                                                    Object.keys(technicalCommittee).map((key) => {
                                                        return (
                                                            <div className='flex items-center'>
                                                                <p className='my-1'>{technicalCommittee[key].name}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </motion.div>
                                        </motion.div>
                                    }
                                    {selectedId === 2 &&
                                        <motion.div className="flex gap-x-12 justify-between w-full">
                                            <motion.div className='flex flex-col items-center justify-center '>
                                                <img src={Anupam} className='rounded-full w-32 sm:w-44 sm:h-44  object-cover' />
                                                <p className='font-bold'>Anupam</p>
                                            </motion.div>
                                            <motion.div className='flex flex-col'>
                                                <h1 className='font-bold text-lg mb-2 mx-auto'>Event Handling Committee</h1>
                                                {
                                                    Object.keys(eventCommittee).map((key) => {
                                                        return (
                                                            <div className='flex items-center'>
                                                                <p className='my-1'>{eventCommittee[key].name}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </motion.div>
                                        </motion.div>
                                    }
                                    {selectedId === 3 &&
                                        <motion.div className="flex gap-x-12 justify-between w-full">
                                            <motion.div className='flex flex-col items-center justify-center '>
                                                <img src={Megha} className='rounded-full w-32 sm:w-44 sm:h-44  object-cover' />
                                                <p className='font-bold'>Megha</p>
                                            </motion.div>
                                            <motion.div className='flex flex-col'>
                                                <h1 className='font-bold text-lg mb-2 mx-auto'>Discipline Committee</h1>
                                                {
                                                    Object.keys(disciplineCommittee).map((key) => {
                                                        return (
                                                            <div className='flex items-center'>
                                                                <p className='my-1'>{disciplineCommittee[key].name}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </motion.div>
                                        </motion.div>
                                    }
                                    {selectedId === 4 &&
                                        <motion.div className="flex gap-x-12 justify-between w-full">
                                            <motion.div className='flex flex-col items-center justify-center '>
                                                <img src={Reeha} className='rounded-full w-32 sm:w-44 sm:h-44  object-cover' />
                                                <p className='font-bold'>Reeha</p>
                                            </motion.div>
                                            <motion.div className='flex flex-col'>
                                                <h1 className='font-bold text-lg mb-2 mx-auto'>Graphic and Design Committee</h1>
                                                {
                                                    Object.keys(designCommittee).map((key) => {
                                                        return (
                                                            <div className='flex items-center'>
                                                                <p className='my-1'>{designCommittee[key].name}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </motion.div>
                                        </motion.div>
                                    }
                                    {selectedId === 5 &&
                                        <motion.div className="flex gap-x-12 justify-between w-full">
                                            <motion.div className='flex flex-col items-center justify-center '>
                                                <img src={Kunal} className='rounded-full w-32 sm:w-44 sm:h-44  object-cover' />
                                                <p className='font-bold'>Kunal</p>
                                            </motion.div>
                                            <motion.div className='flex flex-col'>
                                                <h1 className='font-bold text-lg mb-2 mx-auto'>Publicity Committee</h1>
                                                {
                                                    Object.keys(publicRelationsCommittee).map((key) => {
                                                        return (
                                                            <div className='flex items-center'>
                                                                <p className='my-1'>{publicRelationsCommittee[key].name}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </motion.div>
                                        </motion.div>
                                    }
                                    {selectedId === 6 &&
                                        <motion.div className="flex gap-x-12 justify-between w-full">
                                            <motion.div className='flex flex-col items-center justify-center '>
                                                <img src={Khushboo} className='rounded-full w-32 sm:w-44 sm:h-44  object-cover' />
                                                <p className='font-bold'>Khushboo</p>
                                            </motion.div>
                                            <motion.div className='flex flex-col'>
                                                <h1 className='font-bold text-lg mb-2 mx-auto'>Discipline Committee</h1>
                                                {
                                                    Object.keys(disciplineCommittee).map((key) => {
                                                        return (
                                                            <div className='flex items-center'>
                                                                <p className='my-1'>{disciplineCommittee[key].name}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </motion.div>
                                        </motion.div>
                                    }
                                    {selectedId === 7 &&
                                        <motion.div className="flex gap-x-12 justify-between w-full">
                                            <motion.div className='flex flex-col items-center justify-center '>
                                                <img src={Rishabh} className='rounded-full w-32 sm:w-44 sm:h-44  object-cover' />
                                                <p className='font-bold'>Rishabh</p>
                                            </motion.div>
                                            <motion.div className='flex flex-col'>
                                                <h1 className='font-bold text-lg mb-2 mx-auto'>Event Handling Committee</h1>
                                                {
                                                    Object.keys(eventCommittee).map((key) => {
                                                        return (
                                                            <div className='flex items-center'>
                                                                <p className='my-1'>{eventCommittee[key].name}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </motion.div>
                                        </motion.div>
                                    }

                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )
                }

            </AnimatePresence>
        </div >
    )
}

export default Team
