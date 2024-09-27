import React from "react";
import Image from "next/image";

export default function Banner(props) {
  const { title, description, image } = props;
  return (
    <div className="relative flex items-center justify-center">
      <picture className="block w-full h-full">
        <source media="(max-width:540px)" srcSet={`/${image}-mobile.webp`} />
        <source media="(max-width:1020px)" srcSet={`/${image}-tablet.webp`} />
        <source srcSet={`/${image}-desktop.webp`} />
        <Image
          width={1920}
          height={560}
          className="block w-full"
          src={`/${image}-desktop.webp`}
          alt={title}
        />
      </picture>

      <div className="absolute inset-0 flex flex-col items-center justify-center w-full">
        <div className="px-4 sm:px-10 mx-5 flex flex-col items-center justify-center py-6 text-center rounded-lg bg-[#121212b9]">
          <h1 className="text-3xl font-normal leading-6 sm:text-4xl font-markaziText lg:text-5xl md:text-4xl text-white-shade-100">
            {title}
          </h1>
          <p className="text-sm sm:text-base  max-w-[400px] text-white-shade-200 mt-3 font-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
