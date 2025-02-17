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
    title: "Purity",
    image: Purity,
    description: "Ethical Practices and Environmental Consumers",
  },
  {
    id: 3,
    title: "Transparency",
    image: Transparency,
    description: "Transparent Sourcing and Environmental Stewardship",
  },
];

export default function CompanyValue(props) {
  return (
    <div className={`${props.margin ? "my-10 md:my-14 lg:my-20" : null}`}>
      <div className="py-10 bg-primary-beige-100">
        <div className="container-margin ">
          <div className="flex flex-col gap-10 sm:flex-row justify-evenly">
            {values.map((value) => (
              <div
                key={value.id}
                className="flex flex-col items-center sm:w-1/3"
              >
                <Image
                  width={92}
                  height={92}
                  className="w-full max-w-[60px]"
                  src={value.image}
                  alt={value.title}
                />
                <h3 className="mt-3 text-[28px] text-primary-green-400 font-markaziText text-primary-dark-100">
                  {value.title}
                </h3>
                <p className="text-base font-medium max-w-[246px] text-black-shade-200 text-center text-primary-dark-200">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
