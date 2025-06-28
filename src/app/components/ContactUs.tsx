"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactUs = () => {
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
      .post("http://localhost:3000/api/contact", {
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

    // const res = await fetch("http://localhost:3000/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    // if (res.ok) {
    //   toast.success("Message sent!");
    //   (e.target as HTMLFormElement).reset();
    // } else {
    //   toast.error("Failed to send message.");
    // }
  };

  return (
    <section className="max-w-7xl min-h-screen mt-6 mx-auto py-10 md:py-0 px-5 mb-10">
      <div className="px-7 ">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-gray-300 text-sm md:text-[16px] max-w-2xl mx-auto mb-6">
            Have a question, proposal, or just want to say hello? Fill out the
            form below and I&apos;ll get back to you soon!
          </p>
        </div>

        <div className="md:flex max-w-6xl gap-10 mx-auto mb-24">
          {/* CTA */}
          <div className="md:w-1/2 space-y-10 mb-10 md:mb-0 p-0 md:p-10">
            <div className="grid grid-cols-2">
              <div className="h-14 flex items-center justify-center mx-auto mb-4">
                <Image
                  className="w-full h-full object-cover"
                  width={56}
                  height={56}
                  src="/socials/gmail.gif"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[14px] md:text-lg font-semibold mb-2">
                  Email Me
                </h3>
                <p className="text-sm text-primary-100">
                  kudaesithu2@gmail.com
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Image
                  className="w-full h-full object-cover"
                  width={56}
                  height={56}
                  src="/socials/Whatsapp.gif"
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="text-[14px] md:text-lg font-semibold mb-2">
                  Call Me
                </h3>
                <p className="text-sm text-primary-100">+(959)751025121</p>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Image
                  className="w-full h-full object-cover"
                  width={56}
                  height={56}
                  src="/socials/Messenger.gif"
                  alt=""
                />
              </div>
              <div className="">
                <h3 className="text-[14px] md:text-lg font-semibold mb-2">
                  Message Me
                </h3>
                <p className="text-sm text-primary-100">Joey Rhys</p>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-950 rounded-xl w-full shadow-lg p-0 md:p-5 flex flex-col gap-5 space-y-10"
          >
            <div>
              <label
                className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 border-b border-gray-400 hover:border-green-400 focus:border-green-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-0"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 border-b border-gray-400 hover:border-green-400 focus:border-green-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-0"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="w-full px-4 py-3 border-b border-gray-400 hover:border-green-400 focus:border-green-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-0"
                placeholder="Subject"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2"
                htmlFor="description"
              >
                Message
              </label>
              <input
                id="message"
                name="message"
                type="text"
                required
                className="w-full px-4 py-3 border-b border-gray-400 hover:border-green-400 focus:border-green-600 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-0"
                placeholder="Subject"
              />
            </div>
            <button className="px-4 py-3 cursor-pointer rounded-md bg-green-800 text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
