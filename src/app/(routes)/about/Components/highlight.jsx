"use client";
import React, { useState, useEffect } from "react";

export default function HighLight(props) {
  const { image, title, description, color } = props;
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCompact(window.innerWidth >= 660);
    };

    // Initial check
    handleResize();

    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={`${
        isCompact ? "container-margin-compact margin-t padding-y-lg" : null
      }`}
    >
      <div className="flex justify-center w-full">
        <div className="flex flex-col max-w-[500px] min-[769px]:max-w-none w-full md:flex-row">
          <div className="w-full md:w-1/2 min-[769px]:h-auto ">
            <img className="w-full " src={image}></img>
          </div>

          <div
            style={{ backgroundColor: color }}
            className={`flex flex-1 justify-center flex-col gap-2 md:gap-3 lg:gap-6 md:px-9 px-6 py-8  md:py-6  lg:px-20 lg:py-10`}
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
