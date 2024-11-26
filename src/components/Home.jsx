import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
    const {darkMode} = useContext(ThemeContext);
    const texts = ["MERN Stack Developer","Frontend Developer","Javascript Expert"];
    const [currentText,setCurrentText] = useState(texts[0]);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentText((prevText)=>{
                const currentIndex = texts.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % texts.length;
                return texts[nextIndex];
            })
        },3000);
        return () => clearInterval(interval);
    },[])
    return (
        <div className="w-full relative h-[100vh] flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
            {/* Main Heading with Shadows */}
            <div className="relative text-center">
                {/* Foreground Text */}
                <h4 className="relative tracking-[5px] z-10 right-3 font-[first] text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    <h4 className={`uppercase text-pretty text-6xl sm:text-7xl md:text-8xl ${darkMode ? "text-[#F1F3DF]" : "text-black"} lg:text-8xl mt-2 font-[first]`}>hey, i'm</h4>
                    <h4 className={`uppercase text-pretty text-6xl sm:text-7xl md:text-8xl ${darkMode ? "text-[#F1F3DF]" : "text-black"} lg:text-8xl mt-2 font-[first]`}>chirag</h4>
                </h4>
                {/* Realistic Shadow Effect */}
                <h4 className={`absolute top-3 tracking-[5px] font-[first] text-[#DDA15F] z-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>
                    <h4 className={`uppercase text-pretty text-6xl sm:text-7xl md:text-8xl lg:text-8xl mt-2 font-[first]`}>hey, i'm</h4>
                    <h4 className={`uppercase text-pretty text-6xl sm:text-7xl md:text-8xl lg:text-8xl mt-2 font-[first]`}>chirag</h4>
                </h4>
            </div>

            {/* Scroll Indicator */}
            <div className={`absolute bottom-14 right-14 rotate-90 tracking-[10px] font-[first] flex flex-col uppercase ${darkMode ? "text-[#F1F3DF]":"text-gray-600"} text-sm sm:text-base md:text-lg`}>
                <h4>scroll</h4>
                <span className={`w-full ${darkMode ? "bg-[#F1F3DF]":"bg-black"} h-[1px] animate-lineMove`}></span>
            </div>

            {/* Subtitle */}
            <div className="mt-4 w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%]">
                <p className={`text-sm tracking-[5px] uppercase lg:text-base text-center ${darkMode ? "text-[#F1F3DF]":"text-gray-700"}`}>
                    {currentText}
                </p>
                <div className={`w-full ${darkMode ? "bg-[#F1F3DF]":"bg-black"} animate-textLine relative bottom-6 h-full`}></div>
            </div>
        </div>
    );
};

export default Home;
