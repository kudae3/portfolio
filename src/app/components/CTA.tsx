import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <div className="md:w-1/2 space-y-10 mb-10 md:mb-0 p-0 md:p-10">
      <div className="grid grid-cols-2">
        <div className="h-14 flex items-center justify-center mx-auto mb-4">
          <Image
            className="w-full h-full object-cover"
            width={56}
            height={56}
            src="/socials/Gmail.gif"
            alt=""
          />
        </div>
        <div className="text-white">
          <h3 className="text-[14px] md:text-lg font-semibold mb-2">
            Email Me
          </h3>
          <p className="text-xs md:text-[14px] ">kudaesithu2@gmail.com</p>
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
        <div className="text-white">
          <h3 className="text-[14px] md:text-lg font-semibold mb-2">Call Me</h3>
          <p className="text-xs md:text-[14px] ">(+95)9751025121</p>
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
        <div className="text-white">
          <h3 className="text-[14px] md:text-lg font-semibold mb-2">
            Message Me
          </h3>
          <p className="text-xs md:text-[14px] ">Joey Rhys</p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
