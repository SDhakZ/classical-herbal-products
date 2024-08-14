import React from "react";

const aboutOptions = [
  {
    title: "Sustainability in Nature",
    description:
      "At Classical Herbal Products, sustainability drives everything we do. We responsibly source ingredients and support our communities, committed to healing the Earth.",
    icon: "/assets/About/icons/nature.png",
    ctaMessage: "See our efforts",
    url: "/about/sustainability-in-nature",
  },
  {
    title: "Purity, Potency, Integrity",
    description:
      "We blend the power of plants with traditional wisdom and scientific formulation, ensuring rigorous testing at every stage of our process.",
    icon: "/assets/About/icons/purity.png",
    ctaMessage: "Experience Unrivaled Quality ",
    url: "/about/purity-potency-interity",
  },
  {
    title: "Transparency in Sourcing",
    description:
      "We delve deep into responsible sourcing, traveling far and wide to partner with farmers who understand the land, soil, and plants like no one else.",
    icon: "/assets/About/icons/transparency.png",
    ctaMessage: "Peek at the ingredients",
    url: "/about/transparency-in-sourcing",
  },
];

export default function AboutCard() {
  return (
    <div className="container-margin-compact padding-y-lg">
      <div className="flex flex-col gap-8 sm:gap-14">
        <h2 className="text-4xl text-center sm:text-5xl md:text-5xl font-markaziText text-primary-green-300">
          Why Classical Herb Products?
        </h2>
        <div className="flex flex-col flex-wrap items-center justify-center w-full lg:justify-evenly lg:flex-nowrap sm:flex-row gap-14">
          {aboutOptions.map((option, index) => (
            <div
              key={index}
              className="px-4 flex border-2 border-primary-green-200 justify-between h-full min-h-[370px] flex-col items-center  w-full max-w-[300px] py-6 rounded-md bg-primary-beige-200"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center w-[80px] justify-center">
                  <img src={option.icon} alt={`${option.title} icon`} />
                </div>
                <h3 className="mt-4 text-xl font-medium text-center text-primary-green-500">
                  {option.title}
                </h3>
                <p className="mt-3 text-base text-center text-black-shade-200">
                  {option.description}
                </p>
              </div>
              <a
                className="mt-5 hover:text-black-shade-300 transition-colors duration-500 font-medium text-[14px] text-center underline uppercase text-black-shade-100 underline-offset-4"
                href={option.url}
              >
                {option.ctaMessage}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
