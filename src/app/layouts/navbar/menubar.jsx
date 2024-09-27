"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { menuData } from "@/app/data/companyInfo";
import { motion, AnimatePresence } from "framer-motion";
import "./menubar.css";
import { blogData } from "@/app/data/blogData";
import Image from "next/image";

export default function Menubar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const dropdownRef = useRef(null);
  const handleMouseEnter = (index) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(index);
  };
  const handleMouseLeave = () => {
    setHoverTimeout(
      setTimeout(() => {
        setActiveDropdown(null);
      }, 200)
    );
  };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) =>
    setActiveDropdown(activeDropdown === index ? null : index);

  return (
    <div className="sticky top-0 z-50 flex bg-white-shade-100">
      <div className="relative w-full h-24 navbar-margin">
        <nav className="flex items-center justify-between w-full h-full">
          {/* Desktop Menu */}
          <ul className="items-center justify-between hidden w-full h-full text-sm font-medium md:flex text-black-shade-300">
            {menuData.slice(0, 2).map((menu, index) => (
              <li
                key={index}
                className="h-full"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  className={`flex cursor-pointer items-center ${
                    activeDropdown === index
                      ? "underline underline-offset-8 decoration-2 decoration-primary-green-300"
                      : ""
                  } w-[170px] justify-center h-full`}
                  href={menu.url}
                >
                  {menu.title}
                </a>
                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div
                      className="absolute left-0 w-full overflow-hidden bg-white rounded-b-md top-full min-h-72"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex flex-wrap justify-between gap-4 px-12 py-8">
                        {menu.dropdown.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <p className="text-2xl font-medium underline underline-offset-8 decoration-primary-beige-300 font-markaziText">
                              {section.title}
                            </p>
                            <ul className="flex flex-col gap-3 min-w-[200px] mt-5 text-base font-medium ">
                              {section.links.map((item, index) => (
                                <li
                                  className="transition-colors duration-150 text-primary-green-300 hover:text-primary-green-200"
                                  key={index}
                                >
                                  <Link href={item.url}>{item.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        {menu.blogs ? (
                          <div className="flex gap-6">
                            {blogData.slice(0, 2).map((blog, index) => (
                              <Link
                                key={index}
                                href={`/blogs/${blog.slug}`}
                                className="max-w-[256px] group overflow-hidden"
                              >
                                <figure className="max-w-[256px] overflow-hidden">
                                  <Image
                                    width={256}
                                    height={256}
                                    alt="Blog Image"
                                    className="w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    src={`/assets/Blogs/${blog.slug}/${blog.image}`}
                                  />
                                </figure>
                                <p className="mt-2 text-xl truncate text-black-shade-200 text-ellipsis font-markaziText">
                                  Why Shilajit is good for you?
                                </p>
                                <p className="font-normal line-clamp-1 text-black-shade-200">
                                  {blog.brief}
                                </p>
                              </Link>
                            ))}
                          </div>
                        ) : null}
                        <Link
                          className="flex px-4 py-3 whitespace-nowrap text-[14px] font-medium uppercase rounded-md h-fit bg-primary-green-300 text-white-shade-100"
                          href="/products"
                        >
                          See Products
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
            <li>
              <Link href="/">
                <Image
                  height={64}
                  width={140}
                  className="h-16"
                  src="/assets/CHPLogo.png"
                  alt="Logo"
                />
              </Link>
            </li>

            <li
              className="h-full"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                className={`flex items-center ${
                  activeDropdown === 2
                    ? "underline underline-offset-8 decoration-2 decoration-primary-green-300"
                    : ""
                } w-[170px] justify-center h-full`}
                href="#"
              >
                ABOUT
              </Link>
              <AnimatePresence>
                {activeDropdown === 2 && (
                  <motion.div
                    className="absolute left-0 w-full bg-white top-full min-h-72"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    ref={dropdownRef}
                  >
                    <div className="flex flex-wrap justify-between gap-4 px-12 py-8">
                      {menuData[2].dropdown.map((item, index) => (
                        <div className="w-fit" key={index}>
                          <p className="text-2xl font-medium underline w-fit underline-offset-8 decoration-primary-beige-300 font-markaziText">
                            {item.title}
                          </p>
                          <ul className="flex max-w-[300px] flex-col gap-3 mt-5 text-base font-medium text-primary-green-300">
                            {item.links.map((subItem, subIndex) => (
                              <li
                                className="transition-colors duration-150 text-primary-green-300 hover:text-primary-green-200"
                                key={subIndex}
                              >
                                <Link
                                  className="transition-color hover:text-primary-green-300"
                                  href={`/about/${subItem.url}`}
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {menuData[2].blogs ? (
                        <div className="flex gap-6">
                          {blogData.slice(0, 2).map((blog, index) => (
                            <Link
                              key={index}
                              href={`/blogs/${blog.slug}`}
                              className="max-w-[256px] group overflow-hidden"
                            >
                              <figure className="max-w-[256px] overflow-hidden">
                                <Image
                                  width={256}
                                  height={256}
                                  alt="Blog Image"
                                  className="w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                                  src={`/assets/Blogs/${blog.slug}/${blog.image}`}
                                />
                              </figure>
                              <p className="mt-2 text-xl truncate text-black-shade-200 text-ellipsis font-markaziText">
                                Why Shilajit is good for you?
                              </p>
                              <p className="font-normal line-clamp-1 text-black-shade-200">
                                {blog.brief}
                              </p>
                            </Link>
                          ))}
                        </div>
                      ) : null}

                      <Link
                        className="flex px-4 py-3 whitespace-nowrap text-[14px] font-medium uppercase rounded-md h-fit bg-primary-green-300 text-white-shade-100"
                        href="/products"
                      >
                        See Products
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li className="h-full ">
              <Link
                href="/contact"
                className="w-[170px] cursor-pointer flex justify-center h-full items-center"
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <Image
            height={64}
            width={140}
            className="h-16 md:hidden"
            src="/assets/CHPLogo.png"
            alt="Logo"
          />
          {/* Burger Menu Icon */}
          <button
            className="p-2 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon
              className="text-2xl"
              icon={isMenuOpen ? faTimes : faBars}
            />
          </button>
        </nav>

        {/* Full-Screen Overlay Menu */}
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 flex flex-col pb-10 overflow-y-auto bg-white z-60 text-black-shade-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between px-4 py-4">
              <Image
                height={64}
                width={140}
                className="h-12 md:hidden"
                src="/assets/CHPLogo.png"
                alt="Logo"
              />
              <button
                className="p-2 "
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                <FontAwesomeIcon className="text-2xl" icon={faTimes} />
              </button>
            </div>
            <ul className="flex flex-col items-center gap-8 mx-5 mt-6 text-lg font-medium sm:mt-10 sm:mx-10">
              {menuData.map((menu, index) => (
                <li key={index} className="w-full">
                  <button
                    className="flex items-center justify-between w-full text-xl font-medium cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    {menu.title}
                    {activeDropdown === index ? (
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className="ml-4 text-sm"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="ml-4 text-sm"
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        className="w-full bg-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col justify-between gap-6 py-6">
                          {menu.dropdown.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                              <p className="text-2xl font-normal underline underline-offset-8 decoration-primary-beige-300 text-black-shade-300 font-markaziText">
                                {section.title}
                              </p>
                              <ul className="flex flex-col gap-5 mt-4 text-lg font-medium text-primary-green-300">
                                {section.links.map((item, index) => (
                                  <li key={index}>
                                    <a href={item.url}>{item.title}</a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {menuData[2].blogs ? (
                            <div className="flex flex-col gap-4 sm:flex-wrap sm:flex-row">
                              {blogData.slice(0, 2).map((blog, index) => (
                                <Link
                                  key={index}
                                  href={`/blogs/${blog.slug}`}
                                  className="max-w-[256px] group overflow-hidden"
                                >
                                  <figure className="max-w-[256px] overflow-hidden">
                                    <Image
                                      width={256}
                                      height={256}
                                      alt="Blog Image"
                                      className="w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                                      src={`/assets/Blogs/shilajit-benefits/${blog.image}`}
                                    />
                                  </figure>
                                  <p className="mt-2 text-xl truncate text-black-shade-200 text-ellipsis font-markaziText">
                                    Why Shilajit is good for you?
                                  </p>
                                  <p className="font-normal line-clamp-1 text-black-shade-200">
                                    {blog.brief}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          ) : null}
                          <Link
                            className="flex w-full justify-center sm:w-fit whitespace-nowrap px-4 py-3 text-[16px] font-medium uppercase rounded-md bg-primary-green-300 text-white-shade-100"
                            href="/products"
                          >
                            See Products
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
              <li className="w-full">
                <a
                  href="/contact"
                  className="text-xl font-medium cursor-pointer"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}
