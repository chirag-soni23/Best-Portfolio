import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const About = () => {
  const overlayRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const overlay = overlayRef.current;

    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.to(overlay, { y: "100%", opacity: 1, duration: 1 });
      },
    });

    timeline.fromTo(
      overlay,
      { y: "-100%", opacity: 1 },
      { y: "0%", duration: 1, ease: "power3.out" }
    );

    return () => {
      timeline.kill();
    };
  }, [location]);

  return (
    <div className="w-full h-full mt-16 mb-16 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-black z-40"
      ></div>

      <div className="relative text-center">
        {/* Foreground Text */}
        <h4 className="relative tracking-[5px] z-10 right-3 font-[first] text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase">
          who am i
        </h4>
        {/* Realistic Shadow Effect */}
        <h4 className="absolute top-3 tracking-[5px] font-[first] text-[#DDA15F] z-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase">
          who am i
        </h4>
      </div>

      {/* Description Paragraph */}
      <p className="font-[second] text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-700 mt-10 max-w-[80%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[100%] tracking-widest">
        Hello, I'm Chirag, a web designer, React front-end developer, and content creator. I specialize in creating stunning landing pages, websites, and dynamic front-end applications for businesses worldwide. If you're looking for a modern and impactful website, feel free to email me. If we are a good fit, I'll provide a time and cost estimate for your project.
      </p>

      <div className="relative mt-10 flex items-center">
        <div className="bg-black text-[#DDA15F] p-2">
          <h2 className="font-[second]">see my work</h2>
        </div>
        <div className="border-2 absolute w-full h-full top-1 left-2 border-black p-2"></div>
        <div className="w-8 absolute left-36 h-8 flex items-center justify-center rounded-full border-2 border-black">
          <Link to="/project" className="text-[#DDA15F] flex items-center justify-center">
            +
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
