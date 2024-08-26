"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { productData } from "@/app/data/productData";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./productDetail.css";
export default function ProductOverview() {
  const params = useParams();
  const productSlug = params.productSlug;

  const allProducts = productData.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      categorySlug: category.slug,
    }))
  );

  // Find the product based on the slug
  const selectedProductData = allProducts.find(
    (product) => product.slug === productSlug
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!selectedProductData) {
    return <div>Product not found</div>;
  }

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container-margin-compact padding-y-lg">
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:gap-8 md:gap-10 lg:gap-16 xl:gap-24">
        <div className="sticky-image-container">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={true}
            thumbWidth={100}
            infiniteLoop={true}
            swipeable={true}
            dynamicHeight={true}
            showIndicators={false}
            className="carousel-wrapper sm:max-w-[400px] md:max-w-[550px]"
          >
            {selectedProductData.details.images.map((image, index) => (
              <div className="w-full bg-[#F3F0EB]" key={index}>
                <img
                  src={`/assets/Products/${selectedProductData.categorySlug}/${selectedProductData.slug}/${image.src}`}
                  alt={image.alt}
                  className="object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="flex flex-col gap-8 sm:w-2/3 md:w-1/2 sm:gap-6 md:gap-8">
          <div className="flex flex-col gap-3">
            {selectedProductData.bestSeller ? (
              <div className="float-left px-3 py-2 mb-2 text-sm leading-none text-white uppercase rounded-md bg-primary-green-200 w-fit">
                Best Seller
              </div>
            ) : null}
            <h1 className="text-4xl font-medium text-primary-green-400 font-markaziText">
              {selectedProductData.title}
            </h1>
            <p className="text-base max-w-[450px] text-black-shade-200 font-medium w-full">
              {selectedProductData.brief}
            </p>
          </div>
          <div>
            <h2 className="font-medium  underline uppercase text-[#684711] decoration-2 underline-offset-8 decoration-[#684711]">
              Benefits
            </h2>
            <ul className="mt-6 space-y-2">
              {selectedProductData.details.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center font-medium text-black-shade-200"
                >
                  <FontAwesomeIcon
                    className="mr-3 leading-none text-primary-green-200"
                    icon={faCheckSquare}
                  />
                  <span className="mt-[2px]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-medium underline uppercase text-[#684711] decoration-2 underline-offset-8 decoration-[#684711]">
              Available Sizes
            </h2>
            <ul className="flex gap-4">
              {selectedProductData.details.sizes.map((size, index) => (
                <li
                  key={index}
                  className="flex items-center px-3 pt-3 pb-2 mt-6 font-medium leading-none rounded-sm justify-centermt-6 text-black-shade-200 bg-primary-beige-200"
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2 my-1">
            <img className="w-5" src="/nutritionLogo.png" />
            <button
              onClick={handleModalToggle}
              className="font-medium underline transition-colors duration-150 hover:text-primary-green-200 hover:decoration-primary-green-200 decoration-2 text-primary-green-300 underline-offset-8 decoration-primary-green-300 "
            >
              View Nutritional Facts
            </button>
          </div>
          <div>
            <h2 className="font-medium underline uppercase text-[#684711] decoration-2 underline-offset-8 decoration-[#684711]">
              Additional Info
            </h2>
            <p className="mt-5 text-black-shade-300">
              {selectedProductData.details.additionalDetails}
            </p>
          </div>
          <div>
            <h2 className="font-medium underline uppercase text-[#684711] decoration-2 underline-offset-8 decoration-[#684711]">
              Delivery Details
            </h2>
            <p className="mt-5 font-medium text-black-shade-300">
              Delivery available inside Kathmandu valley. For elsewhere extra
              charge may apply.
            </p>
          </div>
          <a
            href="/contact"
            className="px-5 w-full flex item-center justify-center pt-5 pb-4 transition-colors duration-200 hover:bg-[#BA9962] font-medium leading-none tracking-wide uppercase rounded-md text-white-shade-100 sm:w-fit bg-primary-beige-300"
          >
            Contact Us to Buy
          </a>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-lg p-4 bg-white rounded-lg">
            <button
              className="absolute text-gray-500 top-3 right-5 hover:text-gray-700"
              onClick={handleModalToggle}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="flex items-center justify-center">
              <Image
                alt="Nutritional Facts"
                width={500}
                height={500}
                className="w-full max-w-full"
                src={`/assets/Products/${selectedProductData.categorySlug}/${selectedProductData.slug}/${selectedProductData.details.nutrutionalFacts}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
