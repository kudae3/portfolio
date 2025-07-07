"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import AnimatedContent from "./ui/animated-content";
import CTA from "./CTA";

const ContactMe = () => {
  const [isSending, setisSending] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setisSending(true);
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);

    const formData = {
      name: form.get("name"),
      email: form.get("email"),
      title: form.get("title"),
      message: form.get("message"),
    };

    await axios
      .post("/api/contact", {
        ...formData,
      })
      .then(() => {
        toast.success("Message sent!");
        (e.target as HTMLFormElement).reset();
        setisSending(false);
      })
      .catch(() => {
        toast.error("Failed to send message.");
        setisSending(false);
      });
  };

  return (
    <section className="max-w-7xl min-h-screen mt-6 mx-auto py-10 px-5">
      {/* Section Header */}
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contact Me
        </h2>
        <p className="text-gray-300 text-xs md:text-[16px] max-w-2xl mx-auto mb-6">
          Have a question, proposal, or just want to say hello? Fill out the
          form below and I&apos;ll get back to you soon!
        </p>
      </div>

      <AnimatedContent>
        <div className="md:flex max-w-6xl gap-10 mx-auto">
          <CTA />
          {/* Main Content */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-950 rounded-xl w-full shadow-lg p-5 md:p-16 flex flex-col gap-5 space-y-10"
          >
            <div>
              <label
                className="block text-gray-200 text-xs md:text-[14px] font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 text-xs md:text-[14px] border-b border-gray-400 hover:border-gray-400 focus:border-gray-600 text-gray-100 focus:outline-none focus:ring-0"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                className="block text-gray-200 text-xs md:text-[14px] font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 text-xs md:text-[14px] border-b border-gray-400 hover:border-gray-400 focus:border-gray-600 text-gray-100 focus:outline-none focus:ring-0"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label
                className="block text-gray-200 text-xs md:text-[14px] font-semibold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="w-full px-4 py-3 text-xs md:text-[14px] border-b border-gray-400 hover:border-gray-400 focus:border-gray-600 text-gray-100 focus:outline-none focus:ring-0"
                placeholder="Title"
              />
            </div>
            <div>
              <label
                className="block text-gray-200 text-xs md:text-[14px] font-semibold mb-2"
                htmlFor="description"
              >
                Message
              </label>
              <input
                id="message"
                name="message"
                type="text"
                required
                className="w-full px-4 py-3 text-xs md:text-[14px] border-b border-gray-400 hover:border-gray-400 focus:border-gray-600 text-gray-100 focus:outline-none focus:ring-0"
                placeholder="Message"
              />
            </div>
            <button className="px-4 h-[50px] cursor-pointer rounded-xl bg-gray-800 text-white text-xs md:text-[14px] hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
              {isSending ? (
                <div className="flex items-center justify-center">
                  <Image
                    src="/Sending.gif"
                    width={30}
                    height={30}
                    alt="send icon"
                    className="inline-block mr-2"
                  />
                  <p className="font-semibold text-gray-200 text-xs md:text-[14px]">
                    Sending...
                  </p>
                </div>
              ) : (
                <p className="font-semibold text-gray-200 text-xs md:text-[14px]">
                  Send Message
                </p>
              )}
            </button>
          </form>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default ContactMe;
