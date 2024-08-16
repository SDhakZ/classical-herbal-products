"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [currentPage, setCounter] = useState(1);

  const totalPage =
    showPerPage > 0 && total > 0 ? Math.ceil(total / showPerPage) : 1;

  useEffect(() => {
    const value = showPerPage * currentPage;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    onPaginationChange(value - showPerPage, value);
  }, [currentPage, showPerPage, onPaginationChange]);

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-4 list-none">
          {new Array(totalPage).fill("").map((element, index) => (
            <li
              key={index + 1}
              className="flex items-center justify-center w-8 h-8 overflow-hidden text-lg border border-gray-200 rounded-md cursor-pointer"
            >
              <a
                title={`Page ${index + 1}`}
                onClick={() => setCounter(index + 1)}
                href="# "
                className={
                  index + 1 === currentPage
                    ? `w-8 h-8 text-zinc-100 text-[15px] bg-primary-green-400 flex justify-center items-center`
                    : `w-8 h-8 text-black-shade-200 flex justify-center items-center`
                }
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
