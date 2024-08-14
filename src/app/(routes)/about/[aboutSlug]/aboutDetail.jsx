"use client";
import React from "react";
import Banner from "@/app/components/banner/banner";
import { aboutData } from "@/app/data/aboutData";
import { useParams } from "next/navigation";
import Highlight from "../Components/highlight";
import CompanyValue from "@/app/components/companyValue/companyValue";
import SellingProposition from "../Components/sellingProposition";
import Contact from "../../contact/contact";

export default function AboutDetail(hcaptcha_site_key) {
  const params = useParams();
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
      <CompanyValue />
      <SellingProposition selectedAboutData={selectedAboutData} />
      <Contact hcaptcha_site_key={hcaptcha_site_key} dark={false} />
    </div>
  );
}
