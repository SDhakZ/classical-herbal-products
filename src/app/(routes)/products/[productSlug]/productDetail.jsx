"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { productData } from "@/app/data/productData";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
export default function ProductDetail() {
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
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
        <div className="sticky-image-container">
          <ImageGallery
            showPlayButton={false}
            loading="lazy"
            items={selectedProductData.details.images}
          />
        </div>
        <div className="flex flex-col w-1/2 gap-8">
          <div className="flex flex-col gap-3">
            {selectedProductData.bestSeller ? (
              <div className="float-left px-3 py-2 mb-2 text-sm leading-none text-white uppercase rounded-md bg-primary-green-200 w-fit">
                Best Seller
              </div>
            ) : null}
            <h1 className="text-4xl font-medium text-primary-green-400 font-markaziText">
              {selectedProductData.title}
            </h1>
            <p className="text-base max-w-[450px] text-gray-600 font-medium w-full">
              {selectedProductData.brief}
            </p>
          </div>
          <div>
            <h2 className="font-medium underline uppercase text-primary-green-300 decoration-2 underline-offset-8 decoration-primary-green-300">
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
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-5" src="/nutritionLogo.png" />
            <button
              onClick={handleModalToggle}
              className="font-medium underline decoration-2 text-primary-green-300 underline-offset-8 decoration-primary-green-300 "
            >
              View Nutritional Facts
            </button>
          </div>
          <div>
            <h2 className="font-medium underline uppercase text-primary-green-300 decoration-2 underline-offset-8 decoration-primary-green-300">
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
          <div>
            <h2 className="font-medium underline uppercase text-primary-green-300 decoration-2 underline-offset-8 decoration-primary-green-300">
              Additional Info
            </h2>
            <p className="mt-5 font-medium text-black-shade-300">
              {selectedProductData.details.additionalDetails}
            </p>
          </div>
          <div>
            <h2 className="font-medium underline uppercase text-primary-green-300 decoration-2 underline-offset-8 decoration-primary-green-300">
              Delivery Details
            </h2>
            <p className="mt-5 font-medium text-black-shade-300">
              Delivery available inside Kathmandu valley. For elsewhere extra
              charge may apply.
            </p>
          </div>
          <a
            href="/contact"
            className="px-5 pt-5 pb-4 transition-colors duration-200 hover:bg-[#BA9962] font-medium leading-none tracking-wide uppercase rounded-md text-white-shade-100 w-fit bg-primary-beige-300"
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
              className="absolute text-gray-500 top-3 right-3 hover:text-gray-700"
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
