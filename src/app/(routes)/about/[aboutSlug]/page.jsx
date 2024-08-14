import React from "react";
import AboutDetail from "./aboutDetail";
import { aboutData } from "@/app/data/aboutData";

export default function page({ params }) {
  const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;
  const aboutSlug = params.aboutSlug;
  const aboutItem = aboutData.find((item) => item.slug === aboutSlug);
  return aboutItem ? (
    <>
      <AboutDetail hcaptcha_site_key={hcaptcha_site_key} />
    </>
  ) : (
    <h1>Not found</h1>
  );
}
