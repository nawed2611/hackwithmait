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
        <div className='flex flex-col sm:p-6 carousel-bg min-h-screen Team Members'>
            <div className='flex  w-full flex-col sm:flex-row items-center sm:items-baseline space-x-4 text-white px-20 my-6'>
                <div className='font-bold text-2xl'>
                    Team Members
                </div>
                <div className='bg-gradient-to-r from-white to-transparent w-full sm:w-[80%] h-2 mt-4'>
                </div>
            </div>

            {/* team members row1 */}
            <div className='flex flex-1 flex-wrap gap-4 gap-x-6 pb-4 mx-auto sm:w-[80%] items-center justify-center'>
                <Card img={Prakhar} linkedin="#" name="Prakhar" role="President" />
                <Card img={Anupam} linkedin="#" name="Anupam" role="role" />
                <Card img={Megha} linkedin="#" name="Megha" role="role" />
                <Card img={Reeha} linkedin="#" name="Reeha" role="role" />

                <Card img={Kunal} linkedin="#" name="Kunal" role="role" />
                <Card img={Khushboo} linkedin="#" name="Khushboo" role="role" />
                <Card img={Rishabh} linkedin="#" name="Rishabh" role="role" />
            </div>
        </div>
    )
}

export default Team
