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
                  className={`flex items-center ${
                    activeDropdown === index
                      ? "underline underline-offset-8 decoration-2 decoration-primary-green-300"
                      : ""
                  } w-[170px] justify-center h-full`}
                  href="#"
                >
                  {menu.title}
                </a>
                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div
                      className="absolute left-0 w-full bg-white top-full min-h-72"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      ref={dropdownRef}
                    >
                      <div className="flex flex-wrap justify-between gap-4 px-12 py-8">
                        {menu.dropdown.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <p className="text-2xl font-medium underline underline-offset-8 decoration-primary-beige-300 font-markaziText">
                              {section.title}
                            </p>
                            <ul className="flex flex-col gap-3 min-w-[200px] mt-5 text-base font-medium text-primary-green-300">
                              {section.links.map((item, index) => (
                                <li key={index}>
                                  <a href="#">{item.title}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        {menu.blogs ? (
                          <div className="flex gap-6">
                            <a
                              href="#"
                              className="max-w-[256px] overflow-hidden"
                            >
                              <img
                                className="max-w-[256px] w-full"
                                src="./assets/Blogs/test.png"
                              />
                              <p className="mt-2 text-xl truncate text-black-shade-200 text-ellipsis font-markaziText">
                                Why Shilajit is good for you?
                              </p>
                            </a>
                            <a
                              href="#"
                              className="max-w-[256px] overflow-hidden"
                            >
                              <img
                                className="w-[256px]"
                                src="./assets/Blogs/test.png"
                              />
                              <p className="mt-2 text-xl truncate text-black-shade-200 text-ellipsis font-markaziText">
                                Why Shilajit is good for you?
                              </p>
                            </a>
                          </div>
                        ) : null}
                        <Link
                          className="flex px-4 py-3 whitespace-nowrap text-[14px] font-medium uppercase rounded-md h-fit bg-primary-green-300 text-white-shade-100"
                          href="#"
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
              <img className="h-16" src="./assets/CHPLogo.png" alt="Logo" />
            </li>

            <li
              className="h-full"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                className={`flex items-center ${
                  activeDropdown === 2
                    ? "underline underline-offset-8 decoration-2 decoration-primary-green-300"
                    : ""
                } w-[170px] justify-center h-full`}
                href="#"
              >
                ABOUT
              </a>
              <AnimatePresence>
                {activeDropdown === 2 && (
                  <motion.div
                    className="absolute left-0 w-full bg-white top-full min-h-72"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-wrap justify-between gap-4 px-12 py-8">
                      {menuData[2].dropdown.map((item, index) => (
                        <div className="w-fit" key={index}>
                          <p className="text-2xl font-medium underline w-fit underline-offset-8 decoration-primary-beige-300 font-markaziText">
                            {item.title}
                          </p>
                          <ul className="flex max-w-[300px] flex-col gap-3 mt-5 text-base font-medium text-primary-green-300">
                            {item.links.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  className="transition-color hover:text-primary-green-300"
                                  href="#"
                                >
                                  {subItem.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {menuData[2].blogs ? (
                        <div className="flex gap-6">
                          <a href="#" className="max-w-[256px] overflow-hidden">
                            <img
                              className="max-w-[256px] w-full"
                              src="./assets/Blogs/test.png"
                            />
                            <p className="mt-2 text-xl truncate text-black-shade-200 text-ellipsis font-markaziText">
                              Why Shilajit is good for you?
                            </p>
                          </a>
                          <a href="#" className="max-w-[256px] overflow-hidden">
                            <img
                              className="w-[256px]"
                              src="./assets/Blogs/test.png"
                            />
                            <p className="mt-2 text-xl truncate text-black-shade-200 text-ellipsis font-markaziText">
                              Why Shilajit is good for you?
                            </p>
                          </a>
                        </div>
                      ) : null}

                      <Link
                        className="flex px-4 py-3 whitespace-nowrap text-[14px] font-medium uppercase rounded-md h-fit bg-primary-green-300 text-white-shade-100"
                        href="#"
                      >
                        See Products
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li className="h-full ">
              <a
                href="/contact"
                className="w-[170px] cursor-pointer flex justify-center h-full items-center"
              >
                CONTACT
              </a>
            </li>
          </ul>
          <img
            className="h-16 md:hidden"
            src="./assets/CHPLogo.png"
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
          >
            <ul className="flex flex-col gap-3 px-6 pt-8">
              {menuData.map((menu, index) => (
                <li key={index}>
                  <button
                    className="w-full text-left"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span>{menu.title}</span>
                    <FontAwesomeIcon
                      className="ml-2"
                      icon={
                        activeDropdown === index ? faChevronUp : faChevronDown
                      }
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        className="absolute left-0 w-full bg-white top-full min-h-72"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col px-4 py-2">
                          {menu.dropdown.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="mb-4">
                              <p className="text-xl font-medium font-markaziText">
                                {section.title}
                              </p>
                              <ul className="flex flex-col mt-2 text-base font-medium text-primary-green-300">
                                {section.links.map((item, index) => (
                                  <li key={index}>
                                    <a href="#">{item.title}</a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {menu.blogs ? (
                            <div className="flex flex-col gap-4">
                              <a
                                href="#"
                                className="max-w-[256px] overflow-hidden"
                              >
                                <img
                                  className="w-full"
                                  src="./assets/Blogs/test.png"
                                />
                                <p className="mt-2 text-xl truncate text-black-shade-200 text-ellipsis font-markaziText">
                                  Why Shilajit is good for you?
                                </p>
                              </a>
                            </div>
                          ) : null}
                          <Link
                            className="flex px-4 py-3 whitespace-nowrap text-[14px] font-medium uppercase rounded-md h-fit bg-primary-green-300 text-white-shade-100"
                            href="#"
                          >
                            See Products
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}
