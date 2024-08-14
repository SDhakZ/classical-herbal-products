import React from "react";
import AboutDetail from "./aboutDetail";
import { aboutData } from "@/app/data/aboutData";

export default function page({ params }) {
  const aboutSlug = params.aboutSlug;
  const aboutItem = aboutData.find((item) => item.slug === aboutSlug);
  return aboutItem ? (
    <>
      <AboutDetail />
    </>
  ) : (
    <h1>Not found</h1>
  );
}
