import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-14 py-5">
      <div>my portfolio</div>
      <ul className="hidden md:flex space-x-7 text-[15px]">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/* mobile */}
      <div className="block md:hidden">
        <p>Dropdown goes here</p>
      </div>
    </div>
  );
};

export default Navbar;
