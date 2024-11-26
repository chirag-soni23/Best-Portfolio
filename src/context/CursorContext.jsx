import React, { createContext, useState, useEffect } from "react";
import { motion } from "framer-motion";

// Create Context
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle hover effects
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <CursorContext.Provider value={{ handleMouseEnter, handleMouseLeave }}>
      {children}

      {/* Custom Smooth Cursor */}
      <motion.div
        className={`fixed z-50 pointer-events-none rounded-full ${
          hovered ? "bg-blue-500" : "bg-black"
        }`}
        style={{
          width: "40px",
          height: "40px",
          top: 0,
          left: 0,
        }}
        animate={{
          x: mousePosition.x - 20, // Center alignment
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "tween",
          duration: 0.1,
        }}
      />
    </CursorContext.Provider>
  );
};

export default CursorProvider;
