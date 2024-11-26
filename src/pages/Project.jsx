import React, { useContext } from "react";
import { Data } from "../context/Data";
import { ThemeContext } from "../context/ThemeContext";
const Project = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      {/* Section Header */}
      <div className="relative text-center">
        {/* Foreground Text */}
        <h4 className={`relative tracking-[5px] z-10 font-[first] ${darkMode ? "text-[#F1F3DF]" : "text-black"} text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>
          <span className="uppercase text-pretty text-6xl sm:text-7xl md:text-8xl lg:text-8xl mt-2 right-3 relative font-[first]">
            my work
          </span>
        </h4>
        {/* Realistic Shadow Effect */}
        <h4 className="absolute top-3 tracking-[5px] font-[first] text-[#DDA15F] z-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="uppercase text-pretty text-6xl sm:text-7xl md:text-8xl lg:text-8xl mt-2 font-[first]">
            my work
          </span>
        </h4>
      </div>

      {/* Subheading */}
      <h4 className={`font-[second] ${darkMode ? "text-[#F1F3DF]" : "text-black"} text-sm mt-5 mb-3 text-extrabold`}>
        my awesome work
      </h4>
      <p className={`text-sm font-[second] ${darkMode ? "text-[#F1F3DF]" : "text-gray-700"}`}>
        I make really cool stuff for people who want the best. If you
      </p>
      <p className={`text-sm font-[second] ${darkMode ? "text-[#F1F3DF]" : "text-gray-700"}`}>
        like great stuff and hard work, you're in the right spot!
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 p-24">
        {Data.map((item) => (
          <div
            key={item.id}
            className={`${darkMode?"bg-[#0D0701]":"bg-[FEFAE0]"} rounded-md overflow-hidden`}
          >
            {/* Project Image */}
            <img
              src={item.image}
              alt={`${item.name} project`}
              className="w-full h-80 object-cover"
            />

            {/* Project Details */}
            <div className="p-5 font-[first]">
              <h1 className={`text-xl font-[first] font-semibold ${darkMode ? "text-[#F1F3DF]" : "text-black"}`}>{item.name}</h1>
              <h2 className={`text-sm font-[first] ${darkMode ? "text-[#F1F3DF]" : "text-gray-700"} mt-2`}>{item.description}</h2>

              {/* Features List */}
              <div className="flex flex-wrap gap-2 mt-4">

                {item.feature.map((feature, index) => (
                 <div className={`flex relative mt-5 h-[34px] min-w-[118px] flex-1 items-center justify-center rounded-sm border ${darkMode ? "border-[#F1F3DF]" : "border-black"} px-5 text-small lg:flex-none`}>
          {feature}
          <span className='bg-[#DDA15E] absolute top-0 left-0 w-[10%] h-[40%] rounded-br-full'></span>
        </div>
                ))}
              </div>
                <div className="flex gap-2 mt-5">
                    <span className="bg-[#DDA15E] px-2 text-white cursor-pointer flex items-center justify-center">go live</span>
                    <span className="border-[#DDA15E] border-2 text-[#DDA15E] px-2 flex items-center justify-center  cursor-pointer">see code</span>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
