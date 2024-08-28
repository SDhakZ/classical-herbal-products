"use client";
import React from "react";
import HeroCSS from "./hero.module.css";
import "react-multi-carousel/lib/styles.css";
import { HeroCard } from "./heroCard";
import Carousel from "react-multi-carousel";
import "./multiSliderOverride.css";

export const Hero = ({ deviceType, heroData }) => {
  console.log("deviceType", deviceType);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 1,
    },

    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 1,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className={HeroCSS["HeroT-main-container"]}>
        <Carousel
          deviceType={deviceType}
          infinite={true}
          ssr={true}
          autoPlay={true}
          autoPlaySpeed={7000}
          keyBoardControl={true}
          transitionDuration={1500}
          responsive={responsive}
          removeArrowOnDeviceType={["mobile"]}
          pauseOnHover={false}
          showDots
          dotListClass="custom-dot-list-style"
        >
          {heroData?.map((item, index) => (
            <HeroCard
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              link={item.link}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};
