import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import MyTimeline from "./MyTimeline";

const projects = [
  {
    title: "Subscription Management System",
    description:
      "Node.js backend system with robust APIs for managing subscriptions, payments, and user accounts, including validation and secure data handling.",
    techStack: [
      <FaNode key="node" className="text-green-600 text-xl" />,
      <SiExpress key="express" className="text-gray-400 text-xl" />,
      <SiMongodb key="mongodb" className="text-green-500 text-xl" />,
      <IoLogoJavascript key="javascript" className="text-yellow-300 text-xl" />,
    ],
    image: "/projects/code.jpg",
    link: "https://github.com/kudae3/Subscription-tracker",
  },
  {
    title: "Corporate Web Application",
    description:
      "A full-stack Next.js job board app featuring job management by admin, and secure user authentication with Clerk.",
    techStack: [
      <RiNextjsFill
        key="nextjs"
        className="text-black dark:text-white text-xl"
      />,
      <RiTailwindCssFill key="tailwind" className="text-cyan-500 text-xl" />,
      <SiMongodb key="mongodb" className="text-green-500 text-xl" />,
      <SiTypescript key="typescript" className="text-blue-500 text-xl" />,
      <SiShadcnui key="shadcn" className="text-purple-500 text-xl" />,
      <SiClerk key="clerk" className="text-blue-600 text-xl" />,
    ],
    image: "/projects/corporate.png",
    link: "https://youtu.be/7fTBW_BLmHM?si=qBGzzJhFgb57-mnw",
  },
  {
    title: "Hyper UI",
    description:
      "Contributed to Hyper UI by developing modal components with advanced input fields, improving usability and accessibility.",
    techStack: [
      <RiNextjsFill
        key="nextjs"
        className="text-black dark:text-white text-xl"
      />,
      <RiTailwindCssFill key="tailwind" className="text-cyan-500 text-xl" />,
      <FaReact key="react" className="text-sky-500 text-xl" />,
      <IoLogoJavascript key="javascript" className="text-yellow-300 text-xl" />,
    ],
    image: "/projects/hyperUI.png",
    link: "https://www.hyperui.dev/components/application/modals",
  },
  // Add more projects as needed
];

const Work = () => (
  <section className="container">
    {/* Section Header */}
    <div className="text-center mb-24">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Work Experiences
      </h2>
      <p className="text-gray-300 text-sm md:text-[16px] max-w-2xl mx-auto mb-6">
        Explore my professional journey through various projects and experiences
        that showcase my skills and contributions in the tech industry.
      </p>
    </div>

    {/* Timeline */}
    <MyTimeline />

    <div className="mt-24">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10">
        Things I&apos;ve Built
      </h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={index}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
          >
            <Image
              alt=""
              width={300}
              height={300}
              src={project.image}
              className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                {project.description}
              </p>

              {project.techStack && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full bg-gray-100 p-2 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <Link
                href={project.link}
                target="_blank"
                className="group mt-5 inline-flex items-center gap-1 text-sm font-medium text-gray-400"
              >
                Explore
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
