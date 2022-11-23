import React from 'react'

const FAQ = () => {
    function view(id){
        const content=document.getElementById(id+'c')
        const button=document.getElementById(id)
        if(button.style.transform === 'rotate(0deg)'){
            content.style.maxHeight=content.scrollHeight+'px';
            content.style.visibility='visible';
            button.style.transform = 'rotate(45deg)'; 
            button.style.backgroundColor='rgb(52 211 153)'           
        }
        else{
            content.style.maxHeight='';
            content.style.visibility='hidden';
            button.style.transform = 'rotate(0deg)';
            button.style.backgroundColor='white'
        }
    }
    return (
        <div className='flex flex-col'>
          <div className='flex w-full space-x-4 px-20 mt-6'>
            <div className='font-bold text-2xl'>
                Frequently Asked Question
            </div>
            <div className='bg-gradient-to-r from-[#2441A7] to-transparent w-[80%] h-2 mt-4'>
            </div>
          </div>
    
          <div className='flex flex-col justify-center items-center m-16 mt-4 p-4 '>
            {/* ACCORDIAN */}
            <div className='w-full bg-white '>
                {/* HEAD */}
                <div className='transition-all duration-1000 flex justify-between items-center  px-2'>
                    <h1 className='font-sans font-medium text-gray-800 py-2'>Accordion 1</h1>
                    <button className='bg-white p-3 text-2xl rounded-full hover:bg-emerald-400 shadow-2xl border shadow-inner' style={{'transform':'rotate(0deg)','transitionDuration':'1s'}} onClick={()=>view('1')} id='1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    
                </div>
                {/* CONTENT */}
                <div className='max-h-0 transition-all duration-1000 overflow-hidden p-0' id='1c'>
                    <p className='font-sans font-light p-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt molestiae magnam ab, unde facilis ipsam laborum repellat, doloremque quasi autem at voluptatibus labore nisi dolor dolore temporibus ipsa praesentium.
                    </p>
                </div>
            </div>

            <hr className='bg-emerald-400 w-[100%] h-1 mt-4'/>
            <br/>

            <div className='w-full bg-white '>
                {/* HEAD */}
                <div className='transition-all duration-1000 flex justify-between items-center  px-2'>
                    <h1 className='font-sans font-medium text-gray-800 py-2'>Accordion 1</h1>
                    <button className='bg-white p-3 text-2xl rounded-full hover:bg-emerald-400 shadow-2xl border shadow-inner' style={{'transform':'rotate(0deg)','transitionDuration':'1s'}} onClick={()=>view('2')} id='2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    
                </div>
                {/* CONTENT */}
                <div className='max-h-0 transition-all duration-1000 overflow-hidden' id='2c'>
                    <p className='font-sans font-light p-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt molestiae magnam ab, unde facilis ipsam laborum repellat, doloremque quasi autem at voluptatibus labore nisi dolor dolore temporibus ipsa praesentium.
                    </p>
                </div>
            </div>

            <hr className='bg-emerald-400 w-[100%] h-1 mt-4'/>
            <br/>

            <div className='w-full bg-white '>
                {/* HEAD */}
                <div className='transition-all duration-1000 flex justify-between items-center  px-2'>
                    <h1 className='font-sans font-medium text-gray-800 py-2'>Accordion 1</h1>
                    <button className='bg-white p-3 text-2xl rounded-full hover:bg-emerald-400 shadow-2xl border shadow-inner' style={{'transform':'rotate(0deg)','transitionDuration':'1s'}} onClick={()=>view('3')} id='3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    
                </div>
                {/* CONTENT */}
                <div className='max-h-0 transition-all duration-1000 overflow-hidden' id='3c'>
                    <p className='font-sans font-light p-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt molestiae magnam ab, unde facilis ipsam laborum repellat, doloremque quasi autem at voluptatibus labore nisi dolor dolore temporibus ipsa praesentium.
                    </p>
                </div>
            </div>

            <hr className='bg-emerald-400 w-[100%] h-1 mt-4'/>
            <br/>

            <div className='w-full bg-white '>
                {/* HEAD */}
                <div className='transition-all duration-1000 flex justify-between items-center  px-2'>
                    <h1 className='font-sans font-medium text-gray-800 py-2'>Accordion 1</h1>
                    <button className='bg-white p-3 text-2xl rounded-full hover:bg-emerald-400 shadow-2xl border shadow-inner' style={{'transform':'rotate(0deg)','transitionDuration':'1s'}} onClick={()=>view('4')} id='4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    
                </div>
                {/* CONTENT */}
                <div className='max-h-0 transition-all duration-1000 overflow-hidden' id='4c'>
                    <p className='font-sans font-light p-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt molestiae magnam ab, unde facilis ipsam laborum repellat, doloremque quasi autem at voluptatibus labore nisi dolor dolore temporibus ipsa praesentium.
                    </p>
                </div>
            </div>

            <hr className='bg-emerald-400 w-[100%] h-1 mt-4'/>
            <br/>

            <div className='w-full bg-white '>
                {/* HEAD */}
                <div className='transition-all duration-1000 flex justify-between items-center  px-2'>
                    <h1 className='font-sans font-medium text-gray-800 py-2'>Accordion 1</h1>
                    <button className='bg-white p-3 text-2xl rounded-full hover:bg-emerald-400 shadow-2xl border shadow-inner' style={{'transform':'rotate(0deg)','transitionDuration':'1s'}} onClick={()=>view('5')} id='5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    
                </div>
                {/* CONTENT */}
                <div className='max-h-0 transition-all duration-1000 overflow-hidden' id='5c'>
                    <p className='font-sans font-light p-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt molestiae magnam ab, unde facilis ipsam laborum repellat, doloremque quasi autem at voluptatibus labore nisi dolor dolore temporibus ipsa praesentium.
                    </p>
                </div>
            </div>

            <hr className='bg-emerald-400 w-[100%] h-1 mt-4'/>
            <br/>

            <div className='w-full bg-white '>
                {/* HEAD */}
                <div className='transition-all duration-1000 flex justify-between items-center  px-2'>
                    <h1 className='font-sans font-medium text-gray-800 py-2'>Accordion 1</h1>
                    <button className='bg-white p-3 text-2xl rounded-full hover:bg-emerald-400 shadow-2xl border shadow-inner' style={{'transform':'rotate(0deg)','transitionDuration':'1s'}} onClick={()=>view('6')} id='6'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    
                </div>
                {/* CONTENT */}
                <div className='max-h-0 transition-all duration-1000 overflow-hidden' id='6c'>
                    <p className='font-sans font-light p-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt molestiae magnam ab, unde facilis ipsam laborum repellat, doloremque quasi autem at voluptatibus labore nisi dolor dolore temporibus ipsa praesentium.
                    </p>
                </div>
            </div>

            <hr className='bg-emerald-400 w-[100%] h-1 mt-4'/>
          </div>
        </div>
      )
}

export default FAQ
