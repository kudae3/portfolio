import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-7xl p-5 mx-auto ">
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
    </div>
  );
};

export default Navbar;
