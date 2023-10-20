import React, { useState } from 'react';
import Afree from '../assets/Sponsors/AfreeBug.jpeg';
import Prism from '../assets/Sponsors/Prism.png';
import Tezos from '../assets/Sponsors/Tezos.png';
import Monkhood from '../assets/Sponsors/Monkhood.jpeg';

const SponsorTrack = ({ title, image, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div className="flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <img src={image} alt={title} className="w-10 h-10 rounded-full" />
        <h3 className="ml-2 font-mono text-xl text-white">{title}</h3>
        <button className="ml-auto text-white">
          {isOpen ? '▲' : '▼'}
        </button>
      </div>
      {isOpen && (
        <div className="p-4 rounded text-white text-lg">
           {content.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const SponsorTracks = () => {
  return (
    <div>
      <br />
      <h1 className='text-white text-left font-semibold text-2xl border-2 p-2 border-white shadow-white shadow w-fit m-auto'> Sponsor Tracks</h1>
      <br />
            <div className='w-[85%] rounded border p-4 m-auto'>
                <SponsorTrack
                    title="AFREEBUG"
                    image={Afree}
                    content={`AIM:
                    
                    The objective of this project is to develop a robust and efficient mobile application for mining Monero (XMR) cryptocurrency using Android smartphones. Monero is a privacy-focused cryptocurrency that employs the CryptoNight proof-of-work algorithm, making it suitable for CPU mining. This project aims to address the following challenges and requirements: 
                    NOTE: This problem statement's solution has to be developed using technologies mentioned in the problem statement provided below.
                    

                    PROBLEM STATEMENT:
                    https://docs.google.com/document/d/1qo4G6sRPL0SQ2PIDpVYTx1SowAM-3aDXYdwLvKeVKAk/edit?usp=sharing
                    

                    Customising XMRig Source Code Document:
                    https://drive.google.com/file/d/1E6Zuu5nQiMgdsVu8qbuiVt2xqJXMqtoh/view?usp=sharing
                    

                    PRIZE: Rs.50,000`}
                />
                <SponsorTrack
                    title="Monkhood"
                    image={Monkhood}
                    content={`Real-time Database Update Notification in Android Application using Socket.IO with Local Server Database

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
                    https://drive.google.com/file/d/1KvFKLt7iKoVOpHYTuUa1pMNbMfiBHAH8/view?usp=sharing`}
                />
                <SponsorTrack
                    title="Prismberry"
                    image={Prism}
                    content={`The problem statement revolves around cloud cost visualization and optimization, specifically focusing on Amazon Web Services (AWS) Elastic Compute Cloud (EC2) and Relational Database Service (RDS). Here's a detailed problem statement:

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
                        - The solution can be web-based or platform-agnostic, depending on participants' preferences.`}
                />
                <SponsorTrack
                    title="Tezos India"
                    image={Tezos}
                    content={`Welcome to the Hack with MAIT 4.0 Sponsored Blockchain Track, proudly presented by Tezos! Get ready to unleash your creativity, innovation, and coding prowess as you dive into the exciting world of blockchain technology. With a total prize pool of $500, this is your chance to shine and make a lasting impact.

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
                    Tezos is a powerful, self-amending blockchain platform that allows you to build decentralized applications (DApps) and smart contracts with ease. Its unique governance mechanism and focus on security make it an ideal choice for blockchain enthusiasts and developers looking to create innovative solutions`}
                />
            </div>
        </div>
    );
};

export default SponsorTracks;
