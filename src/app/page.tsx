import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import ContactUs from "./components/ContactUs";

const page = () => {
  return (
    <>
      <Navbar />
      <div id="intro">
        <Hero />
      </div>
      <div id="about" className="pt-7">
        <About />
      </div>
      <div id="work" className="pt-7">
        <Work />
      </div>
      <div id="contact" className="pt-7">
        <ContactUs />
      </div>
    </>
  );
};

export default page;
