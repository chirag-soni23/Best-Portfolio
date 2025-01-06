import React, { useContext, useState } from 'react'
import { ThemeContext } from "../context/ThemeContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isLoading,setIsLoading] = useState(false);
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
  })

  function handleChange(e){
    const {name,value} = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }


  async function submitHandler(e){
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('/send-email', formData);
      toast.success(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message.');
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className='flex flex-col p-6 items-center justify-center mt-40'>
      <div className="relative text-center">
        {/* Foreground Text */}
        <h4 className={`relative tracking-[5px] z-10 font-[first] ${darkMode ? "text-[#F1F3DF]" : "text-black"} text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>
          <span className="uppercase relative right-2 text-pretty text-6xl sm:text-7xl md:text-8xl lg:text-8xl mt-2 font-[first]">
            contact
          </span>
        </h4>
        {/*  Shadow Effect */}
        <h4 className="absolute top-3 tracking-[5px] font-[first] text-[#dda05f83] z-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="uppercase text-pretty text-6xl sm:text-7xl md:text-8xl lg:text-8xl mt-2 font-[first]">
            contact
          </span>
        </h4>
      </div>

      <h4 className='text-sm font-[first] font-bold mt-5'>let's have a chat!</h4>
      <p className={`text-sm font-[first] ${darkMode ? "text-[#F1F3DF]" : "text-gray-700"}`}>I'm currently open for new opportunities.</p>

      {/* Contact Form */}
      <form onSubmit={submitHandler} className="form space-y-10 mt-10 w-full max-w-md" id="contact-form">
        {/* Name */}
        <div className="inputBox relative">
          <input value={formData.name} onChange={handleChange}
            className={`inputText duration-300 transition-all w-full border-b border-gray-300 ${darkMode?"focus:border-[F1F3DF]":"focus:border-black"}  outline-none py-2 bg-transparent peer `}
            type="text"
            name="name"
            required
          />
          <span className={`absolute font-[first] left-0 ${darkMode ? "text-[#F1F3DF]" : "text-gray-500"} text-xs transition-all duration-300 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base -mt-3 peer-placeholder-shown:text-gray-400 peer-focus:top-[-20px] peer-focus:text-xspeer-focus:text-gray-500
          ${darkMode ? "peer-focus:text-[#F1F3DF]":"peer-focus:text-gray-500"}`}>
            FULL NAME
          </span>
        </div>

        {/* Email */}
        <div className="emailBox relative">
          <input value={formData.email} onChange={handleChange}
            className={`inputText duration-300 transition-all w-full border-b border-gray-300 ${darkMode?"focus:border-[F1F3DF]":"focus:border-black"}  outline-none py-2 bg-transparent peer`}
            type="email"
            name="email"
            required
          />
          <span className={`absolute font-[first] left-0 ${darkMode ? "text-[#F1F3DF]" : "text-gray-500"} text-xs transition-all duration-300 ease-in-out peer-placeholder-shown:top-2 -mt-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-20px] peer-focus:text-xs peer-focus:text-gray-500
          ${darkMode ? "peer-focus:text-[#F1F3DF]":"peer-focus:text-gray-500"}`}>
            EMAIL
          </span>
        </div>

        {/* Message */}
        <div className="messageBox top-5 relative">
          <textarea
          value={formData.message} onChange={handleChange}
            className={`inputText duration-300 transition-all w-full border-b border-gray-300 ${darkMode?"focus:border-[F1F3DF]":"focus:border-black"}  outline-none py-2 bg-transparent peer`}
            name="message"
            required
          />
          <span className={`absolute font-[first] left-0 ${darkMode ? "text-[#F1F3DF]" : "text-gray-500"} text-xs transition-all duration-300 ease-in-out -mt-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-20px] peer-focus:text-xs peer-focus:text-gray-500
          ${darkMode ? "peer-focus:text-[#F1F3DF]":"peer-focus:text-gray-500"}`}>
            MESSAGE
          </span>
        </div>

        {/* Submit Button */}
        <div className='w-full flex items-center justify-center'>
        <input disabled={isLoading}
          type="submit"
          className={`submitBox w-[20%] ${darkMode ? "bg-[#F1F3DF]" : "bg-black"} rounded-md ${darkMode ? "text-black" : "text-[#F1F3DF]"} py-2 cursor-pointer hover:bg-gray-700`}
          value={`${isLoading ? "Sending....":"Send"}`}
        />
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  )
}

export default Contact
