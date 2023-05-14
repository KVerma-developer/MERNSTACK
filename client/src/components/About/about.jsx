import React from 'react';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {BsPersonWorkspace,BsBook} from 'react-icons/bs';
import {IoMdContact} from 'react-icons/io';
import {MdPermIdentity,MdOutlineContactPage} from 'react-icons/md';
import Profie from '../../assets/dummy picture.jpg';
import Navbar from '../Navbar/Navbar';
import {FcAbout} from 'react-icons/fc'




const About = () => {
  

  return (
    <>
    <Navbar />
<div className="p-6 mt-24">
  <form method="GET">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

      <div className="mr-8 text-center md:text-left">
        <img src={Profie} alt="profileImage" className="w-32 h-32 rounded-full mx-auto md:mx-0 md:mr-6" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 md:mt-0" name="btnAddMore">
          Edit Profile
        </button>
      </div>

      <div className="md:col-span-2">
        <div className="mb-4">
          <h5 className="text-xl font-bold">Kanhaiya Verma </h5>
          <h6 className="text-lg font-semibold">MERN stack Developer</h6>
        </div>

        
          <h1 className="bg-white inline-block py-2 px-4  font-semibold hover:text-blue-500">
            <a href="https://www.linkedin.com/in/kanhaiya-verma-03ba93250/" target="_blank" >
            <div className="flex items-center">
  <FcAbout size={24} />
  <h1 className="text-xl text-blue-700 ml-2">About</h1>
</div>


            </a>
            </h1>
          
        

        <div className="p-4">
  <div id="myTabContent" className="flex flex-col lg:flex-row">
    <div id="home" role="tabpanel" aria-labelledby="home-tab" className="flex-1 lg:pr-8">
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">
          <IoMdContact className="inline-block mr-2 text-gray-500" />
          User ID
        </h2>
        <p className="text-gray-700">76786767867678</p>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">
          <MdPermIdentity className="inline-block mr-2 text-gray-500" />
          Name
        </h2>
        <p className="text-gray-700">Kanhaiya Verma</p>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">
          <MdOutlineContactPage className="inline-block mr-2 text-gray-500" />
          Contact:
        </h2>
        <p className="text-gray-700">4736278443</p>
      </div>
    </div>
    <div id="profile" role="tabpanel" aria-labelledby="profile-tab" className="flex-1 lg:pl-8">
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">
          <BsPersonWorkspace className="inline-block mr-2 text-gray-500" />
          Experience:
        </h2>
        <p className="text-gray-700">Experience</p>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">
          <BsBook className="inline-block mr-2 text-gray-500" />
          Education:
        </h2>
        <p className="text-gray-700">Education</p>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">
          <AiOutlineFundProjectionScreen className="inline-block mr-2 text-gray-500" />
          Project:
        </h2>
        <ul className="list-disc list-inside">
          <li className="text-blue-500">
            <a href="https://github.com/KVerma-developer/LINKEDIN" className="cursor-pointer">
              LinkedIn Project
            </a>
          </li>
          <li className="text-blue-500">
            <a href='https://github.com/KVerma-developer/YouTube2.0'>Youtube 2.0</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


        </div>

      </div>
    </form>
  </div>
</>

  )
}

export default About
