import React from 'react'
import Card from '../components/Card'

const Team = () => {
    return (
        <div className='flex flex-col h-screen'>
            <div className='flex w-full space-x-4 px-20 my-6'>

                <div className='font-bold text-2xl'>
                    Team Members
                </div>
                <div className='bg-gradient-to-r from-[#2441A7] to-transparent w-[80%] h-2 mt-4'>
                </div>
            </div>

            {/* team members row1 */}
            <div className='flex px-12 mt-5 space-x-10 items-center justify-center'>
                <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
            </div>
            <div className='flex px-12 mt-5 space-x-10 items-center justify-center'>
                <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />
                <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqR0Lpuzd59CDB5CoFPf-z2i9jQmgrD2nKkwma4No2iFwum32ZNbwDz2yowhhmjEx0Rc&usqp=CAU" linkedin="#" name="Name" role="role" />

            </div>
        </div>
    )
}

export default Team