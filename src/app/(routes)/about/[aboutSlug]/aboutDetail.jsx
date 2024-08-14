"use client";
import React from "react";
import Banner from "@/app/components/banner/banner";
import { aboutData } from "@/app/data/aboutData";
import { useParams } from "next/navigation";
import Highlight from "../Components/highlight";
import CompanyValue from "@/app/components/companyValue/companyValue";

export default function AboutDetail() {
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
    </div>
  );
}
