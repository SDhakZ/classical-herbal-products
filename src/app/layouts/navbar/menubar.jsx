"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { menuData } from "@/app/data/navbar";
import "./menubar.css";

export default function Menubar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (index) => setActiveDropdown(index);
  const handleMouseLeave = () => setActiveDropdown(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) =>
    setActiveDropdown(activeDropdown === index ? null : index);

  return (
    <div className="sticky top-0 z-50 flex bg-white-shade-100">
      <div className="relative w-full h-24 container-margin-compact">
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
                  } w-[150px] justify-center h-full`}
                  href="#"
                >
                  {menu.title}
                </a>
                {activeDropdown === index && (
                  <div className="absolute left-0 w-full transition-opacity duration-300 bg-white top-full min-h-72">
                    <div className="flex justify-between px-12 py-8">
                      {menu.dropdown.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <p className="text-2xl font-medium underline underline-offset-8 decoration-primary-beige-300 font-markaziText">
                            {section.title}
                          </p>
                          <ul className="flex flex-col gap-3 mt-5 text-base font-medium text-primary-green-300">
                            {section.links.map((item, index) => (
                              <li key={index}>
                                <a href="#">{item.title}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link
                        className="flex px-4 py-3 text-[16px] font-medium uppercase rounded-md h-fit bg-primary-green-300 text-white-shade-100"
                        href="#"
                      >
                        See All Products
                      </Link>
                    </div>
                  </div>
                )}
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
                } w-[150px] justify-center h-full`}
                href="#"
              >
                ABOUT
              </a>
              {activeDropdown === 2 && (
                <div className="absolute left-0 w-full transition-opacity duration-300 bg-white top-full min-h-72">
                  <div className="flex justify-between gap-10 px-12 py-8">
                    <Link
                      className="flex px-4 py-3 text-[16px] font-medium uppercase rounded-md h-fit bg-primary-green-300 text-white-shade-100"
                      href="#"
                    >
                      See Products
                    </Link>
                    {menuData[2].dropdown.map((item, index) => (
                      <div key={index}>
                        <p className="text-2xl font-medium underline underline-offset-8 decoration-primary-beige-300 font-markaziText">
                          {item.title}
                        </p>
                        <ul className="flex flex-col gap-3 mt-5 text-base font-medium text-primary-green-300">
                          {item.links.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a href="#">{subItem.title}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li className="h-full ">
              <a className="w-[150px] flex justify-center h-full items-center">
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
          <div className="fixed inset-0 flex flex-col pb-10 overflow-y-auto bg-white z-60 text-black-shade-300">
            <button
              className="absolute p-2 top-4 right-4"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <FontAwesomeIcon className="text-2xl" icon={faTimes} />
            </button>
            <ul className="flex flex-col items-center gap-8 mx-10 mt-20 text-lg font-medium">
              {menuData.map((menu, index) => (
                <li key={index} className="w-full">
                  <a
                    className="flex items-center justify-between text-xl font-medium"
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
                  </a>
                  {activeDropdown === index && (
                    <div className="w-full transition-transform duration-300 ease-in-out transform bg-white">
                      <div className="flex flex-col justify-between gap-6 py-6">
                        {menu.dropdown.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <p className="text-2xl font-normal underline underline-offset-8 decoration-primary-beige-300 text-black-shade-300 font-markaziText">
                              {section.title}
                            </p>
                            <ul className="flex flex-col gap-5 mt-4 text-lg font-medium text-primary-green-300">
                              {section.links.map((item, index) => (
                                <li key={index}>
                                  <a href="#">{item.title}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Link
                          className="flex w-fit px-4 py-3 text-[16px] font-medium uppercase rounded-md bg-primary-green-300 text-white-shade-100"
                          href="#"
                        >
                          See All Products
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              ))}
              <li className="w-full">
                <a href="#" className="text-xl font-medium">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
