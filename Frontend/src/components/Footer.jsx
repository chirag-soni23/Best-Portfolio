import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  let currentYear = new Date().getFullYear();
  return (
    <div className='flex flex-col w-full h-full items-center justify-center mt-24 gap-1 mb-2'>
        <div className="flex mb-10 items-center justify-center gap-6 flex-wrap">
          {/* GitHub Icon */}
          <a 
            className="cursor-pointer" 
            href="https://github.com/chirag-soni23" 
            target="_blank" 
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={`${darkMode ? "#F1F3DF":"#0D0701"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 cursor-pointer">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          {/* Instagram Icon */}
          <a 
            className="cursor-pointer" 
            href="https://www.instagram.com/0x_chirag_0x" 
            target="_blank" 
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={`${darkMode ? "#F1F3DF":"#0D0701"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 cursor-pointer">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          {/* Email Icon */}
          <a 
            className="cursor-pointer" 
            href="mailto:csoni0693@gmail.com" 
            target="_blank" 
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={`${darkMode ? "#F1F3DF":"#0D0701"}`}strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 cursor-pointer">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>

        <p className={`text-sm ${darkMode?"text-[#F1F3DF]":"text-gray-700"}`}>want to send a message from here?</p>
        <p class={`pb-5 text-sm lg:text-sm ${darkMode?"text-[#F1F3DF]":"text-gray-700"}`}>© {currentYear} chirag.codes Full-Stack Developer</p>
    </div>
  );
};

export default Footer;
