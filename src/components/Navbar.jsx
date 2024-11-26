import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const overlayRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (targetPath) => {
    if (location.pathname === targetPath) {
      // Same page, no animation
      return;
    }

    // Close the menu when a link is clicked
    setIsOpen(false);

    // Animate overlay from bottom to top, navigate, then top to bottom
    gsap.to(overlayRef.current, {
      y: "0%", // Move overlay from bottom to visible
      duration: 0.8,
      ease: "power3.out",
      onComplete: () => {
        navigate(targetPath); // Navigate to the target route
        gsap.to(overlayRef.current, {
          y: "-100%", // Reset overlay (move from top to hidden)
          duration: 0.8,
          ease: "power3.in",
        });
      },
    });
  };

  useEffect(() => {
    if (!isOpen) {
      gsap.to(menuRef.current, {
        opacity: 0,
        visibility: "hidden",
        duration: 0.5,
        ease: "power3.in",
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.5,
        ease: "power3.out",
      });
      linksRef.current.forEach((link, index) => {
        gsap.fromTo(
          link,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, delay: index * 0.1, duration: 0.5, ease: "power3.out" }
        );
      });
    }
  }, [isOpen]);

  return (
    <div>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-black z-40"
        style={{ transform: "translateY(100%)" }} // Initial position (hidden at bottom)
      ></div>

      <div className="fixed flex justify-between items-center z-50 bg-transparent top-0 left-0 right-0 font-[first] lg:justify-between backdrop-blur-sm py-5 px-20">
        {/* Logo */}
        <h1 className="text-sm font-bold">chirag.codes</h1>

        {/* Hamburger Menu */}
        <div className="relative h-6 w-10 cursor-pointer" onClick={toggleMenu}>
          <div
            className={`absolute top-0 left-0 h-[2px] w-10 bg-black transition-transform ${
              isOpen ? "rotate-45 bg-white translate-y-2.5 w-6 ml-2" : ""
            }`}
          ></div>
          <div
            className={`absolute top-2.5 left-2 h-[2px] w-6 bg-black transition-transform ${
              isOpen ? "-rotate-45 bg-white -translate-y-3.6 w-6" : ""
            }`}
          ></div>
          <div
            className={`absolute top-1.2 left-0 h-[2px] w-10 bg-black transition-all ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
        </div>

        {/* Dropdown Menu */}
        <div
          ref={menuRef}
          className={`absolute top-2 -z-10 right-20 bg-black shadow-lg rounded-lg p-10 space-y-3 text-left ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={(el) => (linksRef.current[0] = el)}
            className="text-white text-sm font-medium transition group"
          >
            <button
              onClick={() => handleLinkClick("/")}
              className="block text-white text-sm font-medium transition group"
            >
              Home
              <span className="block bg-white rounded-sm h-[2px] w-1 mx-auto mt-1 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
          <div
            ref={(el) => (linksRef.current[1] = el)}
            className="text-white text-sm font-medium transition group"
          >
            <button
              onClick={() => handleLinkClick("/project")}
              className="block text-white text-sm font-medium transition group"
            >
              Projects
              <span className="block bg-white rounded-sm h-[2px] w-1 mx-auto mt-1 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
          <div
            ref={(el) => (linksRef.current[2] = el)}
            className="text-white text-sm font-medium transition group"
          >
            <button
              onClick={() => handleLinkClick("/contact")}
              className="block text-white text-sm font-medium transition group"
            >
              Contact
              <span className="block bg-white rounded-sm h-[2px] w-1 mx-auto mt-1 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;