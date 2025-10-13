import React from "react";
import { Timeline } from "./ui/timeline";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";

function MyTimeline() {
  const data = [
    {
      title: "2025 Jan - 2025 Mar",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-[16px] font-normal text-neutral-200">
            Joined <strong>Creative Coder Myanmar</strong> as an Intern Web
            Developer.
          </p>
          <div className="mb-8 text-xs md:text-[16px] space-y-2 md:space-y-4 list-disc list-inside text-neutral-300">
            <div>
              <IoMdCheckmarkCircleOutline className="inline mr-2 text-green-500" />
              Developed and maintained web applications using{" "}
              <strong>Laravel</strong>, <strong>Vue.js</strong>, and{" "}
              <strong>React.js</strong>
            </div>
            <div>
              <IoMdCheckmarkCircleOutline className="inline mr-2 text-green-500" />
              Collaborated with designers and developers to create responsive
              and user-friendly interfaces
            </div>
            <div>
              <IoMdCheckmarkCircleOutline className="inline mr-2 text-green-500" />
              Contributed to real-world projects including e-commerce and LMS
              platforms
            </div>
            <div>
              <IoMdCheckmarkCircleOutline className="inline mr-2 text-green-500" />
              Enhanced application performance and user experience through
              optimization techniques
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025 Mar - 2025 Oct",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-[16px] font-normal text-neutral-200">
            Promoted to <strong>Junior Web Developer</strong> at{" "}
            <strong>Creative Coder Myanmar</strong>.
          </p>
          <div className="mb-8 text-xs md:text-[16px] space-y-2 md:space-y-4 list-disc list-inside text-neutral-300">
            <div>
              <IoMdCheckmarkCircleOutline className="inline mr-2 text-green-500" />
              Architected and developed a full-stack{" "}
              <strong>
                {" "}
                <Link
                  href={"https://djpackmm.com/"}
                  target="_blank"
                  className="text-[#8b5cf6] hover:text-[#825cf4] duration-300"
                >
                  Music Streaming Platform
                </Link>
              </strong>{" "}
              in collaboration with other developers, featuring user
              authentication, purchase workflows, downloading tracks, and
              real-time audio streaming
            </div>
            <div>
              <IoMdCheckmarkCircleOutline className="inline mr-2 text-green-500" />
              Led frontend development using <strong>Vue.js</strong>,
              implementing complex state management and responsive UI components
            </div>
            <div>
              <IoMdCheckmarkCircleOutline className="inline mr-2 text-green-500" />
              Integrated <strong>Laravel</strong> backend APIs for seamless data
              flow and optimized database queries for improved performance
            </div>
            <div>
              <IoMdCheckmarkCircleOutline className="inline mr-2 text-green-500" />
              Mentored intern developers and collaborated cross-functionally
              with design and backend teams to deliver pixel-perfect,
              user-centric applications
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Upcoming Goals",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-[16px] font-normal md:text-sm text-neutral-200">
            Continue to grow as a full-stack developer.
          </p>
          <div className="mb-8 text-xs md:text-[16px] space-y-2 md:space-y-4 list-disc list-inside  md:text-sm text-neutral-300">
            <div>
              <IoMdCheckmarkCircleOutline className="inline mr-2 text-green-500" />
              Master Next.js and React for frontend innovation
            </div>
            <div>
              <IoMdCheckmarkCircleOutline className="inline mr-2 text-green-500" />
              Explore DevOps and CI/CD pipelines
            </div>
            <div>
              <IoMdCheckmarkCircleOutline className="inline mr-2 text-green-500" />
              Contribute to open-source or build a personal SaaS project
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export default MyTimeline;
