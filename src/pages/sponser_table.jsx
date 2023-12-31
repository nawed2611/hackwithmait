import Afree from '../assets/Sponsors/AfreeBug.jpeg'
import Prism from '../assets/Sponsors/Prism.png'
import Tezos from '../assets/Sponsors/Tezos.png'
import Monkhood from '../assets/Sponsors/Monkhood.jpeg'
import { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import Maitlogo from '../assets/Sponsors/MAITLogo_white.png';
import hwmlogo from '../assets/Sponsors/HWM_LOGO.jpeg';
import Footer from './Footer';
import About from './About'


const SpTable = () => {
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


  const spItems = {
    1: {
      spHeader: "AFreeBug",
      spContent:
        <>
          <p>AIM: The objective of this project is to develop a robust and efficient mobile application for mining Monero (XMR) cryptocurrency using Android smartphones. Monero is a privacy-focused cryptocurrency that employs the CryptoNight proof-of-work algorithm, making it suitable for CPU mining. This project aims to address the following challenges and requirements:</p>
          <br />
          <p>NOTE: This problem statement's solution has to be developed using technologies mentioned in the problem statement provided below.</p>
          <br />
          <p>PROBLEM STATEMENT: <a target='blank' href="https://docs.google.com/document/d/1qo4G6sRPL0SQ2PIDpVYTx1SowAM-3aDXYdwLvKeVKAk/edit?usp=sharing" className='text-blue-500 hover:underline'>Click Here </a></p>
          <br />
          <p>Customising XMRig Source Code Document: <a href="https://drive.google.com/file/d/1E6Zuu5nQiMgdsVu8qbuiVt2xqJXMqtoh/view?usp=sharing" className='text-blue-500 hover:underline'><br /> Click Here</a></p>
          <br />
          <p>PRIZE: Rs.50,000</p>
        </>,
      spImageUrl: Afree
    },
    2: {
      spHeader: "Prismberry",
      spContent:
        <>
          <p>The problem statement revolves around cloud cost visualization and optimization, specifically focusing on Amazon Web Services (AWS) Elastic Compute Cloud (EC2) and Relational Database Service (RDS). Here's a detailed problem statement:</p>
          <br />
          <p>Problem Statement: OptiCloud - AWS Cost Optimization</p>
          <br />
          <p>Description:</p>
          <p>OptiCloud is a cloud cost optimization tool designed to help organizations monitor and manage their AWS spending efficiently. The challenge is to develop a solution that visualizes costs for each EC2 instance and RDS database, provides cost recommendations using AI/ML algorithms, and implements cost attribution and tagging.</p>
          <br />
          <p>Key Tasks:</p>
          <p>1. Cost Visualization:</p>
          <p>- Create a user-friendly dashboard to display real-time and historical cost data for EC2 instances and RDS databases.</p>
          <p>- Use charts and graphs to illustrate cost trends and variations.</p>
          <br />
          <p>2. Cost Attribution and Tagging:</p>
          <p>- Implement a system for tagging EC2 instances and RDS databases with metadata, allowing users to attribute costs accurately to departments or projects.</p>
          <br />
          <p>3. AI/ML Cost Optimization:</p>
          <p>- Develop AI/ML algorithms that analyze usage patterns and provide cost optimization recommendations for EC2 and RDS resources.</p>
          <p>- Recommendations could include resizing instances, adjusting database configurations, or suggesting reserved instances.</p>
          <br />
          <p>Additional Information:</p>
          <p>- Participants are encouraged to consider scalability, data security, and user experience in their solution.</p>
          <p>- The solution can be web-based or platform-agnostic, depending on participants' preferences.</p>
          <br />
          <p> Problem Statement Document:<a href="https://docs.google.com/document/d/1i99WgPTuKUxTd2DsqVlr1OgeTXzKd_v8EMVYDLg2Y1E/edit?usp=sharing" className='text-blue-500 hover:underline'><br />Click here</a></p>
        </>,
      spImageUrl: Prism
    },
    3: {
      spHeader: "Monkhood",
      spContent:
        <>
          <p>Real-time Database Update Notification in Android Application using Socket.IO with Local Server Database</p>
          <br />
          <p>In this task, you are required to create an Android application using Kotlin, which maintains a real-time connection with a locally hosted MongoDB database. The application should display a list of names fetched from the database and update in real-time as names are added to or modified in the database.</p>
          <br />
          <p>Requirements:</p>
          <p>* Develop an Android application in Kotlin.</p>
          <p>* The application should have a user interface displaying a list of names.</p>
          <p>* The list of names should update in real-time as changes occur in the connected MongoDB database.</p>
          <p>* Use MongoDB as the database for storing names.</p>
          <p>* The database should be hosted on a local server.</p>
          <p>* Implement Socket.IO to establish and maintain a real-time connection between the Android application and the MongoDB database.</p>
          <p>* Changes made to the database (addition or modification of names) should instantly reflect in the Android applications displayed list.</p>
          <p>* Design and implement an API that allows adding names to the MongoDB database. * Test adding names to the database using an API testing tool like Postman.</p>
          <br />
          <p>Workflow:</p>
          <p>1. Set up a MongoDB database on a local server and populate it with an initial list of names.</p>
          <p>2. Develop an API that can add names to the MongoDB database.</p>
          <p>3. Develop an Android application in Kotlin.</p>
          <p>- The app should connect to the MongoDB database using Socket.IO.</p>
          <p>- Display the list of names from the database on the user interface.</p>
          <p>4. Test the real-time update feature.</p>
          <p>- Use Postman (or a similar tool) to send a request to the API to add a new name to the database. - Observe that the name is instantly added to the list in the Android applications user interface.</p>
          <br />
          <p>Deliverables:</p>
          <p>  * Source code for the Android application (written in Kotlin).</p>
          <p>  * Source code for the API (any suitable backend technology can be used).</p>
          <p>  * Documentation including setup instructions, API endpoints, and application usage guide.</p>
          <p>  * A demonstration video or detailed screenshots showing the real-time update feature in action.</p>
          <br />
          <p>  Evaluation:</p>
          <p>    - The Android application should successfully display and update the list of names in real-time.</p>
          <p>    - The application and API code should be clean, well-commented, and follow best practices for software development.</p>
          <p>    - The documentation should be clear and comprehensive, allowing anyone to set up and use the application and API.</p>
          <p>    - Successful demonstration of the real-time update feature, showing that changes to the database instantly reflect in the Android applications UI.</p>
          <br />
          <p>  This task will help you gain practical knowledge in real-time application development, working with Socket.IO, Kotlin for Android development, MongoDB for database management, and API development and testing, all within a local server environment.</p>
          <br />
          <p> Problem Statement Document:<a href="https://drive.google.com/file/d/1KvFKLt7iKoVOpHYTuUa1pMNbMfiBHAH8/view?usp=sharing" className='text-blue-500 hover:underline'> Click here</a></p>
        </>
      ,
      spImageUrl: Monkhood
    },
    4: {
      spHeader: "Tezos",
      spContent: (
        <>
          <p>Welcome to the HackwithMAIT 4.0 Sponsored Blockchain Track, proudly presented by Tezos! Get ready to unleash your creativity, innovation, and coding prowess as you dive into the exciting world of blockchain technology. With a total prize pool of $500, this is your chance to shine and make a lasting impact.</p>
          <br />
          <p>Track Details:</p>
          <p>Company Sponsor: Tezos</p>
          <p>Total Prize Pool: $500</p>
          <br />
          <p>Prizes:</p>
          <p>First Place: $150</p>
          <p>Second Place: $100</p>
          <p>Third Place: $50</p>
          <br />
          <p>But that's not all! We appreciate your hard work and dedication. Even if you don't make it to the top 3, you can still win:</p>
          <p>Remaining Participants: Share a pool of $200 (maximum $40 per project)</p>
          <br />
          <p>NOTE: The projects will be judged on the basis of idea, uniqueness, implementation, presentation, demo.</p>
          <br />
          <p>Project Requirements:</p>
          <p>Your project must be developed using the Tezos platform. Tezos is a cutting-edge blockchain platform known for its innovation and flexibility, so let your imagination run wild!</p>
          <p>The ideas and implementations should be unique and shall not be copy of any already existing project available online for becoming eligible for the Track Prizes.</p>
          <br />
          <p>Why Tezos?</p>
          <p>Tezos is a powerful, self-amending blockchain platform that allows you to build decentralized applications (DApps) and smart contracts with ease. Its unique governance mechanism and focus on security make it an ideal choice for blockchain enthusiasts and developers looking to create innovative solutions</p>
          <br />
          <p> Problem Statement Document:<a href="https://docs.google.com/document/d/1-ZEA_jFhldYmxsIt69XsmSWVjFmFs5vqadYOPhKvktQ/edit?usp=sharing" className='text-blue-500 hover:underline'> Click Here</a></p>
        </>
      ),
      spImageUrl: Tezos
    },
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = ['Home', 'Innovative Tracks', 'Sponsor Tracks'];

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <>
      <div className='radial-bg-2 w-[98vw] h-screen absolute'></div>
      <motion.div
        className="flex relative items-center sm:flex-row flex-col justify-between text-white mx-4 sm:mx-8 pl-8 pr-2 h-[15vh]  border-black max-md:bg-black max-md:mb-4  max-md:h-16 max-md:m-0 max-md:pl-2"
      >
        <div className="flex items-center mt-12 gap-x-8 max-md:mb-10 max-md:gap-x-0 max-md:p-0">
          <img src={Maitlogo} alt="MAIT Logo" className="h-20 max-md:h-10 max-md:mx-2" />
          <img src={hwmlogo} alt="HackwithMAIT 4.0 Logo" className="h-20 max-md:h-10" />
        </div>
        <nav>
          <ul className=" px-4 py-2 ring rounded-md glass flex text-lg gap-8 ">
            <li className="hover:scale-105 hover:text-slate-50 cursor-pointer transition-all hover:underline">
              <a href="/">
                Home
              </a>
            </li>
            <li className="hover:scale-105 hover:text-slate-50 cursor-pointer transition-all hover:underline">
              <a href='/table'>
                Innovative Tracks
              </a>
            </li>
            <li className="hover:scale-105 hover:text-slate-50 cursor-pointer transition-all hover:underline">
              <a href="/sptable">
                Sponsor Tracks
              </a>
            </li>
          </ul>


        </nav>
      </motion.div>

      <div className="mt-32 shadow-md sm:rounded-lg p-4">
        {windowWidth < 800 ?
          (<div className="text-sm text-left text-gray-500 dark:text-gray-400">
            <div className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  ">
              <div className='flex justify-between bg-gray-50 dark:bg-gray-800 '>
                <div scope="col" className="px-6 py-3 text-xl">
                  Track / Problem Statement / Sponsors
                </div>

              </div>
            </div>
            {
              Object.keys(spItems).map((id) => (

                <div className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 flex flex-col ">
                  <div className="px-6 py-4 font-medium text-gray-900 dark:text-white text-2xl ">
                    {spItems[id].spHeader}
                  </div>
                  <div className='flex flex-col'>
                    <div className="px-6 py-4 text-xl">
                      {spItems[id].spContent}
                    </div>
                  </div>
                  <div className="px-6 py-4 text-xl">
                    <img src={spItems[id].spImageUrl} className='w-40' />
                  </div>
                </div>
              ))
            }
          </div>) :
          (<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-5 max-md:my-0">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 max-md:invisible">
              <tr>
                <th scope="col" className="px-6 py-3 text-xl">
                  Track
                </th>
                <th scope="col" className="px-6 py-3 text-xl">
                  Problem Statement
                </th>
                <th scope="col" className="px-6 py-3 text-xl">
                  Sponsors
                </th>
              </tr>
            </thead>
            {
              Object.keys(spItems).map((id) => (

                <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 max-md:flex max-md:flex-col">
                  <th scope="row" className="px-6 py-4 font-medium text-start text-gray-900 dark:text-white text-2xl ">
                    {spItems[id].spHeader}
                  </th>
                  <td className="px-6 py-4 text-xl">
                    {spItems[id].spContent}
                  </td>
                  <td className="px-6 py-4 text-xl">
                    <img src={spItems[id].spImageUrl} />
                  </td>
                </tr>
              ))
            }
          </table>)}
        <Footer />
      </div>

    </>
  )
}

export default SpTable;
