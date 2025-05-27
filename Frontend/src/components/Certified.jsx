import { useContext, useEffect, useRef, useState } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Certified = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      gsap.fromTo(
        modalRef.current,
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else if (modalRef.current) {
      gsap.to(modalRef.current, {
        x: 200,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => setIsMounted(false),
      });
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {isMounted && (
        <div
          ref={modalRef}
          className={`rounded-lg shadow-lg p-4 w-40 ${
            darkMode ? "bg-[#F1F3DF] text-black" : "bg-black text-white"
          }`}
        >
          <Link
            to="/certificate"
            onClick={() => setIsOpen(false)}
            className="block w-full group text-center"
          >
            My Certificates
            <span
              className={`block ${
                darkMode ? "bg-black" : "bg-[#F1F3DF]"
              } rounded-sm h-[3px] w-1 mx-auto mt-1 transition-all duration-300 group-hover:w-full`}
            ></span>
          </Link>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`rounded-full p-3 shadow-md transition-all duration-300 ${
          darkMode ? "bg-[#F1F3DF]" : "bg-black"
        }`}
      >
        {isOpen ? (
          <FaArrowAltCircleUp size={24} color={darkMode ? "black" : "white"} />
        ) : (
          <FaArrowAltCircleDown size={24} color={darkMode ? "black" : "white"} />
        )}
      </button>
    </div>
  );
};

export default Certified;
