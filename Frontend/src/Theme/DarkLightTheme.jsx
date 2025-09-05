import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const DarkLightTheme = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className={`theme-toggle fixed ${
        darkMode ? "bg-[#F1F3DF]" : "bg-black"
      } flex justify-center items-center left-4 bottom-4 rounded-full p-2 cursor-pointer`}
    >
      <button className="theme-button cursor-pointer">
        {darkMode ? (
          <Sun className="w-6 h-6 text-black" />
        ) : (
          <Moon className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default DarkLightTheme;
