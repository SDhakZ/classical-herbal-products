import React from "react";

const TargetFilter = ({ targets, selectedTargets, onSelectTarget }) => {
  return (
    <div className="flex flex-col">
      <p className="text-2xl underline font-markaziText text-primary-green-400 underline-offset-8 decoration-[#a77e5d80]">
        Targeted Health Products
      </p>
      <ul className="mt-4 space-y-1">
        {targets.map((target, index) => (
          <li
            key={index}
            className={`font-medium text-[15px] ${
              selectedTargets.includes(target)
                ? "text-primary-green-100"
                : "text-primary-green-300"
            } cursor-pointer`}
            onClick={() => onSelectTarget(target)}
          >
            {target}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TargetFilter;
