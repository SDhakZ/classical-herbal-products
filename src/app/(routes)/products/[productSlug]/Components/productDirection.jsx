import React from "react";
import Image from "next/image";

export default function ProductDirection({ direction }) {
  return (
    <div className=" margin-y container-margin-compact">
      <h2 className="text-4xl leading-8 text-center md:text-5xl font-markaziText text-primary-green-400">
        Direction to enjoy your product
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 mt-10 sm:gap-16 sm:mt-14 md:mt-16">
        {direction.map((direction, index) => (
          <div
            className="px-2 overflow-hidden bg-primary-beige-200 rounded-[24px]  h-full min-h-[300px] flex flex-col items-center justify-start border-[#968261] gap-2 border-[3px]  relative pt-2 pb-4 w-full max-w-[280px]"
            key={index}
          >
            <div className="w-10  absolute top-3 flex items-center justify-center left-3 h-10 border-[3px] rounded-full border-[#968261]">
              <p className="mt-1 font-semibold leading-none text-black-shade-300">
                {direction.specialCondition ? "!" : `${index + 1}`}
              </p>
            </div>
            <Image
              src={`/assets/Products/DirectionIcons/${direction.icon}`}
              width={134}
              height={169}
              className="w-full max-w-[120px]"
              alt={direction.title}
            />
            <p className="text-2xl font-medium md:text-3xl font-markaziText text-black-shade-300">
              {direction.title}
            </p>
            <p className="text-center font-medium text-black-shade-200 w-full max-w-[220px]">
              {direction.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
