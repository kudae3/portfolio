"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SplitText from "./ui/split-text";
import ShinyText from "./ui/shiny-text";
import AnimatedContent from "./ui/animated-content";

const Hero = () => {
  return (
    <section className="container flex flex-col space-y-5">
      <div className="px-7 grid md:grid-cols-2 md:items-center gap-12 flex-1">
        <div className="order-1 md:order-2 mt-5 md:mt-0">
          <AnimatedContent direction="horizontal">
            <Image
              src="/test.jpg"
              alt="my profile"
              width={300}
              height={300}
              className="object-cover mx-auto rounded-xl"
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
          <div className="flex items-center justify-center md:justify-start space-x-4 font-medium">
            <a href="/Kudae-Sithu-Resume.pdf" download>
              <button className="relative inline-flex h-9 md:h-12 overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 text-xs md:text-[14px] text-gray-300 backdrop-blur-3xl">
                  Download Resume
                </span>
              </button>
            </a>

            <a
              href="#work"
              className="flex justify-center items-center gap-2 cursor-pointer"
            >
              <p className="text-xs md:text-[14px] text-gray-300">
                SEE MY WORKS
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
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
      {/* social */}
      <div className="flex justify-between items-end mt-10 md:mt-0 px-7 md:pb-[130px] text-slate-300 text-xs md:text-[14px]">
        <div className="flex items-center ">
          <Link
            className="hover:text-slate-50 duration-300"
            target="_blank"
            href={"https://www.linkedin.com/in/kudae-sithu-20b659248/"}
          >
            LinkedIn
          </Link>
          <span className="mx-2">/</span>
          <Link
            className="hover:text-slate-50 duration-300"
            target="_blank"
            href={"https://github.com/kudae3"}
          >
            Github
          </Link>
          <span className="mx-2">/</span>
          <Link
            className="hover:text-slate-50 duration-300"
            target="_blank"
            href={"https://wa.me/959751025121"}
          >
            WhatsApp
          </Link>
        </div>
        {/* Scroll Down */}
        {/* <div className="hover:text-slate-50 duration-300 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.1"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
