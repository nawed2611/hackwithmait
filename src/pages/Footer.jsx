import React from 'react'
import '../components/styles/Footer.css';

const Footer = () => {
    return (
        <div className='flex content-center Contact Us'>
            <div className="radial-bg-2 w-[98vw] h-[30vh] absolute"></div>
            <div className='flex flex-wrap  mx-auto shrink justify-evenly'
                style={{
                    'color': 'white',
                    'minHeight': '0',
                }}>
                <div className='flex flex-wrap flex-col' id='boxes'>
                    <div className='flex flex-col'>
                        <h1 className='text-4xl'>Date</h1>
                        <p className='text-xl'>22nd & 23rd December 2022</p>
                    </div> &nbsp;
                    <div className='flex flex-col'>
                        <h1 className='text-4xl'>Venue</h1>
                        <p className='text-xl'>
                            Auditorium, <br />
                            Maharaja Agrasen Institute of Technology,<br />
                            Rohini, Delhi, <br />
                            110034
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-between' id='boxes'>
                    <div>
                        <h1 className='text-4xl'>Contact Details</h1>
                        <p className='text-xl mt-2'>Prakhar Sharma: +91 95991 79794</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-4xl'>Social Media</h1>
                        <div className='flex p-2 '>
                            <a href='https://www.instagram.com/techcom_mait/?hl=en' ><img className='invert' src='https://img.icons8.com/ios/512/instagram-new--v1.png' style={{ 'maxWidth': '30px' }} /></a>
                            <a href='https://www.facebook.com/techcommait/' ><img className='invert' src='https://img.icons8.com/ios/512/facebook--v1.png' style={{ 'maxWidth': '30px' }} /></a>
                            <a href='https://in.linkedin.com/company/techcommait' ><img className='invert' src='https://img.icons8.com/ios/512/linkedin.png' style={{ 'maxWidth': '30px' }} /></a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col' id='boxes'>
                    <h1 className='text-4xl'>Resources</h1>
                    <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum earum rem sed, ut tenetur iure commodi minus, sapiente maiores odio alias non est vitae, accusantium nemo. Voluptate, repudiandae. Error, in.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Footer
