import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
import Afree from '../assets/Sponsors/AfreeBug.jpeg'
import Prism from '../assets/Sponsors/Prism.png'
import Tezos from '../assets/Sponsors/Tezos.png'
import Monkhood from '../assets/Sponsors/Monkhood.jpeg'

const SponsorTracksNA = () => {
    const [selectedSpId, setSelectedSpId] = useState(null);
    const spItems = {
        1: {
            spHeader: "AFreeBug",
            spContent: `AIM: 
            The objective of this project is to develop a robust and efficient mobile application for mining Monero (XMR) cryptocurrency using Android smartphones. Monero is a privacy-focused cryptocurrency that employs the CryptoNight proof-of-work algorithm, making it suitable for CPU mining. This project aims to address the following challenges and requirements: 
            
            NOTE: This problem statement's solution has to be developed using technologies mentioned in the problem statement provided below.
            
            PROBLEM STATEMENT:
            https://docs.google.com/document/d/1qo4G6sRPL0SQ2PIDpVYTx1SowAM-3aDXYdwLvKeVKAk/edit?usp=sharing
            
            Customising XMRig Source Code Document:
            https://drive.google.com/file/d/1E6Zuu5nQiMgdsVu8qbuiVt2xqJXMqtoh/view?usp=sharing
            
            PRIZE: Rs.50,000`,
            spImageUrl: Afree
        },
        2: {
            spHeader: "Prismberry",
            spContent: `The problem statement revolves around cloud cost visualization and optimization, specifically focusing on Amazon Web Services (AWS) Elastic Compute Cloud (EC2) and Relational Database Service (RDS). Here's a detailed problem statement:

            Problem Statement: OptiCloud - AWS Cost Optimization
            
            Description:
                    OptiCloud is a cloud cost optimization tool designed to help organizations monitor and manage their AWS spending efficiently. The challenge is to develop a solution that visualizes costs for each EC2 instance and RDS database, provides cost recommendations using AI/ML algorithms, and implements cost attribution and tagging.
            
            Key Tasks:
            1. Cost Visualization:
               - Create a user-friendly dashboard to display real-time and historical cost data for EC2 instances and RDS databases.
               - Use charts and graphs to illustrate cost trends and variations.
            
            2. Cost Attribution and Tagging:
               - Implement a system for tagging EC2 instances and RDS databases with metadata, allowing users to attribute costs accurately to departments or projects.
            
            3. AI/ML Cost Optimization:
               - Develop AI/ML algorithms that analyze usage patterns and provide cost optimization recommendations for EC2 and RDS resources.
               - Recommendations could include resizing instances, adjusting database configurations, or suggesting reserved instances.
            
            Additional Information:
                - Participants are encouraged to consider scalability, data security, and user experience in their solution.
                - The solution can be web-based or platform-agnostic, depending on participants' preferences.`,
            spImageUrl: Prism
        },
        3: {
            spHeader: "Monkhood",
            spContent: `Real-time Database Update Notification in Android Application using Socket.IO with Local Server Database

            In this task, you are required to create an Android application using Kotlin, which maintains a real-time connection with a locally hosted MongoDB database. The application should display a list of names fetched from the database and update in real-time as names are added to or modified in the database.
            
            Requirements:
            * Develop an Android application in Kotlin.
            * The application should have a user interface displaying a list of names.
            * The list of names should update in real-time as changes occur in the connected MongoDB database.
            * Use MongoDB as the database for storing names.
            * The database should be hosted on a local server.
            * Implement Socket.IO to establish and maintain a real-time connection between the Android application and the MongoDB database.
            * Changes made to the database (addition or modification of names) should instantly reflect in the Android
            applications displayed list.
            * Design and implement an API that allows adding names to the MongoDB database. * Test adding names to the database using an API testing tool like Postman.
            
            Workflow:
            1. Set up a MongoDB database on a local server and populate it with an initial list of names. 2. Develop an API that can add names to the MongoDB database.
            3. Develop an Android application in Kotlin.
            - The app should connect to the MongoDB database using Socket.IO.
            - Display the list of names from the database on the user interface. 4. Test the real-time update feature.
            - Use Postman (or a similar tool) to send a request to the API to add a new name to the database. - Observe that the name is instantly added to the list in the Android applications user interface.
            
            Deliverables:
            * Source code for the Android application (written in Kotlin).
            * Source code for the API (any suitable backend technology can be used).
            * Documentation including setup instructions, API endpoints, and application usage guide.
            * A demonstration video or detailed screenshots showing the real-time update feature in action.
            Evaluation:
            - The Android application should successfully display and update the list of names in real-time.
            - The application and API code should be clean, well-commented, and follow best practices for software development.
            - The documentation should be clear and comprehensive, allowing anyone to set up and use the application and API.
            - Successful demonstration of the real-time update feature, showing that changes to the database instantly reflect in the Android applications UI.
            
            This task will help you gain practical knowledge in real-time application development, working with Socket.IO, Kotlin for Android development, MongoDB for database management, and API development and testing, all within a local server environment.
            
            Problem Statement Document:
            https://drive.google.com/file/d/1KvFKLt7iKoVOpHYTuUa1pMNbMfiBHAH8/view?usp=sharing`,
            spImageUrl: Monkhood
        },
        4: {
            spHeader: "Tezos",
            spContent: `Welcome to the Hack with MAIT 4.0 Sponsored Blockchain Track, proudly presented by Tezos! Get ready to unleash your creativity, innovation, and coding prowess as you dive into the exciting world of blockchain technology. With a total prize pool of $500, this is your chance to shine and make a lasting impact.

            Track Details:
            Company Sponsor: Tezos
            Total Prize Pool: $500
            
            Prizes:
            First Place: $150
            Second Place: $100
            Third Place: $50
            
            But that's not all! We appreciate your hard work and dedication. Even if you don't make it to the top 3, you can still win:
            Remaining Participants: Share a pool of $200 (maximum $40 per project)
            
            NOTE: The projects will be judged on the basis of idea, uniqueness, implementation, presentation, demo.
            
            Project Requirements:
            Your project must be developed using the Tezos platform. Tezos is a cutting-edge blockchain platform known for its innovation and flexibility, so let your imagination run wild!
            The ideas and implementations should be unique and shall not be copy of any already existing project available online for becoming eligible for the Track Prizes.
            
            Why Tezos?
            Tezos is a powerful, self-amending blockchain platform that allows you to build decentralized applications (DApps) and smart contracts with ease. Its unique governance mechanism and focus on security make it an ideal choice for blockchain enthusiasts and developers looking to create innovative solutions`,
            spImageUrl: Tezos
        },
    }
    function ToggleContent({ spHeader, id }) {
        return (
            <motion.div
                layout
                layoutId={id}
                onClick={() => setSelectedSpId(id)}
                className='flex z-10 flex-col justify-center items-center w-[40%] h-32 sm:w-[28vw] sm:h-[35vh] m-2 bg-white rounded-lg shadow-lg cursor-pointer'
            >
                <motion.img src={spItems[id].spImageUrl} className='w-full h-full object-fit rounded-lg hover:blur-md transition-all' alt='Tracks' />
                <motion.h2 className='bg-white drop-shadow-sm p-2 rounded-md absolute font-bold  text-xs sm:text-xl' layout>{spHeader}</motion.h2>
            </motion.div>
        )
    }
    return (
        <div className='flex flex-col Tracks items-center min-h-screen '>
            <br />
            <br />
                <h1 className='text-white text-left font-semibold text-2xl border-2 p-2 border-white shadow-white shadow'> Sponsor Tracks</h1>
            <div className='radial-bg-2 w-[98vw] h-screen absolute'></div>
            <div className={`flex flex-1 items-center justify-center flex-wrap mt-4 ` + (selectedSpId && ' blur-lg')}>
                {
                    Object.keys(spItems).map((id) => (
                        <ToggleContent
                            key={id}
                            id={id}
                            spHeader={spItems[id].spHeader}
                        />
                    ))
                }
            </div>
            <AnimatePresence>
                {selectedSpId && (

                    <motion.div className='bg-[#1e1e1e] text-white rounded-md drop-shadow-md border border-blue-800 p-4 absolute sm:mt-64 mt-32 w-[90vw] sm:w-[45vw] sm:min-h-[35vh]' layoutId={selectedSpId}>
                        <div className='flex items-center justify-between my-4 px-4'>
                            <motion.h1 className='font-bold text-2xl'>{spItems[selectedSpId].spHeader}</motion.h1>
                            <motion.button className='flex items-end' onClick={() => setSelectedSpId(null)}>
                                <AiOutlineCloseCircle size={22} />
                            </motion.button>
                        </div>
                        <div className='flex items-center justify-between'>
                            <motion.p className='text-lg m-1'>{spItems[selectedSpId].spContent}</motion.p>
                            <motion.img src={spItems[selectedSpId].spImageUrl} className='w-32 h-32 border object-cover rounded-lg' alt='Tracks' />
                        </div>
                    </motion.div>


                )}
            </AnimatePresence>


        </div>
    )
}

export default SponsorTracksNA