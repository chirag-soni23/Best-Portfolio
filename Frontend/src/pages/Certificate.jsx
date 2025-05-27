import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { certificates } from "../context/Data";

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCredentials, setSelectedCredentials] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="max-w-[85rem] mt-16 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative text-center">
        <h4
          className={`relative tracking-[5px] z-10 font-[first] ${
            darkMode ? "text-[#F1F3DF]" : "text-black"
          } text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
        >
          <span className="uppercase text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 right-3 relative font-[first]">
            Certificate
          </span>
        </h4>

        <h4
          aria-hidden="true"
          className="absolute top-4 left-1/2 -translate-x-1/2 tracking-[5px] font-[first] text-[#dda05f83] z-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span className="uppercase text-pretty opacity-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 font-[first]">
            Certificate
          </span>
        </h4>
      </div>

      <div className="grid grid-cols-2 mt-10 sm:grid-cols-4 gap-6">
        {certificates.map((cert, idx) => (
          <div key={idx} className="space-y-2">
            {/* Image Click: Show Image Only */}
            <img
              className="w-full h-auto object-cover rounded-lg shadow cursor-pointer"
              src={cert.url}
              alt={`Certificate ${idx + 1}`}
              onClick={() => {
                setSelectedCredentials(null); // close credentials if open
                setSelectedImage(cert.url); // open image
              }}
            />

            {/* Show Credentials Click: Show Credentials Only */}
            <div
              onClick={() => {
                setSelectedImage(null); // close image if open
                setSelectedCredentials(cert.credentials); // open credentials
              }}
              className={`flex relative mt-5 h-[34px] min-w-[118px] flex-1 items-center justify-center rounded-sm border ${
                darkMode ? "border-[#F1F3DF]" : "border-black"
              } px-5 text-small lg:flex-none cursor-pointer`}
            >
              <button>Show Credentials</button>
              <span className="bg-[#DDA15E] absolute top-0 left-0 w-[10%] h-[40%] rounded-br-full"></span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full relative overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl font-bold z-10"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected Certificate"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* Modal for Credentials */}
      {selectedCredentials && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setSelectedCredentials(null)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl font-bold z-10"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Certificate Credentials
            </h2>
            <p className="text-sm text-gray-700">{selectedCredentials}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
