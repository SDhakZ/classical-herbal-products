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
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Pagination from "@/app/components/pagination/pagination";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const groupedProducts = groupProductsByTarget();
const targetNames = Object.keys(groupedProducts);

export default function ProductPage() {
  const [selectedSort, setSelectedSort] = useState("Relevance");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState([]);
  const [pharmaceutical, setPharmaceutical] = useState(null);

  const [paginatedItems, setPaginatedItems] = useState([]);
  const [pagination, setPagination] = useState({ start: 0, end: 9 });

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
                {targetNames.map((target, index) => (
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
                      className="px-2 gap-2 group flex items-center py-1 rounded cursor-pointer border border-[#c2c2c2]  decoration-black-shade-300 bg-[#F3F0EB] text-primary-green-600"
                      onClick={() => removeTargetFilter(target)}
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
                      className="px-2 gap-2 group flex items-center py-1 rounded cursor-pointer border border-[#c2c2c2]  decoration-black-shade-300 bg-[#F3F0EB] text-primary-green-600"
                      onClick={() => handlePharmaceuticalChange(null)}
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
                  <button
                    className="px-3 py-1 text-sm font-medium text-red-500 "
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            ) : null}
            <div className="flex items-center justify-between w-full mb-4 h-fit col-span-full">
              <p className="text-sm font-medium text-primary-green-200">
                Showing {start}-{end} of{" "}
                <span className="font-semibold text-primary-green-300">
                  {filteredProducts.length} products
                </span>
              </p>
              <p className="text-[15px] font-medium text-primary-green-200">
                Sorted by:{" "}
                <Listbox value={selectedSort} onChange={setSelectedSort}>
                  {({ open }) => (
                    <>
                      <ListboxButton className="font-medium text-primary-green-300">
                        {selectedSort}
                      </ListboxButton>
                      <AnimatePresence>
                        {open && (
                          <ListboxOptions
                            static
                            as={motion.div}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            anchor="bottom"
                            className="px-1 py-1 mt-2 origin-top rounded-lg bg-[#fffffff5]"
                          >
                            {sortOptions.map((option) => (
                              <ListboxOption
                                key={option.id}
                                value={option.name}
                                className="data-[focus]:bg-primary-beige-100 group cursor-pointer font-medium text-black-shade-200 text-[15px] pl-2 pr-4 py-1 rounded-md"
                              >
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  className="text-sm mr-2 text-primary-green-200 invisible  group-data-[selected]:visible"
                                />
                                {option.name}
                              </ListboxOption>
                            ))}
                          </ListboxOptions>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </Listbox>
              </p>
            </div>
            <div className="grid grid-cols-1 col-span-1 gap-4 gap-y-14 md:col-span-3 sm:grid-cols-2 md:grid-cols-3">
              {paginatedItems.map((product, index) => (
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
        <section className="margin-t">
          <Pagination
            showPerPage={9}
            onPaginationChange={onPaginationChange}
            total={filteredProducts.length}
          />
        </section>
      </div>
    </>
  );
}
