import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  {
    src:
      'https://cse.mait.ac.in/gallery/_data/i/upload/2023/04/24/20230424120632-daf4a1f7-sm.jpg',
    alt: 'Hack with MAIT Album',
  },
  {
    src:
      'https://cse.mait.ac.in/gallery/_data/i/upload/2023/04/24/20230424120630-a8f6aaef-xs.jpg',
    alt: 'Camera',
  },
  {
    src:
      'https://cse.mait.ac.in/gallery/_data/i/upload/2023/04/24/20230424120632-a9ded2e6-sm.jpg',
    alt: 'Hack with MAIT Album',
  },
  {
    src:
      'https://cse.mait.ac.in/gallery/_data/i/upload/2023/04/24/20230424120629-b02217c8-sm.jpg',
    alt: 'Hack with MAIT Album',
  },
  // Add more image objects here
];

const CarouselScreen = () => {
  return (
    <div className='flex flex-col overflow-hidden items-center'>
    <div className='flex flex-col items-center sm:items-baseline sm:flex-row w-full space-x-4 sm:px-20 p-2'>
        <p className='text-white font-semibold text-2xl'>
            Hack with MAIT 3.0 Album
        </p>
        <div className='bg-gradient-to-r from-white to-transparent sm:w-[80%] w-[90%] h-2 mt-4'>
        </div>
    </div>
    <div className="w-full p-4 md:p-8">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        className="rounded-lg overflow-hidden  md:w-[900px] m-auto "
      >
        {images.map((image, index) => (
          <div key={index} className="px-5 sm:w-96 w-[80%] md:w-[800px] m-auto bg-gray-200 flex items-center justify-center ">
            <img
              src={image.src}
              alt={image.alt}
              className="w-[200px] "
            />
          </div>
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default CarouselScreen;
