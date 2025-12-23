"use client";
import React, { useEffect, useState } from "react";
import { BiFace } from "react-icons/bi";
import { BiSolidFaceMask } from "react-icons/bi";

import { IoCodeSlashOutline } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";

import { IoIosGitMerge } from "react-icons/io";
import { IoMdGitMerge } from "react-icons/io";

import { AiOutlineMessage } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

const NAV_ITEMS = [
  {
    id: "intro",
    icon: <BiFace size={20} />,
    activeIcon: <BiSolidFaceMask size={20} />,
  },
  {
    id: "about",
    icon: <IoCodeSlashOutline size={20} />,
    activeIcon: <IoCodeSlash size={20} />,
  },
  {
    id: "work",
    icon: <IoIosGitMerge size={20} />,
    activeIcon: <IoMdGitMerge size={20} />,
  },
  {
    id: "contact",
    icon: <AiOutlineMessage size={20} />,
    activeIcon: <AiFillMessage size={20} />,
  },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
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
  }, []);

  return (
    <footer className="block md:hidden justify-center items-center bg-black max-w-7xl p-5 mx-auto fixed bottom-0 left-0 right-0 z-50">
      <ul className="flex justify-around items-center space-x-7 text-[15px]">
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="flex flex-col items-center">
            <a
              href={`#${item.id}`}
              className="hover:text-slate-300 text-white duration-300 text-xs md:text-[14px]"
            >
              {activeSection === item.id ? item.activeIcon : item.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Navbar;
