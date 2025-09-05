import React, { useRef, useContext } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Stairs = (props) => {
  const currentPath = useLocation().pathname;
  const { darkMode } = useContext(ThemeContext);

  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairParentRef.current, {
      display: "block",
    });
    tl.from(".stairs", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stairs", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairParentRef.current, {
      display: "none",
    });
    tl.to(".stairs", {
      y: "0%",
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 1.2,
    });
  }, [currentPath]);

  // Dark/Light bg class
  const stairBg = darkMode ? "bg-[#F1F3DF]" : "bg-black";

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-50 top-0">
        <div className="h-full w-full flex">
          <div className={`stairs h-full w-1/5 ${stairBg}`}></div>
          <div className={`stairs h-full w-1/5 ${stairBg}`}></div>
          <div className={`stairs h-full w-1/5 ${stairBg}`}></div>
          <div className={`stairs h-full w-1/5 ${stairBg}`}></div>
          <div className={`stairs h-full w-1/5 ${stairBg}`}></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Stairs;
