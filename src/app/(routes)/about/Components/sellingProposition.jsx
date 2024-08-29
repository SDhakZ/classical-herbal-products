"use client";

import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./sellingProposition.css";
import Image from "next/image";

export default function SellingProposition(props) {
  const { selectedAboutData } = props;
  const infoHub = selectedAboutData?.infoHub;
  const [isBelow540px, setIsBelow540px] = useState();

  useEffect(() => {
    const handleResize = () => {
      setIsBelow540px(window.innerWidth < 540);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [activeImage, setActiveImage] = useState(
    infoHub ? infoHub.sellingProposition[0].image : null
  );

  useEffect(() => {
    Aos.init({
      duration: "500",
      easing: "ease-in-out",
      once: false,
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section-class");
      let currentSection = sections[0];

      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 2) {
          currentSection = section;
          setActiveImage(infoHub.sellingProposition[index].image);
        } else {
          return null;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [infoHub]);

  return (
    <section className={`relative transition-colors duration-[1300ms] `}>
      <div className="container-margin-compact margin-y section-layout">
        <div className="mt-4 md:mt-20">
          <h2 className="text-4xl leading-8 sm:leading-10 sm:text-[45px] font-markaziText text-primary-green-200">
            {infoHub?.title}
          </h2>

          <div className="flex flex-col gap-16 mt-10 mb-10 sm:mt-14 sm:gap-44 md:gap-48 lg:gap-56 sm:mb-36 md:mb-64">
            {infoHub.sellingProposition.map((process, index) => (
              <section
                className="flex flex-col gap-6 section-class"
                key={index}
              >
                <div
                  data-aos-once="true"
                  data-aos={index == 0 ? "" : "fade-in"}
                  data-aos-anchor-placement={
                    isBelow540px ? "bottom" : "top-center"
                  }
                >
                  <h3
                    className={` text-xl text-black-shade-300 font-medium leading-6 sm:font-medium sm:text-xl md:text-2xl`}
                  >
                    {process.title}
                  </h3>
                  <p
                    className={`mt-3 text-base paragraph max-w-[400px] font-normal`}
                  >
                    {process.description}
                  </p>
                </div>
                <div className="relative w-full h-full sm:hidden sm:invisible">
                  <Image
                    width={500}
                    height={410}
                    title={process.title}
                    loading="lazy"
                    decoding="async"
                    alt="Active section"
                    className="w-full rounded-sm max-w-[500px]"
                    src={process.image}
                  />
                </div>
              </section>
            ))}
          </div>
        </div>
        <div className={`sm:block hidden sticky-image-container `}>
          <Image
            width={500}
            height={410}
            loading="lazy"
            decoding="async"
            alt="Active section"
            key={activeImage}
            className="relative rounded-sm hidden sm:block z-10 w-full sm:max-w-[300px] md:max-w-[350px] lg:max-w-[450px] xl:max-w-[500px] fade-in"
            src={activeImage}
          />
        </div>
      </div>
    </section>
  );
}
