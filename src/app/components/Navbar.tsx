import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-14 py-5">
      <div>my portfolio</div>
      <ul className="flex space-x-5">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
