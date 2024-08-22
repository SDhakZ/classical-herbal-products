"use client";
import React from "react";
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
  const {
    filters,
    availableTargets,
    filteredProducts,
    handleFilterChange,
    clearFilters,
  } = useFilters();

  const { paginatedItems, start, end, onPaginationChange } = usePagination(
    filteredProducts,
    9
  );

  const sortOptions = [
    { id: 1, name: "Relevance" },
    { id: 2, name: "Alpha A-Z" },
    { id: 3, name: "Alpha Z-A" },
    { id: 4, name: "Best Sellers" },
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
                <li
                  className={`font-medium text-[15px] ${
                    filters.pharmaceutical === "Pharmaceutical"
                      ? "text-primary-green-100"
                      : "text-primary-green-300"
                  } cursor-pointer`}
                  onClick={() =>
                    handleFilterChange("pharmaceutical", "Pharmaceutical")
                  }
                >
                  Pharmaceutical
                </li>
                <li
                  className={`font-medium text-[15px] ${
                    filters.pharmaceutical === "Non-Pharmaceutical"
                      ? "text-primary-green-100"
                      : "text-primary-green-300"
                  } cursor-pointer`}
                  onClick={() =>
                    handleFilterChange("pharmaceutical", "Non-Pharmaceutical")
                  }
                >
                  Non-Pharmaceutical
                </li>
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
                      onClick={() => handleFilterChange("targets", target)}
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
            showPerPage={9}
            onPaginationChange={onPaginationChange}
            total={filteredProducts.length}
          />
        </section>
      </div>
    </>
  );
}
