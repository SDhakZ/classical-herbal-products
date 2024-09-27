"use client";
import React, { useState, useEffect, useCallback } from "react";
import Banner from "@/app/components/banner/banner";
import { blogData } from "@/app/data/blogData";
import Pagination from "@/app/components/pagination/pagination";
import BlogCard from "./Components/blogCard";

export default function Blog() {
  const [paginatedItems, setPaginatedItems] = useState([]);
  const [pagination, setPagination] = useState({ start: 0, end: 6 });
  const [currentPage, setCounter] = useState(1);
  useEffect(() => {
    // Apply pagination to the flat list of portfolio items
    const updatePaginatedItems = blogData.slice(
      pagination.start,
      pagination.end
    );
    setPaginatedItems(updatePaginatedItems);
  }, [pagination]);

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
      <div className="padding-y margin-t container-margin-compact">
        <h1 className="text-5xl text-center font-markaziText text-primary-green-400">
          Our Blogs
        </h1>
        <div className="grid gap-x-7 gap-y-10 margin-t sm:grid-cols-2">
          {paginatedItems.map((blog, index) => (
            <BlogCard
              key={index}
              index={index}
              link={blog.slug}
              image={blog.image}
              title={blog.title}
              brief={blog.brief}
            />
          ))}
        </div>
        <section className="margin-t">
          <Pagination
            showPerPage={6}
            onPaginationChange={onPaginationChange}
            total={blogData.length}
            setCounter={setCounter}
            currentPage={currentPage}
          />
        </section>
      </div>
    </div>
  );
}
