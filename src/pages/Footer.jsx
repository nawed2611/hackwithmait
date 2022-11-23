import React from 'react'
import '../assets/Footer.css';

const Footer = () => {
    return (
        <div className='flex content-center' style={{'backgroundImage':'url(https://i2.wp.com/pixahive.com/wp-content/uploads/2021/03/purple-black-background-369602-pixahive.jpg?fit=2560%2C1440&ssl=1)'}}>
            <div className='flex flex-wrap shrink' 
                style={{
                    'color':'white',
                    'minHeight':'0',
                }}>
                <div className='flex flex-wrap flex-col' id='boxes'>
                    <div className='flex flex-col'>
                        <h1 className='text-4xl'>Date</h1>
                        <p className='text-xl'>14th, 15th, 16th November 2022</p>
                    </div> &nbsp;
                    <div className='flex flex-col'>
                        <h1 className='text-4xl'>Venue</h1>
                        <p className='text-xl'>
                            Auditorium, <br/> 
                            Maharaja Agrasen Institute of Technology,<br/>
                            Rohini, Delhi, <br/>
                            110034
                        </p>
                    </div>
                </div>
                <div className='flex flex-col' id='boxes'>
                    <h1 className='text-4xl'>Contact Details</h1>
                        <ul className='list-disk text-xl' style={{'color':'white'}}>
                            <li>Prakhar Sharma: +91 95991 79794</li>
                        </ul>
                </div>
                <div className='flex flex-col'  id='boxes'>
                    <h1 className='text-4xl'>Resources</h1>
                    <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum earum rem sed, ut tenetur iure commodi minus, sapiente maiores odio alias non est vitae, accusantium nemo. Voluptate, repudiandae. Error, in.
                    </p>
                </div>
                <div className='flex flex-col' id='boxes'>
                    <h1 className='text-4xl'>Social Media</h1>
                    <div className='flex flex-row'>
                       <a href='https://www.instagram.com/techcom_mait/?hl=en' ><img className='invert' src='https://img.icons8.com/ios/512/instagram-new--v1.png' style={{'maxWidth':'30px'}}/></a>
                        <a href='https://www.facebook.com/techcommait/' ><img className='invert' src='https://img.icons8.com/ios/512/facebook--v1.png' style={{'maxWidth':'30px'}}/></a>
                        <a href='https://in.linkedin.com/company/techcommait' ><img className='invert' src='https://img.icons8.com/ios/512/linkedin.png' style={{'maxWidth':'30px'}}/></a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
