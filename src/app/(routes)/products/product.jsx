"use client";
import React, { useState } from "react";
import Banner from "@/app/components/banner/banner";
import { productData } from "@/app/data/productData";
import { groupProductsByTarget } from "@/app/utility/GroupProductsByTarget";
import ProductCard from "./Components/productCard";
import { generateSlug } from "@/app/utility/GenerateSlug";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const featuredProducts = [
  { id: "f1", title: "Herbal Tea", url: "herbal-tea" },
  { id: "f2", title: "Natural Ashwagandha", url: "herbal-tea" },
  { id: "f3", title: "Ayodhya Shilajit", url: "herbal-tea" },
  { id: "f4", title: "Aromatic Herbal Tea", url: "herbal-tea" },
];

const groupedProducts = groupProductsByTarget();
const targetNames = Object.keys(groupedProducts);

export default function ProductPage(props) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState([]);
  const [pharmaceutical, setPharmaceutical] = useState(null); // New state for pharmaceutical filter

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTargetChange = (target) => {
    setSelectedTarget((prev) =>
      prev.includes(target)
        ? prev.filter((t) => t !== target)
        : [...prev, target]
    );
  };

  const handlePharmaceuticalChange = (type) => {
    setPharmaceutical(type);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedTarget([]);
    setPharmaceutical(null); // Clear pharmaceutical filter
  };

  const removeTargetFilter = (target) => {
    setSelectedTarget((prev) => prev.filter((t) => t !== target));
  };

  const filteredProducts = productData.flatMap((category) =>
    category.products
      .filter(
        (product) =>
          (!selectedCategory || category.slug === selectedCategory) &&
          (selectedTarget.length === 0 ||
            (Array.isArray(product.target)
              ? product.target.some((t) => selectedTarget.includes(t))
              : selectedTarget.includes(product.target))) &&
          (pharmaceutical === null ||
            (pharmaceutical === "Pharmaceutical" && product.pharmaceutical) ||
            (pharmaceutical === "Non-Pharmaceutical" &&
              !product.pharmaceutical))
      )
      .map((product) => ({
        ...product,
        slug: generateSlug(product.title),
        categorySlug: category.slug,
      }))
  );

  return (
    <>
      <Banner
        title="Explore Our Herbal Collection"
        description="Discover the essence of nature in every product. At Classical Herbal Products, we offer a carefully curated selection of herbal remedies, crafted to bring balance and vitality to your life."
        image="assets/Products/Banners/all-products"
      />
      <div className="container-margin-compact padding-y-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <aside className="flex flex-col col-span-1 gap-6 md:col-span-1">
            <div className="flex flex-col">
              <p className="text-2xl underline font-markaziText text-primary-green-400 underline-offset-8 decoration-primary-beige-300">
                Category
              </p>
              <ul className="mt-4 space-y-1">
                {productData.map((item, index) => (
                  <li
                    key={index}
                    className={`font-medium ${
                      selectedCategory === item.slug
                        ? "text-primary-green-100"
                        : "text-primary-green-300"
                    } cursor-pointer`}
                    onClick={() => handleCategoryChange(item.slug)}
                  >
                    {item.category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl underline font-markaziText text-primary-green-400 underline-offset-8 decoration-primary-beige-300">
                Targeted Health Products
              </p>
              <ul className="mt-4 space-y-1">
                {targetNames.map((target, index) => (
                  <li
                    key={index}
                    className={`font-medium ${
                      selectedTarget.includes(target)
                        ? "text-primary-green-100"
                        : "text-primary-green-300"
                    } cursor-pointer`}
                    onClick={() => handleTargetChange(target)}
                  >
                    {target}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl underline font-markaziText text-primary-green-400 underline-offset-8 decoration-primary-beige-300">
                Type
              </p>
              <ul className="mt-4 space-y-1">
                <li
                  className={`font-medium ${
                    pharmaceutical === "Pharmaceutical"
                      ? "text-primary-green-100"
                      : "text-primary-green-300"
                  } cursor-pointer`}
                  onClick={() => handlePharmaceuticalChange("Pharmaceutical")}
                >
                  Pharmaceutical
                </li>
                <li
                  className={`font-medium ${
                    pharmaceutical === "Non-Pharmaceutical"
                      ? "text-primary-green-100"
                      : "text-primary-green-300"
                  } cursor-pointer`}
                  onClick={() =>
                    handlePharmaceuticalChange("Non-Pharmaceutical")
                  }
                >
                  Non-Pharmaceutical
                </li>
              </ul>
            </div>
          </aside>

          <section className="col-span-3">
            {selectedCategory || selectedTarget.length > 0 || pharmaceutical ? (
              <div className="mb-4">
                <p className="text-lg font-medium">Applied Filters:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedCategory && (
                    <div
                      onClick={() => setSelectedCategory(null)}
                      className="px-2 gap-2 group flex items-center py-1 rounded cursor-pointer border border-[#c2c2c2]  decoration-black-shade-300 bg-[#F3F0EB] text-primary-green-600"
                    >
                      <div className="mt-[0.5px] decoration-2 text-sm font-medium">
                        Category:{" "}
                        <span className="font-normal capitalize decoration-2 group-hover:line-through">
                          {selectedCategory}
                        </span>
                      </div>
                      <FontAwesomeIcon
                        className="text-xs leading-none text-black-shade-100"
                        icon={faClose}
                      />
                    </div>
                  )}
                  {selectedTarget.map((target) => (
                    <div
                      key={target}
                      className="px-2 gap-2 group flex items-center py-1 rounded cursor-pointer border border-[#c2c2c2]  decoration-black-shade-300 bg-[#F3F0EB] text-primary-green-600"
                      onClick={() => removeTargetFilter(target)}
                    >
                      <div className="mt-[0.5px] decoration-2 text-sm font-medium">
                        Target:{" "}
                        <span className="font-normal capitalize decoration-2 group-hover:line-through">
                          {target}
                        </span>
                      </div>
                      <FontAwesomeIcon
                        className="text-xs leading-none text-black-shade-100"
                        icon={faClose}
                      />
                    </div>
                  ))}
                  {pharmaceutical && (
                    <div
                      className="px-2 gap-2 group flex items-center py-1 rounded cursor-pointer border border-[#c2c2c2]  decoration-black-shade-300 bg-[#F3F0EB] text-primary-green-600"
                      onClick={() => handlePharmaceuticalChange(null)}
                    >
                      <div className="mt-[0.5px] decoration-2 text-sm font-medium">
                        Type:{" "}
                        <span className="font-normal capitalize decoration-2 group-hover:line-through">
                          {pharmaceutical}
                        </span>
                      </div>
                      <FontAwesomeIcon
                        className="text-xs leading-none text-black-shade-100"
                        icon={faClose}
                      />
                    </div>
                  )}
                  <button
                    className="px-3 py-1 text-sm font-medium text-red-400 "
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            ) : null}
            <div className="flex justify-between w-full mb-4 h-fit col-span-full">
              <p className="text-primary-green-300">
                Showing{" "}
                <span className="font-medium">
                  {filteredProducts.length} products
                </span>
              </p>
              <p className="text-primary-green-300">Sort By Relevance</p>
            </div>
            <div className="grid grid-cols-1 col-span-1 gap-4 gap-y-14 md:col-span-3 sm:grid-cols-2 md:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  link={product.slug}
                  title={product.title}
                  image={`/assets/Products/${product.categorySlug}/${product.slug}/${product.image}`} // Use categorySlug here
                  brief={product.brief}
                  bestSeller={product.bestSeller || false}
                  key={index}
                  index={index}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
