import React from "react";
import BlogDetail from "./blogDetail";
import Contact from "../../contact/contact";

export default function page() {
  const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;
  return (
    <>
      <BlogDetail />
      <Contact dark={true} hcaptcha_site_key={hcaptcha_site_key} />
    </>
  );
}
