import React from "react";
import ProductOverview from "./Components/productOverview";
import { productData } from "@/app/data/productData";
import IngredientsSlider from "@/app/components/ingredientsSlider/ingredientsSlider";
import TestingsSection from "@/app/components/testingsSection/testingsSection";

export default function page({ params }) {
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

  if (!selectedProductData) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <ProductOverview selectedProductData={selectedProductData} />
      <IngredientsSlider
        title="The Science Behind"
        description="Our product is crafted from 100% natural ingredients, backed by rigorous scientific research for your well-being."
        ingredients={selectedProductData.details.ingredients}
      />
      <TestingsSection
        types={selectedProductData.details.testing.types}
        image={
          selectedProductData.details.testing.image
            ? `/assets/Products/${selectedProductData.categorySlug}/${selectedProductData.slug}/${selectedProductData.details.testing.image}`
            : null
        }
      />
    </>
  );
}
