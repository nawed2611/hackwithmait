import React from 'react'
import '../components/styles/Footer.css';

const Footer = () => {
    return (
        <div className='flex content-center Contact Us'>
            <div className="radial-bg-2 w-[98vw] h-[30vh] absolute"></div>
            <div className='flex flex-wrap  mx-auto shrink justify-between w-full sm:px-24'
                style={{
                    'color': 'white',
                    'minHeight': '0',
                }}>
                <div className='flex flex-wrap flex-col' id='boxes'>
                    <div className='flex flex-col'>
                        <h1 className='text-4xl'>Date</h1>
                        <p className='text-xl'>22nd & 23rd November 2023</p>
                    </div> &nbsp;
                    <div className='flex flex-col'>
                        <h1 className='text-4xl'>Venue</h1>
                        <p className='text-xl'>
                            Maharaja Agrasen Institute of Technology,<br />
                            Rohini, Delhi, <br />
                            110034
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-between' id='boxes'>
                    <div>
                        <h1 className='text-4xl'>Contact Details</h1>
                        <p className='text-xl mt-2'>Nawed Ali - +91 7250297869</p>
                        <p className='text-xl mt-2'>Ansh Goyal - +91 9582821205</p>
                        <p className='text-xl mt-2'>Mohd Khundmeer Siddiq - +91 7838145619</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-4xl'>Contact Us</h1>
                        <div className='flex p-2 '>
                            <a href='https://www.instagram.com/techcom_mait/?hl=en' ><img className='invert' src='https://img.icons8.com/ios/512/instagram-new--v1.png' style={{ 'maxWidth': '30px' }} /></a>
                            <a href='https://www.facebook.com/techcommait/' ><img className='invert' src='https://img.icons8.com/ios/512/facebook--v1.png' style={{ 'maxWidth': '30px' }} /></a>
                            <a href='https://in.linkedin.com/company/techcommait' ><img className='invert' src='https://img.icons8.com/ios/512/linkedin.png' style={{ 'maxWidth': '30px' }} /></a>
                        </div>
                    </div>
                </div>

                <div className="w-full p-2">
                    <iframe className='rounded-md mx-auto w-[90%] h-[50vh]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.9946538933796!2d77.06351547609363!3d28.71970577561724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d068dbf44ecd7%3A0xc4ce5551f8ac8360!2sMaharaja%20Agrasen%20Institute%20Of%20Technology(MAIT)!5e0!3m2!1sen!2sin!4v1698048496927!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
    )
}

export default Footer
