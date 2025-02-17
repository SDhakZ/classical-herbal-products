"use client";
import React from "react";
import Image from "next/image";

export default function roductCard(props) {
  const { index, link, image, title, brief, bestSeller } = props;
  return (
    <a key={index} href={`/products/${link}`} className="w-full group">
      <div className="bg-[#F3F0EB] flex-col py-4 px-4 w-full max-w-[450px] flex overflow-hidden rounded-sm justify-center items-center ">
        {bestSeller ? (
          <span className="self-end px-3 py-2 text-xs font-medium leading-none uppercase rounded-full text-white-shade-100 bg-primary-green-200">
            Best Seller
          </span>
        ) : (
          <span className="self-end invisible px-3 py-2 text-xs font-medium leading-none rounded-md text-white-shade-100 bg-primary-green-200">
            Best Seller
          </span>
        )}
        <Image
          width={200}
          height={200}
          className="w-full overflow-hidden rounded-sm max-w-[200px]"
          src={image}
          alt={title}
        />
      </div>
      <p className="mt-3 text-[25px] font-medium transition-colors duration-150 group-hover:text-primary-green-100 font-markaziText text-primary-green-400">
        {title}
      </p>
      <p className="text-sm font-medium leading-5  text-black-shade-200">
        {brief}
      </p>
    </a>
  );
}
