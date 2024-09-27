import React from "react";
import CompanyValue from "@/app/components/companyValue/companyValue";
import Image from "next/image";
import Link from "next/link";

export default function featureSection() {
  return (
    <div className="margin-y">
      <div className="bg-contain bg-green-textured-background padding-y-lg">
        <div className="flex flex-col items-center justify-between gap-10 sm:flex-row container-margin-compact ">
          <Image
            src={"/assets/Home/featureimg1.webp"}
            className="w-full rounded-md sm:w-1/2 "
            width={500}
            height={500}
            alt="feature"
          />
          <div className="flex flex-col gap-2 w-full max-w-[490px]">
            <h2 className="mt-2 text-3xl font-medium sm:text-4xl font-markaziText text-white-shade-100">
              Immunity Supportive Tea
            </h2>
            <p className="mt-2 text-white-shade-100">
              Boost your defenses with our Immunity Supportive Tea, crafted with
              a blend of powerful herbs and natural ingredients to help
              strengthen your immune system and keep you feeling your best.
            </p>
            <Link
              className="flex items-center justify-center px-8 pt-4 pb-3 mt-5 font-medium leading-none transition-colors duration-150 rounded-md hover:text-primary-green-200 sm:w-fit bg-white-shade-100 text-black-shade-300"
              href="/about"
            >
              View Product
            </Link>
          </div>
        </div>
      </div>
      <CompanyValue margin={false} />
      <div className="bg-contain bg-brown-textured-background padding-y-lg">
        <div className="flex flex-col items-center justify-between object-cover gap-10 sm:flex-row-reverse container-margin-compact ">
          <Image
            src={"/assets/Home/featureimg2.webp"}
            className="w-full rounded-md sm:w-1/2 "
            width={500}
            height={500}
            alt="feature"
          />
          <div className="flex flex-col gap-2 w-full max-w-[490px]">
            <h2 className="mt-2 text-3xl font-medium sm:text-4xl font-markaziText text-white-shade-100">
              Immunity Supportive Tea
            </h2>
            <p className="mt-2 text-white-shade-100">
              Boost your defenses with our Immunity Supportive Tea, crafted with
              a blend of powerful herbs and natural ingredients to help
              strengthen your immune system and keep you feeling your best.
            </p>
            <Link
              className="flex items-center justify-center px-8 pt-4 pb-3 mt-5 font-medium leading-none transition-colors duration-150 rounded-md hover:text-primary-green-200 sm:w-fit bg-white-shade-100 text-black-shade-300"
              href="/about"
            >
              View Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
