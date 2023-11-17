import React from 'react'
import PageHeading from '../components/PageHeading';

const FAQ = () => {
    function view(id) {
        const content = document.getElementById(id + 'c')

        const button = document.getElementById(id)
        if (button.style.transform === 'rotate(0deg)') {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.visibility = 'visible';
            button.style.transform = 'rotate(45deg)';
            button.style.backgroundColor = 'rgb(52 211 153)'
        }
        else {
            content.style.maxHeight = '';
            content.style.visibility = 'hidden';
            button.style.transform = 'rotate(0deg)';
            button.style.backgroundColor = 'white'
        }
    }
    return (
        <div className='flex carousel-bg flex-col FAQs'>
            <div className='flex flex-col sm:flex-row items-center sm:items-baseline space-x-4 px-20 mt-14'>
                <div className='text-white font-semibold text-2xl'>
                    FAQs
                </div>
                <div className='bg-gradient-to-r from-white to-transparent sm:w-[80%] w-full h-2 mt-4'>
                </div>
            </div>
            <div className='flex flex-col glass text-white w-[80%] mx-auto justify-center items-center m-16 mt-4 p-4 '>
                <div className='w-full'>
                    {/* HEAD */}
                    <div className='transition-all duration-1000 flex justify-between items-center  px-2'>
                        <h1 className='font-bold text-2xl py-2'>What is a hackathon?</h1>

                    </div>
                    {/* CONTENT */}
                    <div className='transition-all duration-1000 overflow-hidden p-0'>
                        <p className='font-semibold p-2 text-justify'>A hackathon is an invention marathon. Students come together to build cool software & hardware hacks over 24-48 hours. It’s very beginner friendly.
                        </p>
                    </div>
                </div>

                <hr className='bg-emerald-400 w-[100%] h-1 mt-4 mb-2' />

                <div className='w-full '>
                    {/* HEAD */}
                    <div className='transition-all duration-1000 flex justify-between items-center  px-2'>
                        <h1 className='font-bold text-2xl py-2'>How much does it cost?</h1>

                    </div>
                    {/* CONTENT */}
                    <div className='transition-all duration-1000 overflow-hidden'>
                        <p className='font-semibold p-2 text-justify'>Nothing. Attending HackwithMAIT 4.0 is free.
                        </p>
                    </div>
                </div>

                <hr className='bg-emerald-400 w-[100%] h-1 mt-4 mb-2' />

                <div className='w-full '>
                    {/* HEAD */}
                    <div className='transition-all duration-1000 flex justify-between items-center  px-2'>
                        <h1 className='font-bold text-2xl py-2'>Do I need to be a MAIT student to attend?</h1>

                    </div>
                    {/* CONTENT */}
                    <div className='transition-all duration-1000 overflow-hidden'>
                        <p className='font-semibold p-2 text-justify'>No, if you are a student of any college, you are welcome to attend.
                        </p>
                    </div>
                </div>

                <hr className='bg-emerald-400 w-[100%] h-1 mt-4 mb-2' />

                <div className='w-full '>
                    {/* HEAD */}
                    <div className='transition-all duration-1000 flex justify-between items-center px-2'>
                        <h1 className='font-bold text-2xl py-2'>Where is the event?</h1>

                    </div>
                    {/* CONTENT */}
                    <div className='transition-all duration-1000 overflow-hidden'>
                        <p className='font-semibold p-2 text-justify'>The event is being hosted at Maharaja Agrasen Institute of Technology, New Delhi.
                        </p>
                    </div>
                </div>

                <hr className='bg-emerald-400 w-[100%] h-1 mt-4 mb-2' />
                <div className='w-full '>
                    {/* HEAD */}
                    <div className='transition-all duration-1000 flex justify-between items-center px-2'>
                        <h1 className='font-bold text-2xl py-2'>Is it in offline or online mode?</h1>

                    </div>
                    {/* CONTENT */}
                    <div className='transition-all duration-1000 overflow-hidden'>
                        <p className='font-semibold p-2 text-justify'>It will be held in offline mode at Maharaja Agrasen Institute of Technology, on 22nd -23rd November, 2023</p>
                    </div>
                </div>

                <hr className='bg-emerald-400 w-[100%] h-1 mt-4 mb-2' />
                <div className='w-full '>
                    {/* HEAD */}
                    <div className='transition-all duration-1000 flex justify-between items-center px-2'>
                        <h1 className='font-bold text-2xl py-2'>Do we provide accommodation?</h1>

                    </div>
                    {/* CONTENT */}
                    <div className='transition-all duration-1000 overflow-hidden'>
                        <p className='font-semibold p-2 text-justify'>No we don’t provide accommodation. Participants will be required to come at 9:00 am on both days and leave after 5:00 pm
                        </p>
                    </div>
                </div>

                <hr className='bg-emerald-400 w-[100%] h-1 mt-4 mb-2' />

                <div className='w-full '>
                    {/* HEAD */}
                    <div className='transition-all duration-1000 flex justify-between items-center px-2'>
                        <h1 className='font-bold text-2xl py-2'>Where do we register for HackwithMAIT 4.0?</h1>

                    </div>
                    {/* CONTENT */}
                    <div className='transition-all duration-1000 overflow-hidden'>
                        <p className='font-semibold p-2 text-justify'>Registrations for HackwithMAIT 4.0 are accepted through devfolio only <br />
                            <a className="font-bold text-violet-200" href='https://hackwithmait4.devfolio.co'>Click here</a>
                        </p>
                    </div>
                </div>

                <hr className='bg-emerald-400 w-[100%] h-1 mt-4' />
                <div className='w-full '>
                    {/* HEAD */}
                    <div className='transition-all duration-1000 flex justify-between items-center px-2'>
                        <h1 className='font-bold text-2xl py-2'>Is there a code of conduct?</h1>

                    </div>
                    {/* CONTENT */}
                    <div className='transition-all duration-1000 overflow-hidden'>
                        <p className='font-semibold p-2 text-justify'>Yes there is. We enforce it very strongly.
                        </p>
                    </div>
                </div>

                <hr className='bg-emerald-400 w-[100%] h-1 mt-4' />
            </div>
        </div>
    )
}

export default FAQ
