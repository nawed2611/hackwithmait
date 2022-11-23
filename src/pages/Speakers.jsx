import React from 'react'
import SpeakerCard from '../components/SpeakerCard';

const Speakers = () => {
    return (
        <div className='flex Speakers flex-col justify-center items-center h-screen'>
            <div className='flex w-full space-x-4 px-20'>
                <div className='font-bold text-2xl'>
                    Speakers
                </div>
                <div className='bg-gradient-to-r from-[#2441A7] to-transparent w-[80%] h-2 mt-4'>
                </div>
            </div>
            {/* team members row1 */}
            <div className='flex w-full px-12 mt-16 space-x-10 items-center justify-center'>
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
            </div>
            <div className='flex w-full px-12 mt-5 space-x-10 items-center justify-center'>
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />

            </div>
        </div>
    )
}

export default Speakers