import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Expertise } from '../context/Data';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import resume from '../assets/Resume.pdf'
const Skills = () => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className="w-full h-full mt-20 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="relative text-center">
        {/* Foreground Text */}
        <h4 className={`relative tracking-[5px] z-10 right-3 font-[first] ${darkMode ? "text-[#F1F3DF]" : "text-black"} text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>
          <h4 className="uppercase text-pretty text-6xl sm:text-7xl md:text-8xl lg:text-8xl mt-2 font-[first]">what i do</h4>
        </h4>
        {/* Shadow Effect */}
        <h4 className="absolute top-3 tracking-[5px] font-[first] text-[#DDA15F] z-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <h4 className="uppercase text-pretty text-6xl sm:text-7xl md:text-8xl lg:text-8xl mt-2 font-[first]">what i do</h4>
        </h4>
      </div>

      <div className="relative text-center mt-5">
        {/* Foreground Text */}
        <h4 className={`relative tracking-[5px] z-10 right-3 font-[first] ${darkMode ? "text-[#F1F3DF]" : "text-black"} text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>
          <h4 className="text-pretty sm:text-7xl md:text-8xl lg:text-2xl mt-2 font-[first]">Web Design</h4>
        </h4>
        {/* Shadow Effect */}
        <span className="absolute bottom-2 right-4 tracking-[5px] font-[first] bg-[#DDA15F] w-full h-[15%] text-center z-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"></span>
      </div>

      <p className={`font-[second] text-sm sm:text-base md:text-lg lg:text-xl text-center ${darkMode ? "text-[#F1F3DF]" : "text-gray-700"} mt-10 max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[100%] tracking-widest`}>
        I design beautiful and powerful websites for modern businesses. Any business today needs a website that wins customers’ trust and helps you do your business well. I make sure your website is up to that standard.
      </p>

      <div className={`flex relative mt-5 h-[34px] min-w-[118px] flex-1 items-center justify-center rounded-sm border ${darkMode ? "border-[#F1F3DF]" : "border-black"} px-5 text-small lg:flex-none`}>
        Figma
        <span className='bg-[#DDA15E] absolute top-0 left-0 w-[10%] h-[40%] rounded-br-full'></span>
      </div>

      <div className="relative text-center mt-5">
        {/* Foreground Text */}
        <h4 className={`relative tracking-[5px] z-10 right-3 font-[first] ${darkMode ? "text-[#F1F3DF]" : "text-black"}text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>
          <h4 className="text-pretty sm:text-7xl md:text-8xl lg:text-2xl mt-2 font-[first]">Full-Stack Development</h4>
        </h4>
        {/*  Shadow Effect */}
        <span className="absolute bottom-2 right-4 tracking-[5px] font-[first] bg-[#DDA15F] w-full h-[15%] text-center z-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"></span>
      </div>

      <p className={`font-[second] text-sm sm:text-base md:text-lg lg:text-xl text-center ${darkMode ? "text-[#F1F3DF]" : "text-gray-700"} mt-10 max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[100%] tracking-widest`}>
      I am a skilled Full Stack Developer with expertise in both frontend and backend technologies. Proficient in the MERN stack (MongoDB, Express, React, Node.js), I specialize in building scalable, responsive web applications. I have experience with RESTful APIs, user authentication, and third-party integrations. Passionate about creating efficient and user-friendly digital experiences.
      </p>

      {/* Skills Section */}
      <div className='flex flex-wrap items-center justify-center gap-4 mt-10'>
        {Expertise.map((expert, index) => {
          return <div key={index} className={`flex relative mt-5 h-[34px] min-w-[118px] flex-1 items-center justify-center rounded-sm border ${darkMode ? "border-[#F1F3DF]" : "border-black"} px-5 text-small lg:flex-none`}>
            {expert.name}
            <span className='bg-[#DDA15E] absolute top-0 left-0 w-[10%] h-[40%] rounded-br-full'></span>
          </div>
        })}


      </div>
        {/* resume */}
        <div className='mt-20 flex gap-3 items-center justify-center w-full'>
          <FaArrowRight className='animate-bounce'/>
        <a href={resume} download='Resume.pdf' className={`flex relative h-[34px] min-w-[118px] flex-1 items-center cursor-pointer justify-center rounded-sm border ${darkMode ? "border-[#F1F3DF]" : "border-black"} px-5 text-small lg:flex-none`} >
          Resume
        </a>
        <FaArrowLeft className='animate-bounce'/>
        </div>
    </div>
  );
};

export default Skills;
