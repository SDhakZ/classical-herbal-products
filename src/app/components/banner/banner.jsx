import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative flex items-center justify-center">
      <picture className="block w-full h-full">
        <source
          media="(max-width:540px)"
          srcSet={`/assets/About/our-journey-mobile.png`}
        />
        <source
          media="(max-width:1020px)"
          srcSet={`/assets/About/our-journey-tablet.png`}
        />
        <source srcSet={`/assets/About/our-journey-desktop.png`} />
        <Image
          width={1920}
          height={560}
          className="block w-full"
          src={`/assets/About/our-journey-desktop.png`}
          alt="banner image"
        />
      </picture>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="px-10 mx-5 py-6 text-center rounded-lg bg-[#1212129c]">
          <h1 className="text-4xl font-normal font-markaziText lg:text-6xl md:text-4xl text-white-shade-100">
            Our Journey
          </h1>
          <p className="text-base sm:text-lg max-w-[400px] text-white-shade-200 mt-3  font-normal">
            We cultivate the bond between people and plants, bringing you the
            pure essence of Nature's vitality.
          </p>
        </div>
      </div>
    </div>
  );
}
