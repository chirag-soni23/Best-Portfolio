import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const GlobalStyle = () => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#121212'; // Dark mode background
      document.body.style.color = '#fff'; // Light text on dark mode
    } else {
      document.body.style.backgroundColor = '#fff'; // Light mode background
      document.body.style.color = '#000'; // Dark text on light mode
    }
  }, [darkMode]);

  return null; // Ye component sirf side effects ke liye hai
};

export default GlobalStyle;
