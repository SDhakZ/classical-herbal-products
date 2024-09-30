"use client";
import React from "react";
import { blogData } from "@/app/data/blogData";
import { useParams } from "next/navigation";
import Image from "next/image";
import ContinueBlog from "../Components/continueBlog";

export default function BlogDetail() {
  const params = useParams();
  const blogSlug = params.blogSlug;
  const selectedBlogData = blogData.find((blog) => blog.slug === blogSlug);

  return (
    <div className="container-margin-compact margin-t">
      <a href="/blogs" className="text-base font-medium text-primary-beige-300">
        &lt; Go Back
      </a>
      <div className="flex flex-col items-center justify-center mt-4">
        <div>
          <h1 className="text-4xl leading-9  max-w-[850px] text-center sm:text-6xl sm:leading-[0.9] font-markaziText text-black-shade-300 ">
            {selectedBlogData.title}
          </h1>
          <p className="mt-3 text-sm font-semibold text-center sm:mt-3 text-black-shade-300">
            Published on {selectedBlogData.publishedDate}
          </p>
          <p className="mt-2 text-xl font-medium text-center sm:mt-3 text-primary-green-100">
            By: {selectedBlogData.author}
          </p>
        </div>
        <p className="mt-3 sm:mt-5 w-full font-medium text-center max-w-[675px] text-black-shade-200 ">
          {selectedBlogData.brief}
        </p>
        <Image
          src={`/assets/Blogs/${selectedBlogData.slug}/${selectedBlogData.image}`}
          width={800}
          height={594}
          alt={selectedBlogData.title}
          className="mt-6 sm:mt-8 max-w-[800px]"
        />
        <div className="flex flex-col items-center w-full gap-10 mt-10 sm:gap-12 sm:mt-14">
          {selectedBlogData.body?.map((blog, index) => (
            <div key={index} className="max-w-[675px]">
              <div>
                <h2 className="text-2xl font-medium sm:text-3xl text-black-shade-300">
                  {blog.title ? blog.title : null}
                </h2>
                <p className="mt-2 leading-relaxed text-black-shade-300">
                  {blog.description}
                </p>
              </div>
              {blog.subBody && (
                <div className="flex flex-col gap-8 mt-8 sm:mt-10 sm:gap-10">
                  {blog.subBody.map((sub, index) => (
                    <div key={index}>
                      <h3 className="text-3xl sm:text-4xl font-markaziText text-black-shade-300">
                        {sub.title ? sub.title : null}
                      </h3>
                      {sub.image ? (
                        <Image
                          width={675}
                          height={367}
                          alt={blog.title}
                          className="w-full mt-4 mb-5"
                          src={`/assets/Blogs/${selectedBlogData.slug}/${sub.image}`}
                        />
                      ) : null}
                      <p className="mt-2 leading-relaxed text-black-shade-300">
                        {sub.description ? sub.description : null}
                      </p>
                      {sub.bullet ? (
                        <div className="mt-4">
                          <p className="font-medium leading-relaxed text-black-shade-300">
                            {sub.bullet.brief ? sub.bullet.brief : null}
                          </p>
                          <ul className="mt-2 space-y-2 list-disc">
                            {sub.bullet.points.map((point, index) => (
                              <li key={index}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <hr class="h-[1px] border-[2px] w-full my-8 sm:my-16 bg-[#C3C3C3]"></hr>
        <ContinueBlog
          selectedBlogData={selectedBlogData ? selectedBlogData : null}
        />
      </div>
    </div>
  );
}
