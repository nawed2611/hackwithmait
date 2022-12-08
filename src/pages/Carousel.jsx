import React from 'react';

const CarouselScreen = () => {
    return (
        <div className='flex flex-col carousel-bg items-center'>
            <div className='flex w-full space-x-4 px-20 mt-6'>
                <div className='text-white font-semibold text-2xl'>
                    Hack with MAIT 1.0
                </div>
                <div className='bg-gradient-to-r from-white to-transparent w-[70vw] h-2 mt-4'>
                </div>
            </div>
            <div className='m-12 '>
                <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
                    <div className="carousel-inner relative w-full border-4 border-white rounded overflow-hidden">
                        <div className="carousel-item active relative float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                                className="block w-full"
                                alt="Wild Landscape"
                            />
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                                className="block w-full"
                                alt="Camera"
                            />
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                                className="block w-full"
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