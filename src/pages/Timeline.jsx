import { useEffect, useState } from "react";
import Div from "../assets/timeline/div.flextimeline1.svg"
import PhTime1 from "../assets/timeline/phone timeline.svg"
import PhTime2 from "../assets/timeline/phone timeline day 2.svg"
const Timeline = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Add event listener to update windowWidth when the window size changes
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='flex flex-col text-white items-center Timeline'>
      <div className='flex flex-col sm:flex-row w-full items-center sm:items-baseline sm:space-x-4 mt-2 px-20'>
        <div className='font-bold text-2xl'>
          Timeline
        </div>
      </div>
      <br />
      <div>
        {windowWidth > 800 ?
          (<img className="w-[80vw] " src={Div} />) : (
            <div>
              <img className="w-[60vw] " src={PhTime1} />
              <div className='bg-gradient-to-r from-[#2441A7] to-transparent w-full sm:w-[70%] h-2 mt-4'>
              </div>
              <br />
              <br />
              <img className="w-[60vw] " src={PhTime2} />
            </div>
          )}
      </div>

    </div>
  )
}

export default Timeline;
