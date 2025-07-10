"use client";
import React from "react";
import AnimatedContent from "./ui/animated-content";
import CountUp from "./ui/count-up";
import Certificates from "./Certificates";

const About = () => {
  return (
    <section className="container">
      <div className="px-7 mb-10 md:mb-20">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-300 text-xs md:text-[16px] max-w-2xl mx-auto mb-6">
            Get to know more about my journey, skills, and passion for creating
            exceptional digital experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
          {/* Left Column - Personal Info */}
          <AnimatedContent direction="horizontal" reverse={true}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  My Mission
                </h3>
                <p className="text-gray-300 text-xs leading-7 md:text-[16px]">
                  I believe in the power of technology to solve real-world
                  problems. My goal is to create clean, efficient, and scalable
                  applications that not only meet technical requirements but
                  also provide exceptional user experiences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Beyond Code
                </h3>
                <p className="text-gray-300 text-xs md:text-[16px] leading-7">
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community. I&apos;m always eager
                  to learn and grow both professionally and personally.
                </p>
              </div>
            </div>
          </AnimatedContent>

          {/* Right Column - Skills & Stats */}
          <AnimatedContent direction="horizontal">
            <div className="space-y-8">
              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs md:text-[14px] mb-1">
                        <span className="text-gray-300">React/Next.js</span>
                        <span className="text-gray-400">80%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs md:text-[14px] mb-1">
                        <span className="text-gray-300">Vue</span>
                        <span className="text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs md:text-[14px] mb-1">
                        <span className="text-gray-300">Node.js</span>
                        <span className="text-gray-400">75%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs md:text-[14px] mb-1">
                        <span className="text-gray-300">Databases</span>
                        <span className="text-gray-400">75%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs md:text-[14px] mb-1">
                        <span className="text-gray-300">Laravel</span>
                        <span className="text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-pink-500 h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                      <CountUp
                        from={0}
                        to={2}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />
                      +
                    </div>
                    <div className="text-xs md:text-[14px] text-gray-400">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      <CountUp
                        from={0}
                        to={7}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />
                      +
                    </div>
                    <div className="text-xs md:text-[14px] text-gray-400">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      <CountUp
                        from={0}
                        to={8}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />
                      +
                    </div>
                    <div className="text-xs md:text-[14px] text-gray-400">
                      Technologies
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">
                      <CountUp
                        from={0}
                        to={100}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />
                      %
                    </div>
                    <div className="text-xs md:text-[14px] text-gray-400">
                      Dedication
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Certificates */}
        <Certificates />
      </div>
    </section>
  );
};

export default About;
