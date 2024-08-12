import React from "react";
import Contact from "./contact";

export default function page() {
  const hcaptcha_site_key = process.env.HCAPTCHA_SITE_KEY;
  return (
    <div>
      <Contact hcaptcha_site_key={hcaptcha_site_key} dark={false} />
    </div>
  );
}
