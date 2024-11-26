import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const DarkLightTheme = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme} className="theme-toggle fixed bg-black flex justify-center items-center left-4 bottom-4 rounded-full p-2 cursor-pointer">
      <button className="theme-button cursor-pointer">
        {darkMode ? <FaSun size={24} color="#FFD700" /> : <FaMoon size={24} color="#1E90FF" />}
      </button>
    </div>
  );
};

export default DarkLightTheme;
