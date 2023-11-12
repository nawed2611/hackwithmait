import React from 'react'
import sponsorBg from '../assets/sponsors.svg'
import devfolioimg from '../assets/Sponsors/Devfolio.png'
import replitimg from '../assets/Sponsors/Replit.png'
import polygonimg from '../assets/Sponsors/Polygon.png'
import hwmlogo from '../assets/Sponsors/HWM_LOGO.jpeg'
import Tezos from '../assets/Sponsors/Tezos.png'
import Kwikpic from '../assets/Sponsors/Kwikpic.png'
import Prism from '../assets/Sponsors/Prism.png'
import AfreeBug from '../assets/Sponsors/AfreeBug.jpeg'
import wolfram3 from '../assets/Sponsors/wolfram3.png'
import MonkHood from '../assets/Sponsors/Monkhood.jpeg'
import quine1 from '../assets/Sponsors/dark_quine.svg'
import quine2 from '../assets/Sponsors/light_quine.svg'

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
            <div className='flex flex-wrap py-4'>

                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src={devfolioimg} alt="" className=' h-24' />
                </div>
                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src={polygonimg} alt="" className=' h-24' />
                </div>
                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src={replitimg} alt="" className=' h-24' />
                </div>
                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src={Tezos} alt="" className='rounded h-24' />
                </div>
                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src={Kwikpic} alt="" className='rounded h-24' />
                </div>
                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src={Prism} alt="" className='rounded h-20' />
                </div>
                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src="https://r10.ieee.org/delhi-com/wp-content/uploads/sites/50/ieee-comsoc-delhi-logo-resized.jpg" alt="" className='rounded h-24' />
                </div>
                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src={AfreeBug} alt="" className='rounded h-24' />
                </div>
                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src={wolfram3} alt="" className='rounded h-20' />
                </div>
                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src={MonkHood} alt="" className='roundeS h-24' />
                </div>
                <div className='flex px-12 my-5 gap-3 items-center justify-center mx-10 max-md:p-0 max-md:my-3'>
                    <img src={quine2} alt="" className='roundeS h-24' />
                </div>
            </div>

            {/*<div className='hidden md:flex lg:hidden px-12 my-5 gap-3 items-center justify-center mx-10'>
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className=' w-44 h-24' />
            </div>
            <div className='hidden lg:flex px-12 my-5 gap-10 items-center justify-center mx-10'>
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-56 lg:h-32' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-56 lg:h-32' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-56 lg:h-32' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className=' w-56 lg:h-32' />
            </div>

            {/* sponsors row 2 */}
            {/* <div className='flex sm:hidden px-12 my-5 gap-3 items-center justify-center mx-10'>
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
            </div>
            <div className='flex sm:hidden px-12 my-5 gap-3 items-center justify-center mx-10'>
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
            </div>
            <div className='hidden sm:flex md:hidden px-12 my-5 gap-3 items-center justify-center mx-10'>
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-44 h-24' />
            </div>
            <div className='hidden md:flex lg:hidden px-12 my-5 gap-3 items-center justify-center mx-10'>
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