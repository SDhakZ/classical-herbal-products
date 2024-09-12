import React from "react";
import { testimonialData } from "@/app/data/testimonialData";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome//react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

export default function testimonial() {
  return (
    <div className="bg-primary-beige-200 padding-y-lg">
      <div className="container-margin-compact ">
        <div className="items-center justify-center text-2xl ">
          <h1 className="flex items-center justify-center text-4xl md:text-4xl lg:text-5xl font-markaziText text-primary-green-300">
            Testimonials
          </h1>
          <p className="py-5 text-lg text-center text-black-shade-200 md:py-2 md:pb-4">
            View our wide array of testimonials from our users
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-32 mt-20 md:gap-x-10 md:gap-y-20 md:mt-24">
          {testimonialData.map((testimonial, idx) => {
            const fullStars = Math.floor(testimonial.stars);
            const hasHalfStar = testimonial.stars % 1 !== 0;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            return (
              <div
                key={idx}
                className={`w-[330px] min-h-[325px] bg-slate-50 rounded-lg relative md:mt-32}`}
              >
                <div className="flex flex-col items-center justify-center -mt-14 md:mt-0">
                  <Image
                    src={testimonial.image}
                    className="w-24 h-24 rounded-full md:w-24 md:h-24 md:-mt-14 "
                    width={112}
                    height={112}
                  />
                  <Image
                    src="/assets/Testimonial/verified.png"
                    width={24}
                    height={24}
                    alt="Verified Badge"
                    className="relative w-6 h-6 -top-2"
                  />
                </div>
                <div className="flex items-center justify-center mt-5">
                  <h1 className="text-3xl font-markaziText text-black-shade-100">
                    {testimonial.name}
                  </h1>
                </div>

                <p className="px-8 py-3 text-center text-black-shade-200">
                  {testimonial.testimonial}
                </p>

                <div className="flex items-center justify-center">
                  <div className="items-center mt-2 ">
                    {/* Star Rating */}
                    <div className="flex items-center justify-center gap-1 py-3 mt-2">
                      {[...Array(fullStars)].map((_, idx) => (
                        <FontAwesomeIcon
                          key={idx}
                          icon={faStar}
                          className="text-yellow-500"
                        />
                      ))}
                      {hasHalfStar && (
                        <FontAwesomeIcon
                          icon={faStarHalfAlt}
                          className="text-yellow-500"
                        />
                      )}
                      {[...Array(emptyStars)].map((_, idx) => (
                        <FontAwesomeIcon
                          key={idx}
                          icon={faStar}
                          className="text-gray-300"
                        />
                      ))}
                    </div>
                    {/* Verified Review Section */}
                    <p className="flex items-center justify-center ml-1 text-sm text-green-600 ">
                      <Image
                        src="/assets/Testimonial/verified.png"
                        width={28}
                        height={28}
                        className="w-4 h-4 mr-1"
                        alt="Verified Badge"
                      />
                      Verified Review
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
