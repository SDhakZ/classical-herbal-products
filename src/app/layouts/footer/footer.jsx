import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialInfo } from "@/app/data/companyInfo";

export default function footer() {
  return (
    <footer className="bg-[#193028]">
      <div className="pt-16 pb-10 container-margin">
        <div className="flex flex-col ">
          <div className="flex flex-wrap justify-between gap-12 sm:gap-20 sm:flex-nowrap">
            <img
              src="./assets/CHPLogo.png"
              className="self-start w-full max-w-[250px]"
              alt="CHP Logo"
            />
            <div>
              <p className="text-2xl text-primary-beige-200 font-markaziText ">
                Company
              </p>
              <ul className="mt-3 space-y-3 text-sm text-white-shade-100">
                <li>Services</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div>
              <p className="text-2xl font-markaziText text-primary-beige-200">
                Featured Products
              </p>
              <ul className="mt-3 space-y-3 text-sm text-white-shade-100">
                <li>Immune supportive tea</li>
                <li>Lavender Immunity booster </li>
                <li>Energy booster tea</li>
                <li>Ayurvedic booster</li>
              </ul>
            </div>
            <div>
              <p className="text-2xl font-markaziText text-primary-beige-200">
                About Us
              </p>
              <ul className="mt-3 space-y-3 text-sm text-white-shade-100">
                <li>Our Journey</li>
                <li>Sustainability</li>
                <li>Transparency in Sourcing</li>
                <li>Purity, Potency & Integrity</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-20">
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
              <ul className="space-y-1 text-sm text-white-shade-100">
                <li className="text-base text-primary-beige-200">
                  Classical Herbal Product
                </li>
                <li>Bhaktapur, Nepal - Lalitpur Nepal - Katmandu Nepal</li>
                <li>© Classical Herbal Products, 2024. All Rights Reserved.</li>
              </ul>

              <div className="flex space-x-10 text-sm text-white-shade-100">
                <div>
                  <p className="text-lg font-markaziText text-primary-beige-200">
                    Mail Us
                  </p>
                  <a href="mailto:immuneherb@gmail.com">immuneherb@gmail.com</a>
                </div>
                <div>
                  <p className="text-lg font-markaziText text-primary-beige-200">
                    Call Us
                  </p>
                  <div className="flex flex-col">
                    <a href="mailto:immuneherb@gmail.com">+977 9808380169</a>
                    <a href="mailto:immuneherb@gmail.com">+977 9849648436</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-between">
              <div className="flex space-x-10 text-sm text-white-shade-100">
                <a href="#">Terms</a>
                <a href="#">Disclaimer</a>
                <a href="#">Accessibility</a>
                <a href="#">Return Policy</a>
              </div>{" "}
              <ul className="flex space-x-4 text-sm text-white-shade-200">
                {socialInfo.map((social, index) => (
                  <li>
                    <a
                      key={index}
                      className={`flex items-center  border-2 justify-center rounded-full w-11 h-11 md:w-9 md:h-9 text-white-shade-100 hover:text-primary-orange-200`}
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
