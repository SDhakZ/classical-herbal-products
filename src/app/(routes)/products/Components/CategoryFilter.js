import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-col">
      <p className="text-2xl underline font-markaziText text-primary-green-400 underline-offset-8 decoration-[#a77e5d80]">
        Category
      </p>
      <ul className="mt-4 space-y-1">
        {categories.map((item, index) => (
          <li
            key={index}
            className={`font-medium text-[15px] ${
              selectedCategory === item.slug
                ? "text-primary-green-100"
                : "text-primary-green-300"
            } cursor-pointer`}
            onClick={() => onSelectCategory(item.slug)}
          >
            {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
