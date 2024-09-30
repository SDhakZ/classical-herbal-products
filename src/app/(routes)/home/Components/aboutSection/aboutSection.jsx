import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="padding-y-lg bg-primary-beige-100 ">
      <div className="flex flex-col items-center justify-between gap-10 sm:flex-row container-margin-compact">
        <Image
          src="/assets/Home/HomeAboutSection.webp"
          width={771}
          height={637}
          alt="About Us"
          className="w-full rounded-md sm:w-1/2"
        />
        <div className="flex flex-col gap-2 w-full max-w-[520px]">
          <p className="text-[15px] tracking-wider text-primary-green-400">
            OUR UNIQUE APPROACH
          </p>
          <h2 className="mt-2 text-4xl font-medium font-markaziText text-primary-green-400">
            What is so special about us?
          </h2>
          <p className="mt-2 text-black-shade-200">
            At Classical Herbal Products, we believe in the power of nature to
            heal and rejuvenate. Our journey began with a simple yet profound
            mission: to provide high-quality, natural herbal products that
            enhance the well-being of our customers. Rooted in tradition and
            backed by modern research, each of our products is carefully crafted
            using time-honored methods passed down through generations.
          </p>
          <Link
            className="flex items-center justify-center px-8 py-4 mt-5 font-medium leading-none transition-colors duration-150 rounded-md hover:text-primary-green-200 sm:w-fit bg-white-shade-100 text-black-shade-300"
            href="/about"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
}
