import React from "react";
import PlantPower from "../../assets/CompanyValue/plant-power.png";
import Transparency from "../../assets/CompanyValue/transparency.png";
import Purity from "../../assets/CompanyValue/purity.png";
import Image from "next/image";

const values = [
  {
    id: 1,
    title: "Plant Power",
    image: PlantPower,
    description: "Drawing on Ancient Wisdom, Bringing Nature's Power",
  },
  {
    id: 2,
    title: "Transparency",
    image: Transparency,
    description: "Transparent Sourcing and Environmental Stewardship",
  },
  {
    id: 3,
    title: "Purity",
    image: Purity,
    description: "Ethical Practices and Environmental Consumers",
  },
];

export default function CompanyValue() {
  return (
    <div className="py-16 bg-primary-beige-100">
      <div className="container-margin ">
        <div className="flex flex-col gap-10 sm:flex-row justify-evenly">
          {values.map((value) => (
            <div
              key={value.id}
              className="flex flex-col items-center gap-2 sm:w-1/3"
            >
              <Image
                width={92}
                height={92}
                className="w-full max-w-24"
                src={value.image}
                alt={value.title}
              />
              <h3 className="mt-1 text-3xl text-primary-green-400 font-markaziText text-primary-dark-100">
                {value.title}
              </h3>
              <p className="text-base max-w-[246px] text-black-shade-200 text-center text-primary-dark-200">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
