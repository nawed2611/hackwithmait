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
                        <h1 className='font-bold text-xl py-2'>What is a hackathon?</h1>
                        <button className='p-3 text-2xl text-black bg-white rounded-full hover:bg-emerald-400 shadow-2xl border' style={{ 'transform': 'rotate(0deg)', 'transitionDuration': '1s' }} onClick={() => view('1')} id='1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>

                    </div>
                    {/* CONTENT */}
                    <div className='max-h-0 transition-all duration-1000 overflow-hidden p-0' id='1c'>
                        <p className='font-semibold p-2 text-justify'>A hackathon is an invention marathon. Students come together to build cool software & hardware hacks over 24-48 hours. It’s very beginner friendly.
                        </p>
                    </div>
                </div>

                <hr className='bg-emerald-400 w-[100%] h-1 mt-4 mb-2' />

                <div className='w-full '>
                    {/* HEAD */}
                    <div className='transition-all duration-1000 flex justify-between items-center  px-2'>
                        <h1 className='font-bold text-xl py-2'>How much does it cost?</h1>
                        <button className='p-3 text-2xl text-black bg-white rounded-full hover:bg-emerald-400 shadow-2xl border' style={{ 'transform': 'rotate(0deg)', 'transitionDuration': '1s' }} onClick={() => view('2')} id='2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>

                    </div>
                    {/* CONTENT */}
                    <div className='max-h-0 transition-all duration-1000 overflow-hidden' id='2c'>
                        <p className='font-semibold p-2 text-justify'>Nothing. Attending Hack with MAIT 3.0 is free.
                        </p>
                    </div>
                </div>

                <hr className='bg-emerald-400 w-[100%] h-1 mt-4 mb-2' />

                <div className='w-full '>
                    {/* HEAD */}
                    <div className='transition-all duration-1000 flex justify-between items-center  px-2'>
                        <h1 className='font-bold text-xl py-2'>Do I need to be a MAIT student to attend?</h1>
                        <button className='p-3 text-2xl  text-black bg-white rounded-full hover:bg-emerald-400 shadow-2xl border' style={{ 'transform': 'rotate(0deg)', 'transitionDuration': '1s' }} onClick={() => view('3')} id='3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>

                    </div>
                    {/* CONTENT */}
                    <div className='max-h-0 transition-all duration-1000 overflow-hidden' id='3c'>
                        <p className='font-semibold p-2 text-justify'>No, if you are a student of any college, you are welcome to attend.
                        </p>
                    </div>
                </div>

                <hr className='bg-emerald-400 w-[100%] h-1 mt-4 mb-2' />

                <div className='w-full '>
                    {/* HEAD */}
                    <div className='transition-all duration-1000 flex justify-between items-center  px-2'>
                        <h1 className='font-bold text-xl py-2'>Where is the event?</h1>
                        <button className='p-3 text-2xl text-black bg-white  rounded-full hover:bg-emerald-400 shadow-2xl border' style={{ 'transform': 'rotate(0deg)', 'transitionDuration': '1s' }} onClick={() => view('4')} id='4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>

                    </div>
                    {/* CONTENT */}
                    <div className='max-h-0 transition-all duration-1000 overflow-hidden' id='4c'>
                        <p className='font-semibold p-2 text-justify'>The event is being hosted at MAIT, New Delhi.
                        </p>
                    </div>
                </div>

                <hr className='bg-emerald-400 w-[100%] h-1 mt-4 mb-2' />

                <div className='w-full '>
                    {/* HEAD */}
                    <div className='transition-all duration-1000 flex justify-between items-center  px-2'>
                        <h1 className='font-bold text-xl py-2'>Is there a code of conduct?</h1>
                        <button className='p-3 text-2xl text-black bg-white  rounded-full hover:bg-emerald-400 shadow-2xl border' style={{ 'transform': 'rotate(0deg)', 'transitionDuration': '1s' }} onClick={() => view('5')} id='5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>

                    </div>
                    {/* CONTENT */}
                    <div className='max-h-0 transition-all duration-1000 overflow-hidden' id='5c'>
                        <p className='font-semibold p-2 text-justify'>Yes there is. We enforce it very strongly.
                        </p>
                    </div>
                </div>

                <hr className='bg-emerald-400 w-[100%] h-1 mt-4 mb-2' />

                <div className='w-full '>
                    {/* HEAD */}
                    <div className='transition-all duration-1000 flex justify-between items-center  px-2'>
                        <h1 className='font-bold text-xl py-2'>Accordion 1</h1>
                        <button className='p-3 text-2xl text-black bg-white  rounded-full hover:bg-emerald-400 shadow-2xl border' style={{ 'transform': 'rotate(0deg)', 'transitionDuration': '1s' }} onClick={() => view('6')} id='6'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>

                    </div>
                    {/* CONTENT */}
                    <div className='max-h-0 transition-all duration-1000 overflow-hidden' id='6c'>
                        <p className='font-semibold p-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt molestiae magnam ab, unde facilis ipsam laborum repellat, doloremque quasi autem at voluptatibus labore nisi dolor dolore temporibus ipsa praesentium.
                        </p>
                    </div>
                </div>

                <hr className='bg-emerald-400 w-[100%] h-1 mt-4' />
            </div>
        </div>
    )
}

export default FAQ
