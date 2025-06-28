import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container">
      <div className="px-7 grid md:grid-cols-2 md:items-center gap-10">
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
          <h1 className="text-4xl font-bold sm:text-5xl text-white">
            Full-stack web developer
          </h1>
          <p className="md:text-[17px] text-gray-200 leading-10">
            Hello, My name is Kudae Sithu. I am passionate about building
            modern, & responsive web applications. I enjoy working with both
            front-end and back-end technologies, & I&apos;m always eager to
            learn new tools and frameworks to improve my skills.
          </p>
          <div>View my works</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
