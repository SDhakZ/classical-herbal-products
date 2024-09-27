import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const testingDefaultData = {
  defaultImage: "/assets/About/purity/purity-testing.webp",
  defaultTypes: [
    "Microbial Testing",
    "Heavy Metal Testing",
    "Purity Testing",
    "Pesticide Testing",
    "Strength Testing",
  ],
};

export default function TestingsSection({
  image = testingDefaultData.defaultImage,
  types = testingDefaultData.defaultTypes,
}) {
  return (
    <div className="container-margin-compact padding-y-lg">
      <div className="flex flex-col-reverse items-center gap-6 md:flex-row sm:justify-between sm:gap-12">
        <div className="w-full space-y-5 md:space-y-6">
          <div className="text-4xl text-center md:text-left font-markaziText text-primary-green-400">
            Testings done
          </div>
          <ul className="flex flex-col w-full md:max-w-[600px] sm:min-w-[400px] ">
            {types.map((testing, index) => (
              <li
                key={index}
                className={`w-full flex justify-between gap-6 ${
                  index % 2 == 0 ? "bg-[#FFFDFB]" : "bg-[#F0EEE2]"
                } p-5 sm:p-7 font-medium text-black-shade-200 text-base sm:text-lg `}
              >
                {testing}
                <div className="flex items-center gap-3 ">
                  <span className="mt-[2px] text-sm font-medium leading-none text-primary-green-300">
                    PASSED
                  </span>{" "}
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    className="text-xl leading-none text-primary-green-200"
                  ></FontAwesomeIcon>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex justify-center w-full max-w-[250px] pb-10 sm:max-w-[300px] md:max-w-[500px]">
          <Image
            width={370}
            height={370}
            loading="lazy"
            decoding="async"
            alt="Active section"
            className="relative z-0 w-full max-w-[370px] h-auto rounded-sm"
            src="/testingBackground.png"
          />
          <Image
            width={370}
            height={370}
            loading="lazy"
            decoding="async"
            alt="Active section"
            className="absolute z-10 w-full max-w-[370px] -bottom-5  left-1/2 -translate-x-1/2 rounded-sm"
            src={image}
          />
        </div>
      </div>
    </div>
  );
}
