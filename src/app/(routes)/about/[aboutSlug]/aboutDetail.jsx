import React from "react";
import Banner from "@/app/components/banner/banner";
import { aboutData } from "@/app/data/aboutData";

import Highlight from "../Components/highlight";
import CompanyValue from "@/app/components/companyValue/companyValue";
import SellingProposition from "../Components/sellingProposition";
import Contact from "../../contact/contact";
import TestingsSection from "@/app/components/testingsSection/testingsSection";
import IngredientsSlider from "@/app/components/ingredientsSlider/ingredientsSlider";

export default function AboutDetail({ params }) {
  const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;
  const aboutSlug = params.aboutSlug;
  const selectedAboutData = aboutData.find((about) => about.slug === aboutSlug);
  return (
    <div>
      <Banner
        title={selectedAboutData.title}
        description={selectedAboutData.brief}
        image={selectedAboutData.banner}
      />
      <Highlight
        title={selectedAboutData.highlight.title}
        image={selectedAboutData.highlight.image}
        color={selectedAboutData.highlight.color}
        description={selectedAboutData.highlight.description}
      />
      {selectedAboutData.testing ? <TestingsSection /> : null}
      {selectedAboutData.scienceBehind ? (
        <IngredientsSlider
          title={selectedAboutData.scienceBehind.title}
          description={selectedAboutData.scienceBehind.description}
          ingredients={selectedAboutData.scienceBehind.ingredients}
        />
      ) : null}
      <CompanyValue margin={true} />
      <SellingProposition selectedAboutData={selectedAboutData} />
      <Contact hcaptcha_site_key={hcaptcha_site_key} dark={false} />
    </div>
  );
}
