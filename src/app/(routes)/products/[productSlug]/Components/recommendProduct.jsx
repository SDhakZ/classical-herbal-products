import React from "react";
import ProductCard from "../../Components/productCard";
import { productData } from "@/app/data/productData";

export default function RecommendProduct({
  currentCategorySlug,
  currentProductSlug,
}) {
  // Flatten the product data to get all products in a single array with categorySlug included
  const allProducts = productData.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      categorySlug: category.slug, // Include the categorySlug
    }))
  );

  // Filter products within the same category, excluding the current product
  const categorySpecificProducts = allProducts.filter(
    (product) =>
      product.categorySlug === currentCategorySlug &&
      product.slug !== currentProductSlug
  );

  // Get the remaining products (not in the same category or already filtered out)
  const otherProducts = allProducts.filter(
    (product) =>
      product.categorySlug !== currentCategorySlug ||
      product.slug === currentProductSlug
  );

  // Shuffle the other products to make them random
  const shuffledOtherProducts = otherProducts.sort(() => 0.5 - Math.random());

  // Combine the category-specific products first, followed by the random ones
  const recommendedProducts = [
    ...categorySpecificProducts,
    ...shuffledOtherProducts,
  ];

  return (
    <div className="container-margin-compact margin-y">
      <h2 className="text-3xl text-center md:text-4xl lg:text-5xl font-markaziText text-primary-green-400">
        View Other Products
      </h2>
      <div className="grid grid-cols-1 col-span-1 gap-10 margin-t gap-y-14 md:col-span-3 sm:grid-cols-2 md:grid-cols-3">
        {recommendedProducts.slice(0, 3).map((product, index) => (
          <ProductCard
            key={index}
            link={product.slug}
            title={product.title}
            image={`/assets/Products/${product.categorySlug}/${product.slug}/${product.image}`}
            brief={product.brief}
            bestSeller={product.bestSeller || false}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
