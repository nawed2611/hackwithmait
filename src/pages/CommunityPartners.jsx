import OCD from '../Community_Partners/OCD.png'
import Techcom from '../Community_Partners/techcom.jpg'
import WAC from '../Community_Partners/WAC.png'
import Kwikpic from '../assets/Sponsors/kwikpicpartner.jpg'


const CommunityPartners = () => {
    return (
        <div className='flex flex-col carousel-bg Sponsors py-1'>

            <div className='flex w-full space-x-4 px-20 mt-14'>
                <div className='text-white font-semibold text-2xl'>
                    Community Partners
                </div>
                <div className='bg-gradient-to-r from-white to-transparent w-full h-2 mt-4'>
                </div>
            </div>

            <div className='radial-bg w-[98vw] h-screen absolute -z-10'></div>

            {/* sponsors row 1 */}
            <div className='flex flex-wrap py-4 justify-center'>

                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src={OCD} alt="" className=' h-24' />
                </div>
                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src={Techcom} alt="" className=' h-24' />
                </div>
                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src={WAC} alt="" className=' h-24' />
                </div>
 
            </div>
            <div className='flex w-full space-x-4 px-20 mt-14'>
                <div className='text-white font-semibold text-2xl'>
                    Photo Sharing Partner
                </div>
                <div className='bg-gradient-to-r from-white to-transparent w-full h-2 mt-4'>
                </div>
            </div>

            <div className='radial-bg w-[98vw] h-screen absolute -z-10'></div>

            {/* sponsors row 1 */}
            <div className='flex flex-wrap py-4 justify-center'>
                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src={Kwikpic} alt="" className=' h-24' />
                </div>
 
            </div>
        </div>
    )
}

export default CommunityPartners
