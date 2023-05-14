import React, { useState,useEffect } from 'react';
import Profile from '../assets/login.png';
import { useNavigate } from 'react-router-dom';


const About = () => {
  

  return (
    <>
  <div className="p-6 mt-20">
    <form method='GET'>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

        <div className=" mr-8 text-center md:text-left">
          <img src={Profile} alt='profileImage' className="w-32 h-32 rounded-full mx-auto md:mx-0 md:mr-6" />
          <input type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 md:mt-0' name='btnAddMore' value="Edit Profile" />
        </div>

        <div className="md:col-span-2">
          <div className="mb-4">
            <h5 className="text-xl font-bold">kanhaiya</h5>
            <h6 className="text-lg font-semibold">Web Developer</h6>
          </div>

          <ul className="flex border-b" role='tablist'>
            <li className="-mb-px mr-1">
              <a  className="bg-white inline-block py-2 px-4 font-semibold hover:text-blue-500">About</a>
            </li>
            
          </ul>

          <div className="p-4">
            <div id='myTabContent'>
              <div id='home' role='tabpanel' aria-labelledby='home-tab'>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">User ID</label>
                  <p>76786767867678</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Name</label>
                  <p>Kanhaiya Verma</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Contact</label>
                  <p>4736278443</p>
                </div>
              </div>
              <div id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Experience</label>
                  <p>experience data</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Education</label>
                  <p>Education Data</p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">Project</label>
                  <p>About Project</p>
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
