import React from "react";
import { FaMeta } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    title: "Introdution to Front-end Development",
    icon: <FaMeta className="text-blue-500" />,
    name: <p className="text-blue-500">Meta</p>,
    image: "/certificates/front-end.png",
  },
  {
    title: "Python Data Structures",
    icon: <FaUniversity className="text-orange-400" />,
    name: <p className="text-orange-400">University of Michigan</p>,
    image: "/certificates/python.png",
  },
  {
    title: "Diploma in Software Engineering",
    icon: <FaUniversity className="text-green-400" />,
    name: <p className="text-green-400">European Open University</p>,
    image: "/certificates/diploma.png",
  },
];

const Certificates = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-6">
        Professional Certificates
      </h3>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Certificates;
