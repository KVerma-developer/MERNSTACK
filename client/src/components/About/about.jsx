import React from 'react';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {BsPersonWorkspace,BsBook} from 'react-icons/bs';
import {IoMdContact} from 'react-icons/io';
import {MdPermIdentity,MdOutlineContactPage} from 'react-icons/md';
import Profie from '../../assets/dummy picture.jpg';
import Navbar from '../Navbar/Navbar';




const About = () => {
  

  return (
    <>
    <Navbar/>
  <div className="p-6 mt-24">
    <form method='GET'>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

        <div className=" mr-8 text-center md:text-left">
          <img src={Profie} alt='profileImage' className="w-32 h-32 rounded-full mx-auto md:mx-0 md:mr-6" />
          <input type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 md:mt-0' name='btnAddMore' value="Edit Profile" />
        </div>

        <div className="md:col-span-2">
          <div className="mb-4">
            <h5 className="text-xl font-bold">kanhaiya</h5>
            <h6 className="text-lg font-semibold">Web Developer</h6>
          </div>

          <ul className="flex border-b" role='tablist'>
            <li className="-mb-px mr-1">
              <a href='https://www.linkedin.com/in/kanhaiya-verma-03ba93250/' target='_blank' className="bg-white inline-block py-2 px-4 font-semibold hover:text-blue-500">About</a>
            </li>
            
          </ul>

          <div className="p-4">
            <div id='myTabContent'>
              <div id='home' role='tabpanel' aria-labelledby='home-tab'>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2"><IoMdContact/>User ID</label>
                  <p>76786767867678</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2"><MdPermIdentity/>Name</label>
                  <p>Kanhaiya Verma</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2"><MdOutlineContactPage/>Contact :-</label>
                  <p>4736278443</p>
                </div>
              </div>
              <div id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2"><BsPersonWorkspace/>Experience :-</label>
                  <p>Experience </p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2"><BsBook/>Education :-</label>
                  <p>Education </p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2"><AiOutlineFundProjectionScreen/>Project:-</label>
                  <a href='https://github.com/KVerma-developer/LINKEDIN' className='cursor-pointer'>LinkedIn Project</a><br/>
                  <a href='https://github.com/KVerma-developer/YouTube2.0'>Youtube 2.0</a>
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
