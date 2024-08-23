"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Banner from "@/app/components/banner/banner";
import ProductCard from "./Components/productCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCheck } from "@fortawesome/free-solid-svg-icons";
import Pagination from "@/app/components/pagination/pagination";
import { useFilters } from "./hooks/useFilters";
import { usePagination } from "./hooks/usePagination";
import { productData } from "@/app/data/productData";

export default function ProductPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    filters,
    availableTargets,
    filteredProducts,
    handleFilterChange,
    availablePharmaceuticalTypes,
    clearFilters,
  } = useFilters();

  const [currentPage, setCounter] = useState(1);

  const { paginatedItems, start, end, onPaginationChange } = usePagination(
    filteredProducts,
    9,
    currentPage
  );

  const sortOptions = [
    { id: 1, name: "Relevance" },
    { id: 2, name: "Alpha A-Z" },
    { id: 3, name: "Alpha Z-A" },
    { id: 4, name: "Best Sellers" },
  ];

  // Handle resetting pagination when filters are applied
  useEffect(() => setCounter(1), [filters]);

  // On initial load, read the category, target, and sort from the query parameters
  useEffect(() => {
    const categoryFromQuery = searchParams.get("category");
    const targetsFromQuery = searchParams.getAll("target");
    const sortFromQuery = searchParams.get("sort") || "Relevance";

    if (categoryFromQuery) {
      handleFilterChange("category", categoryFromQuery);
    }
    handleFilterChange("sort", sortFromQuery);

    // Initialize targets from URL
    const currentTargets = new Set(filters.targets);
    const queryTargets = new Set(targetsFromQuery);

    // Add new targets from the query
    queryTargets.forEach((target) => {
      if (!currentTargets.has(target)) {
        handleFilterChange("targets", target, true); // Add target
      }
    });

    // Remove targets not in the query anymore
    currentTargets.forEach((target) => {
      if (!queryTargets.has(target)) {
        handleFilterChange("targets", target, false); // Remove target
      }
    });
  }, [searchParams]); // Ensure searchParams is included in dependency array

  // Handle updating the query params when filters change
  useEffect(() => {
    const currentQuery = new URLSearchParams(window.location.search);

    const newQuery = new URLSearchParams();
    if (filters.category) newQuery.set("category", filters.category);
    if (filters.pharmaceutical) newQuery.set("type", filters.pharmaceutical);
    if (filters.sort) newQuery.set("sort", filters.sort); // Add sorting to the query

    filters.targets.forEach((target) => newQuery.append("target", target));

    // Compare current and new queries to avoid redundant updates
    if (newQuery.toString() !== currentQuery.toString()) {
      router.replace(`?${newQuery.toString()}`, {
        shallow: true,
        scroll: false,
      });
    }
  }, [filters, router]);

  return (
    <>
      <Banner
        title="Explore Our Herbal Collection"
        description="Discover the essence of nature in every product. At Classical Herbal Products, we offer a carefully curated selection of herbal remedies, crafted to bring balance and vitality to your life."
        image="assets/Products/Banners/all-products"
      />
      <div className="container-margin-compact padding-y-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* Sidebar with filters */}
          <aside className="flex flex-col col-span-1 gap-6 md:col-span-1">
            {/* Category Filter */}
            <div className="flex flex-col">
              <p className="text-2xl underline font-markaziText text-primary-green-400 underline-offset-8 decoration-[#a77e5d80]">
                Category
              </p>
              <ul className="mt-4 space-y-1">
                {productData.map((item, index) => (
                  <li
                    key={index}
                    className={`font-medium text-[15px] ${
                      filters.category === item.slug
                        ? "text-primary-green-100"
                        : "text-primary-green-300"
                    } cursor-pointer`}
                    onClick={() => handleFilterChange("category", item.slug)}
                  >
                    {item.category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Filter */}
            <div className="flex flex-col">
              <p className="text-2xl underline font-markaziText text-primary-green-400 underline-offset-8 decoration-[#a77e5d80]">
                Targeted Health Products
              </p>
              <ul className="mt-4 space-y-1">
                {availableTargets.map((target, index) => (
                  <li
                    key={index}
                    className={`font-medium text-[15px] ${
                      filters.targets.includes(target)
                        ? "text-primary-green-100"
                        : "text-primary-green-300"
                    } cursor-pointer`}
                    onClick={() => handleFilterChange("targets", target)}
                  >
                    {target}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pharmaceutical Filter */}
            <div className="flex flex-col">
              <p className="text-2xl underline font-markaziText text-primary-green-400 underline-offset-8 decoration-[#a77e5d80]">
                Type
              </p>
              <ul className="mt-4 space-y-1">
                {availablePharmaceuticalTypes.map((type, index) => (
                  <li
                    key={index}
                    className={`font-medium text-[15px] ${
                      filters.pharmaceutical === type
                        ? "text-primary-green-100"
                        : "text-primary-green-300"
                    } cursor-pointer`}
                    onClick={() => handleFilterChange("pharmaceutical", type)}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section className="col-span-3">
            {/* Applied Filters Section */}
            {filters.category ||
            filters.targets.length > 0 ||
            filters.pharmaceutical ? (
              <div className="mb-4">
                <p className="text-lg font-medium">Applied Filters:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {filters.category && (
                    <div
                      onClick={() => handleFilterChange("category", null)}
                      className="px-2 gap-2 group flex items-center py-1 rounded cursor-pointer border border-[#c2c2c2] bg-[#F3F0EB] text-primary-green-600"
                    >
                      <div className="mt-[0.5px] text-sm font-medium">
                        Category:{" "}
                        <span className="font-medium capitalize text-black-shade-200 group-hover:line-through">
                          {filters.category}
                        </span>
                      </div>
                      <FontAwesomeIcon
                        className="text-xs leading-none text-black-shade-100"
                        icon={faClose}
                      />
                    </div>
                  )}
                  {filters.targets.map((target) => (
                    <div
                      key={target}
                      className="px-2 gap-2 group flex items-center py-1 rounded cursor-pointer border border-[#c2c2c2] bg-[#F3F0EB] text-primary-green-600"
                      onClick={() => handleFilterChange("targets", target)} // Use the new function to remove targets correctly
                    >
                      <div className="mt-[0.5px] text-sm font-medium">
                        Target:{" "}
                        <span className="font-medium capitalize text-black-shade-200 group-hover:line-through">
                          {target}
                        </span>
                      </div>
                      <FontAwesomeIcon
                        className="text-xs leading-none text-black-shade-100"
                        icon={faClose}
                      />
                    </div>
                  ))}
                  {filters.pharmaceutical && (
                    <div
                      className="px-2 gap-2 group flex items-center py-1 rounded cursor-pointer border border-[#c2c2c2] bg-[#F3F0EB] text-primary-green-600"
                      onClick={() => handleFilterChange("pharmaceutical", null)}
                    >
                      <div className="mt-[0.5px] text-sm font-medium">
                        Type:{" "}
                        <span className="font-medium capitalize text-black-shade-200 group-hover:line-through">
                          {filters.pharmaceutical}
                        </span>
                      </div>
                      <FontAwesomeIcon
                        className="text-xs leading-none text-black-shade-100"
                        icon={faClose}
                      />
                    </div>
                  )}
                  <button
                    className="px-3 py-1 text-sm font-medium text-red-500"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            ) : null}

            {/* Sorting Section */}
            <div className="flex items-center justify-between w-full mb-4 h-fit col-span-full">
              <p className="text-sm font-medium text-primary-green-200">
                Showing {start}-{end} of{" "}
                <span className="font-semibold text-primary-green-300">
                  {filteredProducts.length} products
                </span>
              </p>
              <p className="text-[15px] font-medium text-primary-green-200">
                Sorted by:{" "}
                <Listbox
                  value={filters.sort}
                  onChange={(value) => handleFilterChange("sort", value)}
                >
                  {({ open }) => (
                    <>
                      <ListboxButton className="font-medium text-primary-green-300">
                        {filters.sort}
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
                                className="group cursor-pointer font-medium text-black-shade-200 text-[15px] pl-2 pr-4 py-1 rounded-md"
                              >
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  className="text-sm mr-2 text-primary-green-200 invisible group-data-[selected]:visible"
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

            {/* Product List */}
            <div className="grid grid-cols-1 col-span-1 gap-4 gap-y-14 md:col-span-3 sm:grid-cols-2 md:grid-cols-3">
              {paginatedItems.map((product, index) => (
                <ProductCard
                  link={product.slug}
                  title={product.title}
                  image={`/assets/Products/${product.categorySlug}/${product.slug}/${product.image}`}
                  brief={product.brief}
                  bestSeller={product.bestSeller || false}
                  key={index}
                  index={index}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Pagination Section */}
        <section className="margin-t">
          <Pagination
            currentPage={currentPage}
            setCounter={setCounter}
            showPerPage={9}
            onPaginationChange={onPaginationChange}
            total={filteredProducts.length}
          />
        </section>
      </div>
    </>
  );
}
