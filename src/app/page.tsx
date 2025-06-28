import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
};

export default page;
