import React from "react";
import { FaMeta } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import StarBorder from "./ui/star-border";

const Certificates = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-6">
        Professional Certificates
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StarBorder>
          <h4 className="text-lg font-semibold mb-2">
            Introcution to Front-end Development
          </h4>
          <p className="text-gray-300 text-xs md:text-[14px]">
            <div className="flex justify-start items-center gap-1 text-blue-500 font-extrabold">
              <FaMeta />
              <p>Meta</p>
            </div>
          </p>
        </StarBorder>

        <StarBorder>
          <h4 className="text-lg font-semibold mb-2">Data Structures</h4>
          <p className="text-xs md:text-[14px]">
            <div className="flex justify-start items-center gap-1 text-yellow-600 font-extrabold">
              <FaUniversity />
              <p>University of Michigan</p>
            </div>
          </p>
        </StarBorder>

        <StarBorder>
          <h4 className="text-lg font-semibold mb-2">
            Diploma In Software Engineering
          </h4>
          <p className="text-gray-300 text-xs md:text-[14px]">
            <div className="flex justify-start items-center text-green-500 font-extrabold gap-1">
              <FaUniversity />
              <p>European Open University</p>
            </div>
          </p>
        </StarBorder>
      </div>
    </div>
  );
};

export default Certificates;
