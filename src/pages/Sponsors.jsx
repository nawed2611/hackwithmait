import React from 'react'
import sponsorBg from '../assets/sponsors.svg'

const Sponsors = () => {
    return (
        <div className='flex flex-col h-screen'>
            <img src={sponsorBg} className='absolute object-cover w-screen h-screen -z-10' />
            <div className='flex w-full space-x-4 px-20 mt-14'>

                <div className='text-white font-semibold text-2xl'>
                    Sponsors
                </div>
                <div className='bg-gradient-to-r from-white to-transparent w-full h-2 mt-4'>
                </div>
            </div>

            {/* sponsors row 1 */}
            <div className='flex px-12 mt-5 space-x-10 items-center justify-center'>
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-56 h-32' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-56 h-32' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-56 h-32' />
                <img src="https://miro.medium.com/max/1400/0*c43pw7UiQgpfjDCl.jpg" alt="" className='w-56 h-32' />
            </div>

            {/* sponsors row 2 */}
            <div className='flex px-16 mt-6 space-x-10 items-center justify-center'>
                <img src="https://cdn.telanganatoday.com/wp-content/uploads/2021/11/Google-Hyderabad-is-looking-to-hire-for-multiple-roles.jpg" alt="" className='w-56 h-32' />
                <img src="https://cdn.telanganatoday.com/wp-content/uploads/2021/11/Google-Hyderabad-is-looking-to-hire-for-multiple-roles.jpg" alt="" className='w-56 h-32' />
                <img src="https://cdn.telanganatoday.com/wp-content/uploads/2021/11/Google-Hyderabad-is-looking-to-hire-for-multiple-roles.jpg" alt="" className='w-56 h-32' />
            </div>

            {/* spnsors row 3 */}
            <div className='flex px-12 mt-6 space-x-10 items-center justify-center'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/2560px-Netflix_logo.svg.png" alt="" className='w-56 h-32' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/2560px-Netflix_logo.svg.png" alt="" className='w-56 h-32' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/2560px-Netflix_logo.svg.png" alt="" className='w-56 h-32' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/2560px-Netflix_logo.svg.png" alt="" className='w-56 h-32' />
            </div>
        </div>
    )
}

export default Sponsors