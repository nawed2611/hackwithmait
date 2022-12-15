import React from 'react'
import SpeakerCard from '../components/SpeakerCard';

const Speakers = () => {
    return (
        <div className='flex Speakers carousel-bg  text-white flex-col items-center min-h-screen'>
            <div className='flex flex-col sm:flex-row w-full space-x-4 sm:px-20 items-center p-2 mt-6'>
                <p className='font-bold text-2xl'>
                    Speakers
                </p>

                <div className='bg-gradient-to-r from-white to-transparent w-[90%] sm:w-[80%] h-2 mt-4'>
                </div>
            </div>

            <div className='flex text-black flex-col sm:flex-row w-full px-12 mt-12 items-center justify-center'>
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
            </div>
            <div className='flex text-black  w-full px-12 mt-5 items-center justify-center'>
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />

            </div>
        </div>
    )
}

export default Speakers