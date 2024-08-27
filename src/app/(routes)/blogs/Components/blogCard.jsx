import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard(props) {
  const { link, image, title, brief, index } = props;
  return (
    <Link
      key={index}
      href={`/blogs/${link}`}
      className="flex flex-col w-full gap-2 overflow-hidden group "
    >
      <figure className="w-full h-auto overflow-hidden">
        <Image
          width={850}
          height={464}
          alt={title}
          className="transition-transform duration-500 ease-in-out group-hover:scale-105"
          src={`/assets/Blogs/shilajit-benefits/${image}`}
        ></Image>
      </figure>
      <div className="px-2 py-2 md:px-3 md:py-3">
        <h2 className="text-[26px] leading-8 md:text-4xl font-markaziText text-primary-green-400">
          {title}
        </h2>
        <p className="mt-2 md:mt-3 line-clamp-2">{brief}</p>
        <span className="block mt-4 font-medium underline transition-all duration-200 w-fit decoration-2 decoration-primary-beige-300 hover:text-primary-green-100 underline-offset-4 hover:underline-offset-[6px] text-primary-green-200">
          Read More
        </span>
      </div>
    </Link>
  );
}
