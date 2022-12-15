import React from 'react';
import Aboutsvg from '../assets/about.svg'
import trackssvg from '../assets/tracks.svg';
import PageHeading from '../components/PageHeading';

const About = () => {
  return (
    <div className='flex flex-col carousel-bg text-white items-center min-h-screen About'>
      <div className='flex w-full space-x-4 mt-6 px-20'>
        <div className='font-bold text-2xl'>
          About Us
        </div>
        <div className='bg-gradient-to-r from-[#2441A7] to-transparent w-[70%] h-2 mt-4'>
        </div>
      </div>

      <img src={trackssvg} className='absolute object-cover w-screen -z-10' alt='About' />

      <div className='flex flex-col justify-center items-center m-2 sm:m-16 mt-2 p-6'>
        <p className='leading-relaxed text-xl font-[500]'>
          Welcome to HackwithMAIT3.0, the annual hackathon organized by the Techcom society of the Computer Science and Engineering department at MAIT.

          This event brings together some of the brightest and most creative minds from across India to compete and collaborate on innovative ideas and projects. Over the course of the hackathon, participants will have the opportunity to work on a wide range of challenges and problem statements, and to learn from experienced mentors and judges from the tech industry.

          At HackwithMAIT3.0, we believe that creativity and ingenuity knows no bounds. Whether you are a seasoned programmer or a complete beginner, we welcome all participants who are eager to learn and to push the boundaries of what is possible.

          We look forward to seeing the amazing ideas and solutions that emerge from this year's hackathon, and to celebrating the achievements of all our participants. Join us and let's make HackwithMAIT3.0 a truly memorable hackathon!
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