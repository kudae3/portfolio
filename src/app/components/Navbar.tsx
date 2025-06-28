"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar after scrolling down 500px
      if (currentScrollY > 500 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      // Show navbar immediately when scrolling up from any position
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // Show navbar when at top (less than 500px)
      else if (currentScrollY <= 500) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`flex justify-between bg-black items-center max-w-7xl p-5 mx-auto fixed top-0 left-0 right-0 z-50 transition-transform duration-300  ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>my portfolio</div>
      <ul className="hidden md:flex space-x-7 text-[15px]">
        <li>
          <a href="#intro" className="hover:underline">
            Intro
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#work" className="hover:underline">
            Work
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
      {/* mobile */}
      <div className="block md:hidden">
        <p>Dropdown goes here</p>
      </div>
    </header>
  );
};

export default Navbar;
