"use client";

import React from "react";
import Image from "next/image";
import SplitText from "./ui/split-text";
import ShinyText from "./ui/shiny-text";
import Socials from "./Socials";
import { FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";
import { FaLaravel } from "react-icons/fa";
import AnimatedContent from "./ui/animated-content";

const Hero = () => {
  return (
    <section className="container flex flex-col space-y-5">
      <div className="px-7 grid md:grid-cols-2 md:items-center gap-12 flex-1">
        <div className="order-1 md:order-2 mt-5 md:mt-0 relative">
          {/* React */}
          <div className="absolute z-10 bg-gradient-to-b from-black to-gray-900 -top-0 lg:-top-15 left-10 -translate-x-1/2 w-fit p-2 lg:p-3 border border-gray-800 text-white rounded-2xl flex justify-center items-center animate-float-delayed">
            <FaReact className="size-3 lg:size-5 text-[#61DBFB]" />
          </div>

          {/* Next.js */}
          <div className="absolute z-10 bg-gradient-to-b from-black to-gray-900 top-15 lg:top-1/10 lg:left-1/7 -translate-x-1/2 w-fit p-2 lg:p-3 border border-gray-800 text-white rounded-2xl flex justify-center items-center animate-float">
            <RiNextjsFill className="size-3 lg:size-5 text-[#ffffff]" />
          </div>

          {/* Tailwind CSS  */}
          <div className="absolute z-10 bg-gradient-to-b from-black to-gray-900 top-7 right-0 md:-right-1 lg:top-40 lg:left-25 translate-x-1/2 w-fit p-2 lg:p-3 border border-gray-800 text-white rounded-2xl flex justify-center items-center animate-float-delayed-2">
            <SiTailwindcss className="size-3 lg:size-5 text-[#38BDF8]" />
          </div>

          {/* TypeScript */}
          <div className="absolute z-10 bg-gradient-to-b from-black to-gray-900 -bottom-10 md:-bottom-15 lg:-bottom-20 right-1/3 lg:right-1/2 translate-x-1/2 w-fit p-2 lg:p-3 border border-gray-800 text-white rounded-2xl flex justify-center items-center animate-float">
            <SiTypescript className="size-3 lg:size-5 text-[#3178C6]" />
          </div>

          {/* Node.js */}
          <div className="absolute z-10 bg-gradient-to-b from-black to-gray-900 bottom-10 lg:-bottom-20 -left-10 lg:-left-0 translate-x-1/2 w-fit p-2 lg:p-3 border border-gray-800 text-white rounded-2xl flex justify-center items-center animate-float-delayed">
            <IoLogoNodejs className="size-3 lg:size-5 text-[#68A063]" />
          </div>

          {/* MySQL */}
          <div className="absolute z-10 bg-gradient-to-b from-black to-gray-900 right-7 lg:right-30 top-30 translate-x-1/2 w-fit p-2 lg:p-3 border border-gray-800 text-white rounded-2xl flex justify-center items-center animate-float-delayed">
            <GrMysql className="size-3 lg:size-5 text-[#00758F]" />
          </div>

          {/* MongoDB */}
          <div className="hidden absolute z-10 bg-gradient-to-b from-black to-gray-900 md:right-30 lg:right-40 md:-top-9 lg:-top-15 translate-x-1/2 w-fit p-2 lg:p-3 border border-gray-800 text-white rounded-2xl md:flex justify-center items-center animate-float-delayed">
            <SiMongodb className="size-3 lg:size-5 text-[#47A248]" />
          </div>

          {/* Laravel */}
          <div className="hidden absolute z-10 bg-gradient-to-b from-black to-gray-900 md:right-20 lg:right-10 top-5 translate-x-1/2 w-fit p-2 lg:p-3 border border-gray-800 text-white rounded-2xl md:flex justify-center items-center animate-float-delayed">
            <FaLaravel className="size-3 lg:size-5 text-[#FF2D20]" />
          </div>

          <AnimatedContent direction="horizontal" reverse={true}>
            <Image
              src="/profile3.png"
              alt="my profile"
              width={200}
              height={200}
              className="object-cover mx-auto rounded-2xl"
            />
          </AnimatedContent>
        </div>

        <div className="space-y-7 text-center md:text-left order-2 md:order-1">
          <SplitText
            text="Full-stack Web Developer"
            className="text-xl sm:text-3xl font-bold md:text-4xl text-white"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <ShinyText
            text="Hello, My name is Kudae Sithu. I am passionate about building
            modern, & responsive web applications. I enjoy working with both
            front-end and back-end technologies, & I'm always eager to
            learn new tools and frameworks to improve my skills."
            disabled={false}
            speed={4}
            className="text-xs md:text-[16px] leading-7"
          />
          <div className="md:flex space-y-7 md:space-y-0 space-x-0 md:space-x-5 items-center justify-center md:justify-start font-medium">
            <div>
              <a href="/Kudae-Sithu-Resume.pdf" download>
                <button className="relative inline-flex h-9 md:h-10 overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 text-xs md:text-[14px] text-gray-300 backdrop-blur-3xl">
                    Download Resume
                  </span>
                </button>
              </a>
            </div>

            <div>
              <a
                href="#work"
                className="flex justify-center items-center space-x-2 cursor-pointer"
              >
                <p className="text-xs md:text-[14px] text-gray-300">
                  SEE MY WORKS
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="size-6 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Socials />
    </section>
  );
};

export default Hero;
