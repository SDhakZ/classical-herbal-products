"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperOverride.css";

const ingredientsDefault = [
  {
    title: "Haskap Berry",
    description:
      "Handpicked by our professional in house farmers the haskap berry are good for heart health and has dietary fiber contents. ",
    image: "/assets/About/transparency/haskap.png",
  },
  {
    title: "Wellmune",
    description:
      "Wellmune is a proprietary ingredient derived from baker's yeast and is marketed as a natural immune health ingredient",
    image: "/assets/About/transparency/wellmune.png",
  },
  {
    title: "Vitamin C",
    description:
      "Vitamin C is a powerful antioxidant that boosts immunity and reduces the risk of chronic diseases. I",
    image: "/assets/About/transparency/vitamin-c.png",
  },
  {
    title: "Haskap Berry",
    description:
      "Handpicked by our professional in house farmers the haskap berry are good for heart health and has dietary fiber contents. ",
    image: "/assets/About/transparency/haskap.png",
  },
  {
    title: "Wellmune",
    description:
      "Wellmune is a proprietary ingredient derived from baker's yeast and is marketed as a natural immune health ingredient",
    image: "/assets/About/transparency/wellmune.png",
  },
];

export default function IngredientsSlider(props) {
  const { title, description, ingredients = ingredientsDefault } = props;
  return (
    <div className="container-margin margin-y">
      <div className="flex flex-col justify-center gap-10">
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <img
            className="w-40"
            alt="Science behind"
            src="/science-behind-icon.png"
          ></img>
          <h2 className="text-3xl font-medium sm:text-4xl md:text-5xl text-primary-green-400 font-markaziText">
            {title ? title : "The Science Behind"}
          </h2>
          <p className="text-black-shade-200 w-full max-w-[420px] text-center">
            {description
              ? description
              : "Our product is crafted from 100% natural ingredients, backed by rigorous scientific research for your well-being."}
          </p>
        </div>
        <div>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={3}
            spaceBetween={10}
            navigation
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              790: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {ingredients.map((ingredient, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex relative px-4 sm:px-6 rounded-xl w-full max-w-[350px] h-full max-h-[300px] flex-col items-center gap-2 bg-[#11a70023]">
                    <img
                      src={ingredient.image}
                      alt={ingredient.title}
                      className="w-full relative max-w-[130px] sm:max-w-[155px] -top-20"
                    />
                    <div className="relative space-y-3 w-full sm:max-w-[280px] -top-16">
                      <h3 className="text-xl font-medium text-center sm:text-2xl text-black-shade-300">
                        {ingredient.title}
                      </h3>
                      <p className="text-base text-center text-black-shade-200">
                        {ingredient.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
