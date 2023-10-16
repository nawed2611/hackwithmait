import React from 'react'
import sponsorBg from '../assets/sponsors.svg'
import devfolioimg from '../assets/Sponsors/Devfolio.png'
import replitimg from '../assets/Sponsors/Replit.png'
import polygonimg from '../assets/Sponsors/Polygon.png'
import hwmlogo from '../assets/sponsors/HWM_LOGO.jpeg'
import Tezos from '../assets/sponsors/Tezos.png'
import Kwikpic from '../assets/sponsors/Kwikpic.png'
import Prism from '../assets/sponsors/Prism.png'
import Maitlogo from '../assets/sponsors/MAITLogo_white.png'
import ComSoc from '../assets/sponsors/IEEE ComSoc.png'
import AfreeBug from '../assets/sponsors/AfreeBug.jpeg'
import wolfram3 from '../assets/sponsors/wolfram3.png'
import  MonkHood from '../assets/sponsors/Monkhood.jpeg'

const Sponsors = () => {
    return (
        <div className='flex flex-col carousel-bg Sponsors py-1'>
            
            <div className='flex w-full space-x-4 px-20 mt-14'>
                <div className='text-white font-semibold text-2xl'>
                    Sponsors
                </div>
                <div className='bg-gradient-to-r from-white to-transparent w-full h-2 mt-4'>
                </div>
            </div>

            <div className='radial-bg w-[98vw] h-screen absolute -z-10'></div>

            {/* sponsors row 1 */}
            <div className='flex flex-wrap'>

            <div className='flex px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src= {devfolioimg} alt="" className=' h-24' />
            </div>
            <div className='flex px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src= {polygonimg} alt="" className=' h-24' />
            </div>
            <div className='flex px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src= {replitimg} alt="" className=' h-24' />
            </div>
            <div className='flex px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src= {hwmlogo} alt="" className=' h-24' />
            </div>
            <div className='flex px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src= {Tezos} alt="" className=' h-24' />
            </div>
            <div className='flex px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src= {Kwikpic} alt="" className=' h-24' />
            </div>
            <div className='flex px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src= {Prism} alt="" className=' h-24' />
            </div>
            <div className='flex px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src= {Maitlogo} alt="" className=' h-24' />
            </div>
            <div className='flex px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src= {ComSoc} alt="" className=' h-24' />
            </div>
            <div className='flex px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src= {AfreeBug} alt="" className=' h-24' />
            </div>
            <div className='flex px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src= {wolfram3} alt="" className=' h-24' />
            </div>
            <div className='flex px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src= {MonkHood} alt="" className=' h-24' />
            </div>
            </div>

            {/*<div className='hidden md:flex lg:hidden px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className=' w-44 h-24' />
            </div>
            <div className='hidden lg:flex px-12 mt-5 space-x-10 items-center justify-center mx-10'>
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-56 lg:h-32' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-56 lg:h-32' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-56 lg:h-32' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className=' w-56 lg:h-32' />
            </div>

            {/* sponsors row 2 */}
           {/* <div className='flex sm:hidden px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
            </div>
            <div className='flex sm:hidden px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
            </div>
            <div className='hidden sm:flex md:hidden px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
            </div>
            <div className='hidden md:flex lg:hidden px-12 mt-5 space-x-3 items-center justify-center mx-10'>
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
            </div>
            <div className='hidden lg:flex px-16 mt-6 space-x-10 items-center justify-center mx-10'>
                <img src="https://cdn.telanganatoday.com/wp-content/uploads/2021/11/Google-Hyderabad-is-looking-to-hire-for-multiple-roles.jpg" alt="" className='w-56 lg:h-32' />
                <img src="https://cdn.telanganatoday.com/wp-content/uploads/2021/11/Google-Hyderabad-is-looking-to-hire-for-multiple-roles.jpg" alt="" className='w-56 lg:h-32' />
                <img src="https://cdn.telanganatoday.com/wp-content/uploads/2021/11/Google-Hyderabad-is-looking-to-hire-for-multiple-roles.jpg" alt="" className='w-56 lg:h-32' />
            </div> */}
        </div>
    )
}

export default Sponsors