import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
    </>
  );
};

export default page;
