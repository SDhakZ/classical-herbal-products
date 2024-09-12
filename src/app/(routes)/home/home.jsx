"use client";
import React from "react";
import { heroData } from "@/app/data/heroData";
import { Hero } from "./Components/hero/hero";
import { useDeviceType } from "@/app/hooks/useDeviceType";
import RecommendProduct from "../products/[productSlug]/Components/recommendProduct";
import AboutSection from "./Components/aboutSection/aboutSection";
import AboutCard from "@/app/components/aboutCards/aboutCard";
import FeatureSection from "./Components/featureSection/featureSection";
import Testimonial from "./Components/testimonial/testimonial";

export default function Home() {
  const deviceType = useDeviceType();
  return (
    <div>
      <Hero heroData={heroData} deviceType={deviceType} />
      <RecommendProduct title="Our Best Sellers" bestSeller={true} />
      <AboutSection />
      <AboutCard />
      <FeatureSection />
      <Testimonial />
    </div>
  );
}
