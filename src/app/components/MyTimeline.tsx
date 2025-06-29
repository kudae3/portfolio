import React from "react";
import { Timeline } from "./ui/timeline";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function MyTimeline() {
  const data = [
    {
      title: "2025 Jan - Present",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-[16px] font-normal text-neutral-800 dark:text-neutral-200">
            Joined <strong>Creative Coder Myanmar</strong> as a Intern Web
            Developer.
          </p>
          <div className="mb-8 text-xs md:text-[16px] space-y-2 md:space-y-4 list-disc list-inside text-neutral-700 dark:text-neutral-300">
            <div>
              <IoMdCheckmarkCircleOutline className="inline mr-2 text-green-500" />
              Developed and maintained web applications using{" "}
              <strong>Laravel</strong>, <strong>Vue.js</strong>, and{" "}
              <strong>React.js</strong>
            </div>
            <div>
              <IoMdCheckmarkCircleOutline className="inline mr-2 text-green-500" />
              Collaborated with designers and backend developers to create
              responsive and user-friendly interfaces
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
      title: "Upcoming Goals",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-[16px] font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Continue to grow as a full-stack developer.
          </p>
          <div className="mb-8 text-xs md:text-[16px] space-y-2 md:space-y-4 list-disc list-inside text-neutral-700 md:text-sm dark:text-neutral-300">
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
