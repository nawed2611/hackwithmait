import React from 'react';
import Aboutsvg from '../assets/about.svg'

const About = () => {
  return (
    <div className='flex flex-col text-white items-center min-h-screen About'>
      <div className='flex flex-col sm:flex-row w-full items-center sm:items-baseline sm:space-x-4 mt-6 px-20'>
        <div className='font-bold text-2xl'>
          About Us
        </div>
        <div className='bg-gradient-to-r from-[#2441A7] to-transparent w-full sm:w-[70%] h-2 mt-4'>
        </div>
      </div>
      <div className='radial-bg w-[98vw] h-screen'></div>
      <div className='flex glass flex-col justify-center items-center m-2 sm:m-16 mt-8 p-6'>
        <p className='leading-relaxed text-3xl font-[500]'>
          Welcome to HackwithMAIT 4.0, the annual hackathon organized by the Computer Science and Engineering department at MAIT.

          This event brings together some of the brightest and most creative minds from across India to compete and collaborate on innovative ideas and projects. Over the course of the hackathon, participants will have the opportunity to work on a wide range of challenges and problem statements, and to learn from experienced mentors and judges from the tech industry.

          At HackwithMAIT 4.0, we believe that creativity and ingenuity knows no bounds. Whether you are a seasoned programmer or a complete beginner, we welcome all participants who are eager to learn and to push the boundaries of what is possible.

          We look forward to seeing the amazing ideas and solutions that emerge from this year's hackathon, and to celebrating the achievements of all our participants. Join us and let's make HackwithMAIT 4.0 a truly memorable hackathon!
        </p>

        <div className='flex flex-col sm:flex-row mt-12 w-full p-2 sm:px-6 justify-between text-xl font-[800]'>
          <div className=''>
            <p className='underline mb-2'>Date</p>
            <p>22nd-23rd November 2023 - Hacking</p>
            <p>23rd November 2023 - Project Pitching</p>
          </div>
          <div className='mt-2 sm:mt-0'>
            <p className='underline mb-2'>Venue</p>
            <p>Maharaja Agrasen Institute of Technology, New Delhi</p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center w-full mt-12 text-2xl'>
          <img src={Aboutsvg} className='w-32 h-32 mx-6 ' />
          <div className='flex flex-col sm:flex-row items-center w-full font-bold sm:ml-20 gap-6'>
            <div className='flex'>
              <p className='drop-shadow-lg shadow-[#00000030] p-2 px-4'>9</p>
              <p className='drop-shadow-lg shadow-[#00000030] p-2 px-4'>2</p>
              <p className='drop-shadow-lg shadow-[#00000030] p-2 px-4'>2</p>
            </div>
            <p className='mx-1 text-center text-3xl'>Connections since Hack with MAIT 1.0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About