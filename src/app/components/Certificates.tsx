import React from "react";
import { FaMeta } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";

const Certificates = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-6">
        Professional Certificates
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-start py-[16px] px-[26px] rounded-[20px]">
          <h4 className="text-sm md:text-[15px] lg:text-lg font-semibold mb-2">
            Introdution to Front-end Development
          </h4>
          <div className="text-gray-300 text-xs md:text-[14px]">
            <div className="flex justify-start items-center gap-1 text-blue-500 font-extrabold text-xs md:text-[14px] ">
              <FaMeta className="block md:hidden lg:block" />
              <p>Meta</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-start py-[16px] px-[26px] rounded-[20px]">
          <h4 className="text-sm md:text-[15px] lg:text-lg font-semibold mb-2">
            Python Data Structures
          </h4>
          <div className="text-xs md:text-[14px]">
            <div className="flex justify-start items-center gap-1 text-yellow-600 font-extrabold text-xs md:text-[14px]">
              <FaUniversity className="block md:hidden lg:block" />
              <p>University of Michigan</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-start py-[16px] px-[26px] rounded-[20px]">
          <h4 className="text-sm md:text-[15px] lg:text-lg font-semibold mb-2">
            Diploma In Software Engineering
          </h4>
          <div className="text-gray-300 text-xs md:text-[14px]">
            <div className="flex justify-start items-center gap-1 text-green-500 font-extrabold text-xs md:text-[14px]">
              <FaUniversity className="block md:hidden lg:block" />
              <p>European Open University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
