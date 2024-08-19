import React from "react";
import BlogCard from "./blogCard";
import { blogData } from "@/app/data/blogData";

export default function ContinueBlog(props) {
  const { selectedBlogData } = props;
  const otherBlogs = blogData
    .filter((blog) => blog.slug !== selectedBlogData.slug)
    .slice(0, 2);
  return (
    <div className="mb-16">
      <h3 className="text-3xl text-center sm:text-4xl font-markaziText text-primary-green-200">
        Continue Reading
      </h3>
      <div className="grid mt-6 sm:mt-10 gap-x-7 gap-y-10 sm:grid-cols-2">
        {otherBlogs?.map((blog, index) => (
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
      <div className="flex justify-center w-full mt-10">
        <a
          className="block px-8 py-3 font-medium border-2 rounded-lg hover:text-primary-green-100 hover:border-primary-green-100 border-primary-green-200 text-primary-green-200"
          href="/blog"
        >
          SEE ALL POSTS
        </a>
      </div>
    </div>
  );
}
