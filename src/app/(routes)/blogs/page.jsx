import React from "react";
import Blog from "./blog";
import CompanyValue from "@/app/components/companyValue/companyValue";
import AboutCard from "@/app/components/aboutCards/aboutCard";
import Contact from "../contact/contact";

export default function page() {
  const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;
  return (
    <>
      <Blog />
      <AboutCard />
      <CompanyValue />
      <Contact dark={true} hcaptcha_site_key={hcaptcha_site_key} />
    </>
  );
}
