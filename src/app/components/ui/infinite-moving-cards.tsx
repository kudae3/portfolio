"use client";

import React, { JSX, useEffect, useState } from "react";
import { cn } from "../../../../lib/utils";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    name: JSX.Element;
    icon: JSX.Element;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-start px-[23px] h-[110px] lg:h-[130px] rounded-[20px] flex justify-start lg:justify-center items-center gap-5 md:gap-3"
          >
            <div className="">
              <h4 className="text-xs md:text-sm font-semibold mb-2">
                {item.title}
              </h4>
              <div className="text-gray-300 text-[9px] sm:text-xs md:text-[13px]">
                <div className="flex justify-start items-center gap-1 font-extrabold ">
                  {item.icon}
                  {item.name}
                </div>
              </div>
            </div>
            <div>
              <Image
                width={80}
                height={80}
                src={item.image}
                alt={item.title}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
