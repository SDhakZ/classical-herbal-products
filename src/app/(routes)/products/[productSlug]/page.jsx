import React from "react";
import ProductOverview from "./Components/productOverview";
import { productData } from "@/app/data/productData";
import IngredientsSlider from "@/app/components/ingredientsSlider/ingredientsSlider";
import TestingsSection from "@/app/components/testingsSection/testingsSection";
import AboutCard from "@/app/components/aboutCards/aboutCard";
import CompanyValue from "@/app/components/companyValue/companyValue";
import Contact from "../../contact/contact";
import RecommendProduct from "./Components/recommendProduct";
import ProductDirection from "./Components/productDirection";

export default function page({ params }) {
  const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;
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
      <ProductDirection
        direction={selectedProductData.details.directionToUse}
      />
      <TestingsSection
        types={
          selectedProductData.details.testing.types
            ? selectedProductData.details.testing.types
            : null
        }
        image={
          selectedProductData.details.testing.image
            ? `/assets/Products/${selectedProductData.categorySlug}/${selectedProductData.slug}/${selectedProductData.details.testing.image}`
            : null
        }
      />
      <AboutCard />
      <CompanyValue margin={true} />
      <RecommendProduct
        currentCategorySlug={selectedProductData.categorySlug}
        currentProductSlug={selectedProductData.slug}
      />
      <Contact hcaptcha_site_key={hcaptcha_site_key} dark={true} />
    </>
  );
}
