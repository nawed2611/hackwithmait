import React from 'react';
import Aboutsvg from '../assets/about.svg'
import PageHeading from '../components/PageHeading';

const About = () => {
  return (
    <div className='flex flex-col items-center min-h-screen About'>
      <PageHeading name="About Us" color="blue" /> 

      <div className='flex flex-col justify-center items-center m-4 sm:m-16 mt-4 p-4'>
        <p className='leading-relaxed text-xl font-[500]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate odio ut enim. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Mauris vitae ultricies leo integer malesuada nunc. Velit dignissim sodales ut eu sem integer vitae justo. Nullam non nisi est sit. Eros donec ac odio tempor orci. Eu consequat ac felis donec et. Iaculis nunc sed augue lacus viverra vitae congue eu. Mauris augue neque gravida in fermentum et. Scelerisque varius morbi enim nunc. Libero volutpat sed cras ornare arcu dui vivamus arcu. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Suspendisse sed nisi lacus sed viverra. Eu feugiat pretium nibh ipsum consequat nisl. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Elementum pulvinar etiam non quam lacus suspendisse. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse.
        </p>

        <div className='flex flex-col sm:flex-row mt-12 w-full p-2 justify-between text-xl font-[800]'>
          <div className=''>
            <p className='underline mb-2'>Date</p>
            <p>22nd-23rd December 2022 - Hacking</p>
            <p>23rd December 2022 - Development Pitching</p>
          </div>
          <div className='mt-2 sm:mt-0'>
            <p className='underline mb-2'>Venue</p>
            <p>Maharaja Agrasen Institute of Technology</p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center w-full mt-12 text-2xl'>
          <img src={Aboutsvg} className='w-24 h-24 mx-6 ' />
          <div className='flex flex-col sm:flex-row items-center w-full font-bold sm:ml-20 gap-6'>
            <div className='flex'>
              <p className='shadow-lg shadow-[#00000030] p-2 px-4'>4</p>
              <p className='shadow-lg shadow-[#00000030] p-2 px-4'>2</p>
              <p className='shadow-lg shadow-[#00000030] p-2 px-4'>2</p>
            </div>
            <p className='mx-1 text-center text-3xl'>Connections since Hack with MAIT 1.0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About