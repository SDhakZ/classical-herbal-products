"use client";
import React from "react";
import { blogData } from "@/app/data/blogData";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function BlogDetail() {
  const params = useParams();
  const blogSlug = params.blogSlug;
  const selectedBlogData = blogData.find((blog) => blog.slug === blogSlug);

  return (
    <div className="container-margin-compact margin-t">
      <button className="text-lg font-semibold text-black-shade-300">
        &lt; Go Back
      </button>
      <div className="flex flex-col items-center justify-center margin-t ">
        <div>
          <h1 className="text-5xl text-center font-markaziText text-black-shade-300 ">
            {selectedBlogData.title}
          </h1>
          <p className="mt-4 text-sm font-semibold text-center text-black-shade-300">
            Published on {selectedBlogData.publishedDate}
          </p>
          <p className="mt-3 text-lg font-medium text-center text-primary-green-200">
            By: {selectedBlogData.author}
          </p>
        </div>
        <p className="mt-5 w-full text-center max-w-[675px] text-black-shade-200 font-medium">
          {selectedBlogData.brief}
        </p>
        <Image
          src={`/assets/Blogs/${selectedBlogData.slug}/${selectedBlogData.image}`}
          width={1080}
          height={594}
          layout="responsive"
          alt={selectedBlogData.title}
          className="mt-7 max-w-[720px]"
        />
        <div className="flex flex-col items-center w-full gap-12 mt-14">
          {selectedBlogData.body.map((blog, index) => (
            <div key={index} className="max-w-[675px]">
              <div>
                <h2 className="text-3xl font-medium text-black-shade-300">
                  {blog.title}
                </h2>
                <p className="mt-2 leading-relaxed text-black-shade-300">
                  {blog.description}
                </p>
              </div>
              {blog.subBody && (
                <div className="flex flex-col gap-10 mt-10">
                  {blog.subBody.map((sub, index) => (
                    <div key={index}>
                      <h3 className="text-4xl font-markaziText text-black-shade-300">
                        {sub.title}
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
                        {sub.description}
                      </p>
                      {sub.bullet ? (
                        <div className="mt-4">
                          <p className="font-medium leading-relaxed text-black-shade-300">
                            {sub.bullet.brief}
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
        <hr class="h-[1px] border-[2px] w-full my-14 bg-[#C3C3C3]"></hr>
      </div>
    </div>
  );
}
