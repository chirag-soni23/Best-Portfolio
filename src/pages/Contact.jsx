import React, { useContext } from 'react'
import { ThemeContext } from "../context/ThemeContext";
const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className='flex flex-col p-6 items-center justify-center mt-40'>
      <div className="relative text-center">
        {/* Foreground Text */}
        <h4 className={`relative tracking-[5px] z-10 font-[first] ${darkMode ? "text-[#F1F3DF]" : "text-black"} text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>
          <span className="uppercase relative right-2 text-pretty text-6xl sm:text-7xl md:text-8xl lg:text-8xl mt-2 font-[first]">
            contact
          </span>
        </h4>
        {/* Realistic Shadow Effect */}
        <h4 className="absolute top-3 tracking-[5px] font-[first] text-[#DDA15F] z-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="uppercase text-pretty text-6xl sm:text-7xl md:text-8xl lg:text-8xl mt-2 font-[first]">
            contact
          </span>
        </h4>
      </div>

      <h4 className='text-sm font-[first] font-bold mt-5'>let's have a chat!</h4>
      <p className={`text-sm font-[first] ${darkMode ? "text-[#F1F3DF]" : "text-gray-700"}`}>I'm currently open for new opportunities.</p>

      {/* Contact Form */}
      <form className="form space-y-10 mt-10 w-full max-w-md" id="contact-form">
        {/* Full Name */}
        <div className="inputBox relative">
          <input
            className={`inputText duration-300 transition-all w-full border-b border-gray-300 ${darkMode?"focus:border-[F1F3DF]":"focus:border-black"}  outline-none py-2 bg-transparent peer`}
            type="text"
            name="user_name"
            required
          />
          <span className={`absolute font-[first] left-0 ${darkMode ? "text-[#F1F3DF]" : "text-gray-500"} text-xs transition-all duration-300 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-20px] peer-focus:text-xs peer-focus:text-gray-500
          ${darkMode ? "peer-focus:text-[#F1F3DF]":"peer-focus:text-gray-500"}`}>
            FULL NAME
          </span>
        </div>

        {/* Email */}
        <div className="inputBox relative">
          <input
            className={`inputText duration-300 transition-all w-full border-b border-gray-300 ${darkMode?"focus:border-[F1F3DF]":"focus:border-black"}  outline-none py-2 bg-transparent peer`}
            type="email"
            name="user_email"
            required
          />
          <span className={`absolute font-[first] left-0 ${darkMode ? "text-[#F1F3DF]" : "text-gray-500"} text-xs transition-all duration-300 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-20px] peer-focus:text-xs peer-focus:text-gray-500
          ${darkMode ? "peer-focus:text-[#F1F3DF]":"peer-focus:text-gray-500"}`}>
            EMAIL
          </span>
        </div>

        {/* Message */}
        <div className="inputBox relative">
          <textarea
            className={`inputText duration-300 transition-all w-full border-b border-gray-300 ${darkMode?"focus:border-[F1F3DF]":"focus:border-black"}  outline-none py-2 bg-transparent peer`}
            name="user_message"
            required
          />
          <span className={`absolute font-[first] left-0 ${darkMode ? "text-[#F1F3DF]" : "text-gray-500"} text-xs transition-all duration-300 ease-in-out peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[-20px] peer-focus:text-xs peer-focus:text-gray-500
          ${darkMode ? "peer-focus:text-[#F1F3DF]":"peer-focus:text-gray-500"}`}>
            MESSAGE
          </span>
        </div>

        {/* Submit Button */}
        <div className='w-full flex items-center justify-center'>
        <input
          type="submit"
          className={`submitBox w-[20%] ${darkMode ? "bg-[#F1F3DF]" : "bg-black"} rounded-md ${darkMode ? "text-black" : "text-[#F1F3DF]"} py-2 cursor-pointer hover:bg-gray-700`}
          value="Send"
        />
        </div>
      </form>
    </div>
  )
}

export default Contact
