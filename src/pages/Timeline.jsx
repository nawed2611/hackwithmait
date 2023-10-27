import Div from "../assets/div.flextimeline.svg"
const Timeline = () => {
  return (
    <div className='flex flex-col text-white items-center Timeline'>
      <div className='flex flex-col sm:flex-row w-full items-center sm:items-baseline sm:space-x-4 mt-2 px-20'>
        <div className='font-bold text-2xl'>
          Timeline
        </div>
        <div className='bg-gradient-to-r from-[#2441A7] to-transparent w-full sm:w-[70%] h-2 mt-4'>
        </div>
      </div>
      <div><img className="w-[80vw] " src={Div} /></div>
    </div>
  )
}

export default Timeline;
