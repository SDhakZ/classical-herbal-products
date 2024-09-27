"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HighLight(props) {
  const { image, title, description, color } = props;

  // State to track if window is available and window width
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    // Function to handle window resize and set isCompact
    const handleResize = () => {
      setIsCompact(window.innerWidth >= 660);
    };

    // Check if window is defined (runs only on client side)
    if (typeof window !== "undefined") {
      handleResize(); // Set initial state based on current window width
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div
      className={
        isCompact ? "container-margin-compact margin-t padding-y-lg" : null
      }
    >
      <div className="flex justify-center w-full">
        <div className="flex flex-col max-w-[500px] min-[769px]:max-w-none w-full md:flex-row">
          <div className="w-full md:w-1/2 min-[769px]:h-auto">
            <Image
              width={769}
              height={769}
              className="w-full"
              alt={title}
              src={image}
            ></Image>
          </div>

          <div
            style={{ backgroundColor: color }}
            className="flex flex-col justify-center flex-1 gap-2 px-6 py-8 md:gap-3 lg:gap-6 md:px-9 md:py-6 lg:px-20 lg:py-10"
          >
            <h2 className="text-2xl leading-8 text-center md:text-left md:text-3xl md:leading-7 lg:text-5xl text-white-shade-100 font-markaziText">
              {title}
            </h2>
            <p className="text-sm text-center sm:text-sm md:text-left md:text-base text-white-shade-200 lg:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
