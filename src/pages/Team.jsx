import React from 'react';
import Card from '../components/Card';
import trackssvg from '../assets/tracks.svg';
import Anupam from '../assets/Team_Pics/Anupam.jpeg';
import Khushboo from '../assets/Team_Pics/Khushboo.jpeg';
import Kunal from '../assets/Team_Pics/Kunal.jpg';
import Megha from '../assets/Team_Pics/Megha.jpeg';
import Prakhar from '../assets/Team_Pics/Prakhar.jpeg';
import Reeha from '../assets/Team_Pics/Reeha.jpeg';
import Rishabh from '../assets/Team_Pics/Rishabh.jpg';

const Team = () => {
    return (
        <div className='flex flex-col min-h-screen Team Members'>
            <div className='flex w-full space-x-4 text-white px-20 my-6'>

                <div className='font-bold text-2xl'>
                    Team Members
                </div>
                <div className='bg-gradient-to-r from-white to-transparent w-[80%] h-2 mt-4'>
                </div>
            </div>

            <img src={trackssvg} alt="trackssvg" className='absolute object-cover w-screen h-screen -z-10' />

            {/* team members row1 */}
            <div className='flex px-12 mt-5 space-x-10 items-center justify-center'>
                <Card img={Prakhar} linkedin="#" name="Prakhar" role="President" />
                <Card img={Anupam} linkedin="#" name="Anupam" role="role" />
                <Card img={Megha} linkedin="#" name="Megha" role="role" />
                <Card img={Reeha} linkedin="#" name="Reeha" role="role" />
            </div>
            <div className='flex px-12 mt-5 space-x-10 items-center justify-center'>
                <Card img={Kunal} linkedin="#" name="Kunal" role="role" />
                <Card img={Khushboo} linkedin="#" name="Khushboo" role="role" />
                <Card img={Rishabh} linkedin="#" name="Rishabh" role="role" />
            </div>
        </div>
    )
}

export default Team
