import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate("/project");
  };

  return (
    <div className="w-full h-full mt-16 mb-16 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Heading */}
      <div className="relative text-center">
        <h4
          className={`relative tracking-[5px] z-10 right-3 font-[first] ${
            darkMode ? "text-[#F1F3DF]" : "text-black"
          } text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase`}
        >
          who am i
        </h4>
        <h4 className="absolute top-3 tracking-[5px] font-[first] text-[#dda05f83] z-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase">
          who am i
        </h4>
      </div>

      {/* Paragraph */}
      <p
        className={`font-[second] text-sm sm:text-base md:text-lg lg:text-xl text-center mt-10 ${
          darkMode ? "text-[#F1F3DF]" : "text-gray-700"
        } max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[100%] tracking-widest`}
      >
        Hello, I'm Chirag, a web designer, React front-end developer, and content creator. 
        I specialize in creating stunning landing pages, websites, and dynamic front-end 
        applications for businesses worldwide. If you're looking for a modern and impactful 
        website, feel free to email me. If we are a good fit, I'll provide a time and cost 
        estimate for your project.
      </p>

      {/* Button */}
      <div className="relative mt-10 flex items-center">
        <div
          className={`text-[#DDA15F] ${
            darkMode ? "bg-[#F1F3DF]" : "bg-black"
          } p-2`}
        >
          <h2 className="font-[second]">see my work</h2>
        </div>
        <div
          className={`border-2 absolute w-full h-full top-2 left-2 ${
            darkMode ? "border-[#F1F3DF]" : "border-black"
          } -z-10 p-2`}
        ></div>
        <div
          className={`w-8 absolute left-36 h-8 flex items-center justify-center rounded-full border-2 ${
            darkMode ? "border-[#F1F3DF]" : "border-black"
          }`}
        >
          <button
            onClick={handleLinkClick}
            className="text-[#DDA15F] flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
