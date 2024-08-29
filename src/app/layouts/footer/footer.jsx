import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialInfo, menuData } from "@/app/data/companyInfo";
import CHPLogo from "@/app/assets/CHPLogo.png";
import Image from "next/image";

export default function footer() {
  return (
    <footer className="bg-[#193028]">
      <div className="pt-16 pb-10 container-margin">
        <div className="flex flex-col ">
          <div className="flex flex-col flex-wrap justify-center gap-12 sm:flex-row sm:justify-between sm:gap-20 ">
            <Image
              width={250}
              height={115}
              src={CHPLogo}
              className="self-center sm:self-start w-full max-w-[200px] sm:w-full sm:max-w-[250px]"
              alt="CHP Logo"
            />

            <div>
              <p className="text-2xl font-markaziText text-primary-beige-200">
                Featured Products
              </p>
              <ul className="mt-3 space-y-3 text-sm text-white-shade-100">
                {menuData[0].dropdown[0].links.map((item, index) => (
                  <li key={index}>
                    <a
                      className="transition-colors duration-150 hover:text-primary-beige-100"
                      href={item.links}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-2xl text-primary-beige-200 font-markaziText ">
                Company
              </p>
              <ul className="mt-3 space-y-3 text-sm text-white-shade-100">
                <li>
                  <a
                    className="transition-colors duration-150 hover:text-primary-beige-100"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors duration-150 hover:text-primary-beige-100"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors duration-150 hover:text-primary-beige-100"
                    href="#"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors duration-150 hover:text-primary-beige-100"
                    href="#"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-2xl font-markaziText text-primary-beige-200">
                About Us
              </p>
              <ul className="mt-3 space-y-3 text-sm text-white-shade-100">
                {menuData[2].dropdown[0].links.map((item, index) => (
                  <li key={index}>
                    <a
                      className="transition-colors duration-150 hover:text-primary-beige-100"
                      href={item.url}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-12 mt-12 sm:mt-20 sm:gap-8">
            <div className="flex flex-col gap-10 sm:gap-6 sm:flex-row sm:justify-between">
              <ul className="space-y-2 text-sm text-white-shade-100">
                <li className="text-base text-primary-beige-200">
                  Classical Herbal Product
                </li>
                <li>Bhaktapur, Nepal - Lalitpur Nepal - Katmandu Nepal</li>
                <li>© Classical Herbal Products, 2024. All Rights Reserved.</li>
              </ul>

              <div className="flex flex-wrap text-sm gap-x-6 gap-y-4 text-white-shade-100">
                <div>
                  <p className="text-xl font-markaziText text-primary-beige-200">
                    Mail Us
                  </p>
                  <div className="mt-1">
                    <a
                      className="transition-colors duration-150 hover:text-primary-beige-100"
                      href="mailto:immuneherb@gmail.com"
                    >
                      immuneherb@gmail.com
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-markaziText text-primary-beige-200">
                    Call Us
                  </p>
                  <div className="flex flex-col gap-2 mt-1">
                    <a
                      className="transition-colors duration-150 hover:text-primary-beige-100 whitespace-nowrap"
                      href="mailto:immuneherb@gmail.com"
                    >
                      +977 9808380169
                    </a>
                    <a
                      className="whitespace-nowrap"
                      href="mailto:immuneherb@gmail.com"
                    >
                      +977 9849648436
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse items-center gap-8 sm:gap-6 sm:flex-row sm:flex-wrap sm:justify-between">
              <div className="flex flex-wrap self-start text-sm sm:self-auto gap-y-3 gap-x-4 text-white-shade-100">
                <a href="#">Terms</a>
                <a href="#">Disclaimer</a>
                <a href="#">Accessibility</a>
                <a href="#">Return Policy</a>
              </div>{" "}
              <ul className="flex flex-wrap self-start gap-4 text-sm sm:self-auto text-white-shade-200">
                {socialInfo.map((social, index) => (
                  <li key={index}>
                    <a
                      key={index}
                      className={`flex items-center  border-2 justify-center rounded-full w-10 h-10 md:w-9 md:h-9 text-white-shade-100 hover:text-primary-orange-200`}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={social.icon}
                        className="text-lg "
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center w-full px-4 py-4 mt-10 item-center bg-primary-green-400">
            <p className="text-sm text-white-shade-200">
              *This statement has not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
