import React, { useContext } from "react";
import { Data } from "../context/Data";
import { ThemeContext } from "../context/ThemeContext";

const Project = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center justify-center mt-44 px-5 sm:px-10">
      <div className="relative text-center">
        <h4
          className={`relative tracking-[5px] z-10 font-[first] ${
            darkMode ? "text-[#F1F3DF]" : "text-black"
          } text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
        >
          <span className="uppercase text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 right-3 relative font-[first]">
            my work
          </span>
        </h4>
        {/* Realistic Shadow Effect */}
        <h4 className="absolute top-3 tracking-[5px] font-[first] text-[#DDA15F] z-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="uppercase text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 font-[first]">
            my work
          </span>
        </h4>
      </div>

      <h4
        className={`font-[second] ${
          darkMode ? "text-[#F1F3DF]" : "text-black"
        } text-sm sm:text-base mt-5 mb-3 font-extrabold`}
      >
        my awesome work
      </h4>
      <p
        className={`text-sm sm:text-base font-[second] ${
          darkMode ? "text-[#F1F3DF]" : "text-gray-700"
        }`}
      >
        I make really cool stuff for people who want the best. If you
      </p>
      <p
        className={`text-sm sm:text-base font-[second] ${
          darkMode ? "text-[#F1F3DF]" : "text-gray-700"
        }`}
      >
        like great stuff and hard work, you're in the right spot!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 p-5 sm:p-10">
        {Data.map((item) => (
          <div
            key={item.id}
            className={`${
              darkMode ? "bg-[#0D0701]" : "bg-[#FEFAE0]"
            } rounded-md overflow-hidden shadow-md`}
          >
            <img
              src={item.image}
              alt={`${item.name} project`}
              className="w-full h-48 sm:h-64 lg:h-80 object-cover"
            />

            {/* Project Details */}
            <div className="p-5 font-[first]">
              <h1
                className={`text-lg sm:text-xl font-semibold ${
                  darkMode ? "text-[#F1F3DF]" : "text-black"
                }`}
              >
                {item.name}
              </h1>
              <h2
                className={`text-sm sm:text-base mt-2 ${
                  darkMode ? "text-[#F1F3DF]" : "text-gray-700"
                }`}
              >
                {item.description}
              </h2>

              <div className="flex flex-wrap gap-2 mt-4">
                {item.feature.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex relative mt-2 h-[34px] min-w-[100px] flex-1 items-center justify-center rounded-sm border ${
                      darkMode ? "border-[#F1F3DF]" : "border-black"
                    } px-3 text-xs sm:text-sm lg:flex-none`}
                  >
                    {feature}
                    <span className="bg-[#DDA15E] absolute top-0 left-0 w-[10%] h-[40%] rounded-br-full"></span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-5">
                <a
                  href={`${item.hosting}`}
                  className="bg-[#DDA15E] px-3 py-1 sm:py-2 text-xs sm:text-sm text-white cursor-pointer flex items-center justify-center rounded"
                >
                  go live
                </a>
                <a
                  href={`${item.code}`}
                  className="border-[#DDA15E] border-2 text-[#DDA15E] px-3 py-1 sm:py-2 text-xs sm:text-sm flex items-center justify-center cursor-pointer rounded"
                >
                  see code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
