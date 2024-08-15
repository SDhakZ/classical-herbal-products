import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

export default function TestingsSection(props) {
  const testingDefaultData = {
    image: "/assets/About/purity/purity-testing.png",
    types: [
      "Microbial Testing",
      "Heavy Metal Testing",
      "Purity Testing",
      "Pesticide Testing",
      "Strength Testing",
    ],
  };
  const { testingData } = props;
  return (
    <div className="container-margin-compact padding-y-lg">
      <div className="flex flex-col-reverse items-center gap-6 md:flex-row sm:justify-between sm:gap-12">
        <div className="w-full space-y-5 md:space-y-6">
          <div className="text-4xl text-center md:text-left font-markaziText text-primary-green-400">
            Testings done
          </div>
          <ul className="flex flex-col w-full md:max-w-[600px] sm:min-w-[400px] ">
            {testingData
              ? testingData.types.map((testing, index) => (
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
                ))
              : testingDefaultData.types.map((testing) => (
                  <li key={testing} className="w-full text-primary-green-200">
                    {testing}
                  </li>
                ))}
          </ul>
        </div>
        <div className="relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-[500px]">
          <img
            loading="lazy"
            decoding="async"
            alt="Active section"
            className="w-full h-auto rounded-sm"
            src={testingData ? testingData.image : testingDefaultData.image}
          />
        </div>
      </div>
    </div>
  );
}
