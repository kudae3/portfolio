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
      <Hero />
      <About />
      <Work />
      <ContactUs />
    </>
  );
};

export default page;
