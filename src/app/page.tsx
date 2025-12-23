import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import ContactMe from "./components/ContactMe";
import BottomNav from "./components/BottomNav";

const page = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div id="intro">
        <Hero />
      </div>
      <div id="about" className="pt-7">
        <About />
      </div>
      <div id="work" className="pt-7 md:pt-20">
        <Work />
      </div>
      <div id="contact" className="pt-7 md:pt-28 pb-7 md:pb-0">
        <ContactMe />
      </div>
      <div>
        <BottomNav />
      </div>
    </>
  );
};

export default page;
