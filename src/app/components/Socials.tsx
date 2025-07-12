import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex justify-between items-end mt-10 md:mt-0 px-7 md:pb-[130px] text-slate-300 text-xs md:text-[14px]">
      <div className="flex items-center ">
        <Link
          className="hover:text-slate-50 duration-300"
          target="_blank"
          href={"https://www.linkedin.com/in/kudae-sithu-20b659248/"}
        >
          <div className="flex items-center space-x-1">
            <FaLinkedin className="size-4 md:size-5" />
          </div>
        </Link>
        <span className="mx-4">/</span>
        <Link
          className="hover:text-slate-50 duration-300"
          target="_blank"
          href={"https://github.com/kudae3"}
        >
          <div className="flex items-center space-x-1">
            <FaGithub className="size-4 md:size-5" />
          </div>
        </Link>
        <span className="mx-4">/</span>
        <Link
          className="hover:text-slate-50 duration-300"
          target="_blank"
          href={"https://wa.me/959751025121"}
        >
          <div className="flex items-center space-x-1">
            <FaWhatsapp className="size-4 md:size-5" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Socials;
