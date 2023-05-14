import React,{useState} from 'react'; 

import {MdAccountCircle} from 'react-icons/md';
import {MdEmail} from 'react-icons/md';
import {FiSmartphone} from 'react-icons/fi';
import {RiLockPasswordLine} from 'react-icons/ri';
import {MdOutlineMapsHomeWork} from 'react-icons/md';
import Navbar from '../Navbar/Navbar';
// import loginLogo from '../assets/login.png';

const Contact = () => {

  const [contact, setContact] = useState({
    name:"",email:"",phone:"",address:"",message:""
  });
  let name,value;

  const handleContactInputs=(e)=>{
    // console.log(e);
    name=e.target.name;
    value=e.target.value;

    setContact({...contact,[name]:value});
  }
  const PostContact = async(e)=>{
    e.preventDefault();
    const {name , email ,phone,address,message} =contact;
    const res = await fetch("http://localhost:8080/contacts",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,address,message
    })
  })
  const data = await res.json();
  if( res.status===422 || !data){
    window.alert("fill form properly!");
    console.log("ifill form properly!");
  }else{
    window.alert("Form submitted Successfull");
    console.log("Form submitted Successfull");
 }}


  return (
    <>
    <Navbar />
     <div className="  pt-20 flex flex-col space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
      <FiSmartphone/>
        <h2 className="text-lg font-semibold mb-2">Phone</h2>
        <p className="text-gray-700">(123) 456-7890</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
      <MdEmail/>
        <h2 className="text-lg font-semibold mb-2">Email</h2>
        <p className="text-gray-700">example@gmail.com</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <MdOutlineMapsHomeWork/>
        <h2 className="text-lg font-semibold mb-2">Address</h2>
        <p className="text-gray-700">Your Address</p>
      </div>
      
      
    </div>
    

    {/* /-------------------contact start-------------- */}
    <section className="flex justify-center items-center h-screen">
  <div className="bg-white rounded-lg shadow-lg p-8">
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
    </div>
    <form id='contact-form' method='POST'>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          <MdAccountCircle className="inline"/>
          Name
        </label>
        
        <input  value={contact.name} onChange={handleContactInputs} type="text" id="name" 
        name="name" 
        placeholder="Name" 
        required
        autoComplete='off' 
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          <MdEmail className="inline"/>
          Email
        </label>
        
        <input value={contact.email}  onChange={handleContactInputs} required type="email" id="email" name="email" placeholder="Email" autoComplete='off' className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          <FiSmartphone className="inline"/>
          Phone
        </label>

        <input value={contact.phone} required onChange={handleContactInputs} type="number" id="phone" name="phone" placeholder="Phone" autoComplete='off' className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
          <RiLockPasswordLine className="inline"/>
          Address
        </label>
        <input required value={contact.address} onChange={handleContactInputs} type="text" id="address" name="address" placeholder="address"  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          <RiLockPasswordLine className="inline"/>
          Message
        </label>
        <textarea value={contact.message} onChange={handleContactInputs} rows={5} cols={5} type="text" id="message" name="message" placeholder="type your message" autoComplete='off' className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div className="text-center">
        <input type='submit' onClick={PostContact} name='contact' id='contact' value='Send' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
      </div>
    </form>
    </div>
    
    
</section>
    </>
  )
}

export default Contact
