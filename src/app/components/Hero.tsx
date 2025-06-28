import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container flex flex-col space-y-5">
      <div className="px-7 grid md:grid-cols-2 md:items-center gap-12 flex-1">
        <div className="order-1 md:order-2">
          <Image
            src="/test.jpg"
            alt="my profile"
            width={300}
            height={300}
            className="object-cover mx-auto rounded-xl"
          />
        </div>

        <div className="space-y-7 text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl text-white">
            Full-stack web developer
          </h1>
          <p className="md:text-[17px] text-gray-200 leading-10">
            Hello, My name is Kudae Sithu. I am passionate about building
            modern, & responsive web applications. I enjoy working with both
            front-end and back-end technologies, & I&apos;m always eager to
            learn new tools and frameworks to improve my skills.
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-4 font-medium">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 text-sm font-medium text-white backdrop-blur-3xl">
                Download Resume
              </span>
            </button>
            <button className="flex justify-center items-center gap-2 cursor-pointer">
              <p className="text-sm">SEE MY WORKS</p>
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
            </button>
          </div>
        </div>
      </div>
      {/* social */}
      <div className="flex justify-between items-end mt-10 md:mt-0 px-7 md:pb-[130px] text-slate-300 text-sm">
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
        <div className="hover:text-slate-50 duration-300 cursor-pointer">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
