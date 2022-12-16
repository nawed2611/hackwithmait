import React from 'react';

const CarouselScreen = () => {
    return (
        <div className='flex flex-col overflow-hidden items-center'>
            <div className='flex flex-col items-center sm:items-baseline sm:flex-row w-full space-x-4 sm:px-20 p-2'>
                <p className='text-white font-semibold text-2xl'>
                    Hack with MAIT 1.0
                </p>
                <div className='bg-gradient-to-r from-white to-transparent sm:w-[80%] w-[90%] h-2 mt-4'>
                </div>
            </div>
            <div className='m-12 sm:w-[80%]'>
                <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
                    <div className="carousel-inner relative w-full border-4 border-white rounded overflow-hidden">
                        <div className="carousel-item relative float-left w-[90vw]">
                            <img
                                src="https://cse.mait.ac.in/images/HwM__day2-10.jpeg"
                                className="block w-[80vw] object-fit"
                                alt="Exotic Fruits"

                            />
                        </div>
                        <div className="carousel-item active relative float-left w-[90vw]">
                            <img
                                src="https://cse.mait.ac.in/images/Hack-With-MAIT_20_14.jpeg"
                                className="block w-[80vw] object-fit"
                                alt="Wild Landscape"

                            />
                        </div>
                        <div className="carousel-item relative float-left w-[90vw]">
                            <img
                                src="https://cse.mait.ac.in/images/Hack-With-MAIT_20_13.jpeg"
                                className="block w-[80vw] object-fit"
                                alt="Camera"
                            />
                        </div>
                        <div className="carousel-item relative float-left w-[90vw]">
                            <img
                                src="https://cse.mait.ac.in/images/Hack-With-MAIT_20_12.jpeg"
                                className="block w-[80vw] object-fit"
                                alt="Exotic Fruits"
                            />
                        </div>
                        <div className="carousel-item relative float-left w-[90vw]">
                            <img
                                src="https://cse.mait.ac.in/images/HwM_Day1_-1.jpeg"
                                className="block w-[80vw] object-fit"
                                alt="Exotic Fruits"
                            />
                        </div>
                        <div className="carousel-item relative float-left w-[90vw]">
                            <img
                                src="https://cse.mait.ac.in/images/HwM_Day2_-5.jpeg"
                                className="block w-[80vw] object-fit"
                                alt="Exotic Fruits"
                            />
                        </div>

                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarouselScreen
