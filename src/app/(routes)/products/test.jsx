"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Banner from "@/app/components/banner/banner";
import { productData } from "@/app/data/productData";
import { groupProductsByTarget } from "@/app/utility/GroupProductsByTarget";
import ProductCard from "./Components/productCard";
import { generateSlug } from "@/app/utility/GenerateSlug";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCheck } from "@fortawesome/free-solid-svg-icons";
import Pagination from "@/app/components/pagination/pagination";

const groupedProducts = groupProductsByTarget();
const targetNames = Object.keys(groupedProducts);

export default function ProductPage() {
  const [selectedSort, setSelectedSort] = useState("Relevance");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState([]);
  const [availableTargets, setAvailableTargets] = useState(targetNames);
  const [pharmaceutical, setPharmaceutical] = useState(null);

  const [paginatedItems, setPaginatedItems] = useState([]);
  const [pagination, setPagination] = useState({ start: 0, end: 9 });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    updateAvailableTargets(category);
  };

  const updateAvailableTargets = (category) => {
    if (category) {
      const categoryProducts =
        productData.find((item) => item.slug === category)?.products || [];
      const newTargets = categoryProducts.reduce((acc, product) => {
        const targets = Array.isArray(product.target)
          ? product.target
          : [product.target];
        targets.forEach((target) => {
          if (!acc.includes(target)) acc.push(target);
        });
        return acc;
      }, []);
      setAvailableTargets(newTargets);
    } else {
      setAvailableTargets(targetNames);
    }
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
    setPharmaceutical(null);
    setAvailableTargets(targetNames); // Reset targets to all when filters are cleared
  };

  const removeTargetFilter = (target) => {
    setSelectedTarget((prev) => prev.filter((t) => t !== target));
  };

  const sortProducts = (products) => {
    switch (selectedSort) {
      case "Alpha A-Z":
        return products.sort((a, b) => a.title.localeCompare(b.title));
      case "Alpha Z-A":
        return products.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products;
    }
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

  const sortedProducts = sortProducts(filteredProducts);

  useEffect(() => {
    const updatePaginatedItems = sortedProducts.slice(
      pagination.start,
      pagination.end
    );
    setPaginatedItems(updatePaginatedItems);
  }, [sortedProducts, pagination]);

  const onPaginationChange = useCallback((start, end) => {
    setPagination({ start, end });
  }, []);

  const start = pagination.start + 1;
  const end = Math.min(pagination.end, sortedProducts.length);

  const sortOptions = [
    { id: 1, name: "Relevance" },
    { id: 2, name: "Alpha A-Z" },
    { id: 3, name: "Alpha Z-A" },
  ];

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
              <p className="text-2xl underline font-markaziText text-primary-green-400 underline-offset-8 decoration-[#a77e5d80]">
                Category
              </p>
              <ul className="mt-4 space-y-1">
                {productData.map((item, index) => (
                  <li
                    key={index}
                    className={`font-medium text-[15px] ${
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
              <p className="text-2xl underline font-markaziText text-primary-green-400 underline-offset-8 decoration-[#a77e5d80]">
                Targeted Health Products
              </p>
              <ul className="mt-4 space-y-1">
                {availableTargets.map((target, index) => (
                  <li
                    key={index}
                    className={`font-medium text-[15px] ${
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
              <p className="text-2xl underline font-markaziText text-primary-green-400 underline-offset-8 decoration-[#a77e5d80]">
                Type
              </p>
              <ul className="mt-4 space-y-1">
                <li
                  className={`font-medium text-[15px] ${
                    pharmaceutical === "Pharmaceutical"
                      ? "text-primary-green-100"
                      : "text-primary-green-300"
                  } cursor-pointer`}
                  onClick={() => handlePharmaceuticalChange("Pharmaceutical")}
                >
                  Pharmaceutical
                </li>
                <li
                  className={`font-medium text-[15px] ${
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
                        <span className="font-medium capitalize text-black-shade-200 decoration-2 group-hover:line-through">
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
                      onClick={() => removeTargetFilter(target)}
                      className="px-2 gap-2 group flex items-center py-1 rounded cursor-pointer border border-[#c2c2c2]  decoration-black-shade-300 bg-[#F3F0EB] text-primary-green-600"
                    >
                      <div className="mt-[0.5px] decoration-2 text-sm font-medium">
                        Target:{" "}
                        <span className="font-medium capitalize text-black-shade-200 decoration-2 group-hover:line-through">
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
                      onClick={() => setPharmaceutical(null)}
                      className="px-2 gap-2 group flex items-center py-1 rounded cursor-pointer border border-[#c2c2c2]  decoration-black-shade-300 bg-[#F3F0EB] text-primary-green-600"
                    >
                      <div className="mt-[0.5px] decoration-2 text-sm font-medium">
                        Type:{" "}
                        <span className="font-medium capitalize text-black-shade-200 decoration-2 group-hover:line-through">
                          {pharmaceutical}
                        </span>
                      </div>
                      <FontAwesomeIcon
                        className="text-xs leading-none text-black-shade-100"
                        icon={faClose}
                      />
                    </div>
                  )}
                  <div
                    className="px-2 gap-2 group flex items-center py-1 rounded cursor-pointer border border-[#c2c2c2] decoration-black-shade-300 bg-[#F3F0EB] text-black-shade-300"
                    onClick={clearFilters}
                  >
                    <div className="text-sm font-medium">Clear All</div>
                    <FontAwesomeIcon
                      className="text-xs leading-none text-black-shade-200"
                      icon={faClose}
                    />
                  </div>
                </div>
              </div>
            ) : null}

            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3 sm:grid-cols-2">
              {paginatedItems.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <Pagination
                totalItems={sortedProducts.length}
                itemsPerPage={9}
                currentStart={pagination.start}
                onPaginationChange={onPaginationChange}
              />
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  Showing {start} to {end} of {sortedProducts.length} items
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
