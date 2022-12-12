import React from 'react';
import trackssvg from '../assets/tracks.svg';
import PageHeading from '../components/PageHeading';


const Tracks = () => {
    return (
        <div className='flex flex-col Tracks items-center h-screen'>
            <PageHeading name="Hackathon Tracks" color="white" />

            <img src={trackssvg} className='absolute object-cover w-screen h-screen -z-10' alt='Tracks' />
            <div className='mt-12 sm:mt-2'>
                <section className="overflow-hidden text-gray-700">
                    <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-1/2 p-1 md:p-2 hover:scale-105 transition-all hover:opacity-40">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                                </div>
                                <div className="w-1/2 p-1 md:p-2 hover:scale-105 transition-all hover:opacity-40">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                                </div>
                                <div className="w-full hover:scale-105 transition-all hover:opacity-40 p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/2">
                                <div className="hover:scale-105 transition-all hover:opacity-40 w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                </div>
                                <div className="w-1/2 p-1 md:p-2 hover:scale-105 transition-all hover:opacity-40">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                                </div>
                                <div className="w-1/2 p-1 md:p-2 hover:scale-105 transition-all hover:opacity-40">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Tracks