import React, { useContext } from 'react';
import { FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { IoSunnySharp } from "react-icons/io5";

const DarkLightTheme = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div 
      onClick={toggleTheme} 
      className={`theme-toggle fixed ${darkMode ? "bg-[#F1F3DF]":"bg-black"} flex justify-center items-center left-4 bottom-4 rounded-full p-2 cursor-pointer`}
    >
      <button className="theme-button cursor-pointer">
        {darkMode ? (
          <IoSunnySharp size={24} fill="none" stroke="#000" strokeWidth={20} />
        ) : (
          <FaMoon size={24} fill="none" stroke="#fff" strokeWidth={20} />
        )}
      </button>
    </div>
  );
};

export default DarkLightTheme;
