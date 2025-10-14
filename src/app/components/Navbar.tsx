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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="text-xs text-white md:text-[14px]">
        Kudae&#39;s Portfolio
      </div>
      <ul className="hidden md:flex space-x-7 text-[15px]">
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="flex flex-col items-center">
            <a
              href={`#${item.id}`}
              className="hover:text-slate-300 text-white duration-300 text-xs md:text-[14px]"
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
      <div className="block md:hidden relative">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white hover:text-slate-300 duration-300 p-2"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6 transition-transform duration-500 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <g className="transition-all duration-500 ease-in-out">
              {/* Top line */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 6l12 12" : "M4 6h16"}
                className="transition-all duration-500 ease-in-out"
              />
              {/* Middle line */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 12h16"
                className={`transition-all duration-500 ease-in-out ${
                  isMobileMenuOpen
                    ? "opacity-0 scale-0"
                    : "opacity-100 scale-100"
                }`}
              />
              {/* Bottom line */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6" : "M4 18h16"}
                className="transition-all duration-500 ease-in-out"
              />
            </g>
          </svg>
        </button>

        <div
          className={`absolute top-full right-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg transition-all duration-300 ease-in-out origin-top-right ${
            isMobileMenuOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="px-4 py-2 text-sm hover:bg-gray-800 hover:text-slate-300 text-white duration-300 flex items-center justify-between"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="w-1 h-1 rounded-full bg-white"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
