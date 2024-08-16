"use client";
import React, { useState, useEffect, useCallback } from "react";
import Banner from "@/app/components/banner/banner";
import { blogData } from "@/app/data/blogData";
import Pagination from "@/app/components/pagination/pagination";

export default function Blog() {
  const [paginatedItems, setPaginatedItems] = useState([]);
  const [pagination, setPagination] = useState({ start: 0, end: 6 });

  useEffect(() => {
    // Apply pagination to the flat list of portfolio items
    const updatePaginatedItems = blogData.slice(
      pagination.start,
      pagination.end
    );
    setPaginatedItems(updatePaginatedItems);
  }, [blogData, pagination]);

  const onPaginationChange = useCallback((start, end) => {
    setPagination({ start, end });
  }, []);
  return (
    <div>
      <Banner
        image="assets/Blogs/blog-banner"
        title="Resources we create"
        description="We delve deep into responsible sourcing, traveling far and wide to partner with farmers who understand the land, soil, and plants like no one else."
      />
      <div className="padding-y-lg container-margin-compact">
        <h1 className="text-5xl text-center font-markaziText text-primary-green-300">
          Our Blogs
        </h1>
        <div className="grid gap-x-7 gap-y-10 margin-t sm:grid-cols-2">
          {paginatedItems.map((blog, index) => (
            <a
              key={index}
              href={`/blogs/${blog.slug}`}
              className="flex flex-col w-full gap-2 overflow-hidden group "
            >
              <figure className="w-full h-auto overflow-hidden">
                <img
                  alt={blog.title}
                  className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                  src={`/assets/Blogs/shilajit-benefits/${blog.image}`}
                ></img>
              </figure>
              <div className="px-2 py-2 md:px-3 md:py-3">
                <h2 className="text-[26px] leading-8 md:text-4xl font-markaziText text-primary-green-400">
                  {blog.title}
                </h2>
                <p className="mt-2 md:mt-3 line-clamp-2">{blog.brief}</p>
                <a
                  className="block mt-4 font-medium underline transition-all duration-200 w-fit decoration-2 decoration-primary-beige-300 hover:text-primary-green-100 underline-offset-4 hover:underline-offset-[6px] text-primary-green-200"
                  href={`/blogs/${blog.slug}`}
                >
                  Read More
                </a>
              </div>
            </a>
          ))}
        </div>
        <section className="margin-t">
          <Pagination
            showPerPage={6}
            onPaginationChange={onPaginationChange}
            total={blogData.length}
          />
        </section>
      </div>
    </div>
  );
}
