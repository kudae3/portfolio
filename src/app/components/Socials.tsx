import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
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
  );
};

export default Socials;
