import React from "react";

export default function InfoHub(props) {
  const { image, title, description, color } = props;
  return (
    <div
      className={`${
        window.innerWidth > 660 ? "container-margin-compact section-y" : ""
      }`}
    >
      <div className="flex justify-center w-full">
        <div className="flex flex-col max-w-[500px] min-[769px]:max-w-none w-full md:flex-row">
          <div className="w-full md:w-1/2 min-[769px]:h-auto ">
            <img className="w-full " src={image}></img>
          </div>

          <div
            style={{ backgroundColor: color }}
            className={`flex flex-1 justify-center flex-col gap-4 md:gap-3 lg:gap-6 md:px-9 px-6 py-6  md:py-6  lg:px-20 lg:py-10`}
          >
            <h2 className="text-3xl md:text-3xl md:leading-7 lg:text-5xl text-white-shade-100 font-markaziText">
              {title}
            </h2>
            <p className="sm:text-sm md:text-base text-white-shade-200 lg:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
