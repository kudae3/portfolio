"use client";
import React, { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("intro");

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

      let maxVisible = 0;
      let found = "intro";
      const viewportHeight = window.innerHeight;

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const visible =
            Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          if (visible > maxVisible && visible > 0) {
            maxVisible = visible;
            found = item.id;
          }
        }
      }
      setActiveSection(found);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

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
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="flex flex-col items-center">
            <a
              href={`#${item.id}`}
              className="hover:text-slate-300 duration-300"
            >
              {item.label}
            </a>
            {activeSection === item.id && (
              <span className="w-1 h-1 rounded-full bg-white mt-1"></span>
            )}
          </li>
        ))}
      </ul>
      {/* mobile */}
      <div className="block md:hidden">
        <p>Dropdown goes here</p>
      </div>
    </header>
  );
};

export default Navbar;
