import Afree from '../assets/Sponsors/AfreeBug.jpeg'
import Prism from '../assets/Sponsors/Prism.png'
import Tezos from '../assets/Sponsors/Tezos.png'
import Monkhood from '../assets/Sponsors/Monkhood.jpeg'
import { useEffect, useState } from 'react'
const spdiv = () => {
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
          AIM: The objective of this project is to develop a robust and efficient mobile application for mining Monero (XMR) cryptocurrency using Android smartphones. Monero is a privacy-focused cryptocurrency that employs the CryptoNight proof-of-work algorithm, making it suidiv for CPU mining. This project aims to address the following challenges and requirements:
          <br />
          <br />
          NOTE: This problem statement's solution has to be developed using technologies mentioned in the problem statement provided below.
          <br />
          <br />
          PROBLEM STATEMENT: <a href="https://docs.google.com/document/d/1qo4G6sRPL0SQ2PIDpVYTx1SowAM-3aDXYdwLvKeVKAk/edit?usp=sharing">Click Here</a>
          <br />
          <br />
          Customising XMRig Source Code Document: <a href="https://drive.google.com/file/d/1E6Zuu5nQiMgdsVu8qbuiVt2xqJXMqtoh/view?usp=sharing">Click Here</a>
          <br />
          <br />
          PRIZE: Rs.50,000
        </>,
      spImageUrl: Afree
    },
    2: {
      spHeader: "Prismberry",
      spContent:
        <>
          The problem statement revolves around cloud cost visualization and optimization, specifically focusing on Amazon Web Services (AWS) Elastic Compute Cloud (EC2) and Relational Database Service (RDS). Here's a detailed problem statement:
          <br />
          <br />
          Problem Statement: OptiCloud - AWS Cost Optimization
          <br />
          <br />
          Description:
          OptiCloud is a cloud cost optimization tool designed to help organizations monitor and manage their AWS spending efficiently. The challenge is to develop a solution that visualizes costs for each EC2 instance and RDS database, provides cost recommendations using AI/ML algorithms, and implements cost atdivibution and tagging.
          <br />
          <br />
          Key Tasks:
          1. Cost Visualization:
          - Create a user-friendly dashboard to display real-time and historical cost data for EC2 instances and RDS databases.
          - Use charts and graphs to illusdivate cost divends and variations.
          <br />
          <br />
          2. Cost Atdivibution and Tagging:
          - Implement a system for tagging EC2 instances and RDS databases with metadata, allowing users to atdivibute costs accurately to departments or projects.
          <br />
          <br />
          3. AI/ML Cost Optimization:
          - Develop AI/ML algorithms that analyze usage patterns and provide cost optimization recommendations for EC2 and RDS resources.
          - Recommendations could include resizing instances, adjusting database configurations, or suggesting reserved instances.
          <br />
          <br />
          Additional Information:
          - Participants are encouraged to consider scalability, data security, and user experience in their solution.
          - The solution can be web-based or platform-agnostic, depending on participants' preferences.
          <br />
          <br />
          <a href="#">Link to more information</a>
        </>,
      spImageUrl: Prism
    },
    3: {
      spHeader: "Monkhood",
      spContent:
        <>
          Real-time Database Update Notification in Android Application using Socket.IO with Local Server Database
          <br />
          <br />
          In this task, you are required to create an Android application using Kotlin, which maintains a real-time connection with a locally hosted MongoDB database. The application should display a list of names fetched from the database and update in real-time as names are added to or modified in the database.
          <br />
          <br />
          Requirements:
          * Develop an Android application in Kotlin.
          * The application should have a user interface displaying a list of names.
          * The list of names should update in real-time as changes occur in the connected MongoDB database.
          * Use MongoDB as the database for storing names.
          * The database should be hosted on a local server.
          * Implement Socket.IO to establish and maintain a real-time connection between the Android application and the MongoDB database.
          * Changes made to the database (addition or modification of names) should instantly reflect in the Android applications displayed list.
          * Design and implement an API that allows adding names to the MongoDB database. * Test adding names to the database using an API testing tool like Postman.
          <br />
          <br />
          Workflow:
          1. Set up a MongoDB database on a local server and populate it with an initial list of names.
          2. Develop an API that can add names to the MongoDB database.
          3. Develop an Android application in Kotlin.
          - The app should connect to the MongoDB database using Socket.IO.
          - Display the list of names from the database on the user interface.
          4. Test the real-time update feature.
          - Use Postman (or a similar tool) to send a request to the API to add a new name to the database. - Observe that the name is instantly added to the list in the Android applications user interface.
          <br />
          <br />
          Deliverables:
          * Source code for the Android application (written in Kotlin).
          * Source code for the API (any suidiv backend technology can be used).
          * Documentation including setup insdivuctions, API endpoints, and application usage guide.
          * A demonsdivation video or detailed screenshots showing the real-time update feature in action.
          <br />
          <br />
          Evaluation:
          - The Android application should successfully display and update the list of names in real-time.
          - The application and API code should be clean, well-commented, and follow best practices for software development.
          - The documentation should be clear and comprehensive, allowing anyone to set up and use the application and API.
          - Successful demonsdivation of the real-time update feature, showing that changes to the database instantly reflect in the Android applications UI.
          <br />
          <br />
          This task will help you gain practical knowledge in real-time application development, working with Socket.IO, Kotlin for Android development, MongoDB for database management, and API development and testing, all within a local server environment.
          <br />
          <br />
          Problem Statement Document:
          <a href="https://drive.google.com/file/d/1KvFKLt7iKoVOpHYTuUa1pMNbMfiBHAH8/view?usp=sharing" > CLICK HERE</a>
        </>
      ,
      spImageUrl: Monkhood
    },
    4: {
      spHeader: "Tezos",
      spContent: (
        <>
          Welcome to the Hack with MAIT 4.0 Sponsored Blockchain divack, proudly presented by Tezos! Get ready to unleash your creativity, innovation, and coding prowess as you dive into the exciting world of blockchain technology. With a total prize pool of $500, this is your chance to shine and make a lasting impact.
          <br />
          <br />
          divack Details:
          Company Sponsor: Tezos
          Total Prize Pool: $500
          <br />
          <br />
          Prizes:
          First Place: $150
          Second Place: $100
          Third Place: $50
          <br />
          <br />
          But that's not all! We appreciate your hard work and dedication. Even if you don't make it to the top 3, you can still win:
          Remaining Participants: Share a pool of $200 (maximum $40 per project)
          <br />
          <br />
          <a href="#">Link to more information</a>
        </>
      ),
      spImageUrl: Tezos
    },
  }
  return (
    <>
      <div className='radial-bg-2 w-[98vw] h-screen absolute'></div>

      <div class="relative shadow-md sm:rounded-lg ">
        {windowWidth < 800 ?
          (<div class="text-sm text-left text-gray-500 dark:text-gray-400">
            <div class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400  ">
              <div className='flex justify-between bg-gray-50 dark:bg-gray-800 '>
                <div scope="col" class="px-6 py-3 text-xl">
                  Track / Problem Statement / Sponsers
                </div>
                
              </div>
            </div>
            {
              Object.keys(spItems).map((id) => (
                <div class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 flex flex-col ">
                  <div class="px-6 py-4 font-medium text-gray-900 dark:text-white text-2xl ">
                    {spItems[id].spHeader}
                  </div>
                  <div className='flex flex-col'>
                    <div class="px-6 py-4 text-xl">
                      {spItems[id].spContent}
                    </div>
                  </div>
                  <div class="px-6 py-4 text-xl">
                    <img src={spItems[id].spImageUrl} className='w-40' />
                  </div>
                </div>
              ))
            }
          </div>) :
          (<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-5 max-md:my-0">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 max-md:invisible">
              <tr>
                <th scope="col" class="px-6 py-3 text-xl">
                  Track
                </th>
                <th scope="col" class="px-6 py-3 text-xl">
                  Problem Statement
                </th>
                <th scope="col" class="px-6 py-3 text-xl">
                  Sponsers
                </th>
              </tr>
            </thead>
            {
              Object.keys(spItems).map((id) => (
                <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 max-md:flex max-md:flex-col">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white text-2xl ">
                    {spItems[id].spHeader}
                  </th>
                  <td class="px-6 py-4 text-xl">
                    {spItems[id].spContent}
                  </td>
                  <td class="px-6 py-4 text-xl">
                    <img src={spItems[id].spImageUrl} />
                  </td>
                </tr>
              ))
            }
          </table>)}
      </div>

    </>
  )
}
export default spdiv