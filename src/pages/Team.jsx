import React from 'react'
import Card from '../components/Card'
import trackssvg from '../assets/tracks.svg'

const Team = () => {
    return (
        <div className='flex flex-col h-screen Team Members'>
            <div className='flex w-full text-white space-x-4 px-20 my-6'>
                <div className='font-bold text-2xl'>
                    Team Members
                </div>
                <div className='bg-gradient-to-r from-white to-transparent w-[80%] h-2 mt-4'>
                </div>
            </div>
            <img src={trackssvg} className='absolute object-cover w-screen h-screen -z-10' alt='Tracks' />

            {/* team members row1 */}
            <div className='flex text-black px-12 mt-5 space-x-10 items-center justify-center'>
                <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
            </div>
            <div className='flex text-black px-12 mt-5 space-x-10 items-center justify-center'>
                <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
            </div>
        </div>
    )
}

export default Team