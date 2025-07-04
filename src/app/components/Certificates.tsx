import React from "react";
import { FaMeta } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import AnimatedContent from "./ui/animated-content";
import Image from "next/image";

const Certificates = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-6">
        Professional Certificates
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatedContent>
          <div className="bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-start px-[16px] h-[110px] lg:h-[120px] rounded-[20px] flex justify-start lg:justify-center items-center gap-5 md:gap-3">
            <div className="">
              <h4 className="text-xs md:text-sm font-semibold mb-2">
                Introdution to Front-end Development
              </h4>
              <div className="text-gray-300 text-[9px] sm:text-xs md:text-[13px]">
                <div className="flex justify-start items-center gap-1 text-blue-500 font-extrabold ">
                  <FaMeta className="" />
                  <p>Meta</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                width={80}
                height={80}
                src="/certificates/front-end.png"
                alt="Meta Certificate"
                className="rounded-lg"
              />
            </div>
          </div>
        </AnimatedContent>

        <AnimatedContent>
          <div className="bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-start px-[16px] h-[110px] lg:h-[120px] rounded-[20px] flex justify-start lg:justify-center items-center gap-5 md:gap-3">
            <div className="">
              <h4 className="text-xs md:text-sm font-semibold mb-2">
                Python Data Structures
              </h4>
              <div className="text-gray-300 text-[9px] sm:text-xs md:text-[13px]">
                <div className="flex justify-start items-center gap-1 text-orange-400 font-extrabold ">
                  <FaUniversity className="" />
                  <p>University of Michigan</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                width={80}
                height={80}
                src="/certificates/python.png"
                alt="Meta Certificate"
                className="rounded-lg"
              />
            </div>
          </div>
        </AnimatedContent>
        <AnimatedContent>
          <div className="bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-start px-[16px] h-[110px] lg:h-[120px] rounded-[20px] flex justify-start lg:justify-center items-center gap-5 md:gap-3">
            <div className="">
              <h4 className="text-xs md:text-sm font-semibold mb-2">
                Diploma in Software Engineering
              </h4>
              <div className="text-gray-300 text-[9px] sm:text-xs md:text-[13px]">
                <div className="flex justify-start items-center gap-1 text-green-400 font-extrabold ">
                  <FaUniversity className="" />
                  <p>European Open University</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                width={80}
                height={80}
                src="/certificates/diploma.png"
                alt="Meta Certificate"
                className="rounded-lg"
              />
            </div>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default Certificates;
