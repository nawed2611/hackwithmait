import React from 'react'
import SpeakerCard from '../components/SpeakerCard';

const Speakers = () => {
    const items = {
        1: {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU",
            linkedin: "#",
            name: "Name",
            role: "role"
        },
        2: {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU",
            linkedin: "#",
            name: "Name",
            role: "role"
        },
        3: {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU",
            linkedin: "#",
            name: "Name",
            role: "role"
        },
        4: {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU",
            linkedin: "#",
            name: "Name",
            role: "role"
        }
    }
    return (
        <div className='flex Speakers carousel-bg p-6 text-white flex-col items-center min-h-screen'>
            <div className='flex flex-col sm:flex-row w-full space-x-4 sm:px-20 items-center p-2 mt-6'>
                <p className='font-bold text-2xl'>
                    Speakers
                </p>
                <div className='bg-gradient-to-r from-white to-transparent w-[90%] sm:w-[80%] h-2 mt-4'>
                </div>
            </div>

            <div className='flex flex-1 text-black gap-4 gap-x-6 pb-4 mx-auto sm:w-[80%] items-center flex-wrap mt-12 p-2 sm:flex-row justify-center'>
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <SpeakerCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />

            </div>
        </div>
    )
}

export default Speakers