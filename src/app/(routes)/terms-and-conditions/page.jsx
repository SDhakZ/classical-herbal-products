import React from "react";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "These terms of service and disclaimer govern your use of the Classical Herbal Products website and any content, features, or services made available through the website.",
  keywords: [
    "Classical Herbal Products",
    "terms and conditions",
    "policy",
    "terms-and-conditions",
  ],
  alternates: {
    canonical: "/contact-us",
  },
};
export default function page() {
  return (
    <div className="padding-y-lg ">
      <div className="container-margin-compact">
        <h1 className="text-3xl font-medium">Terms and Conditions</h1>
      </div>
      <div className="flex flex-col gap-8 mt-8 container-margin-compact md:mt-11">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300">
            Purpose
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            These terms of service and disclaimer govern your use of the
            Classical Herbal Products website and any content, features, or
            services made available through the website.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300 ">
            Disclaimer of Liability
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            We do not guarantee the accuracy or completeness of our
            website&apos;s content, and we are not liable for any errors or
            omissions.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300 ">
            Limitations of Liability
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            We will not be liable for any damages, whether direct, indirect,
            incidental, or consequential, resulting from your use of our website
            or any of its content, features, or services.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300 ">
            Expectations for User Behavior
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            You agree not to use our website for any illegal or unauthorized
            purpose, and you agree to follow all applicable laws and
            regulations.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300 ">
            Intellectual Property
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            Our website&apos;s content and materials are all free to use.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300 ">
            User-Generated Content or Submissions
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            You grant us a non-exclusive, royalty-free license to use, modify,
            and distribute the content in any form or medium by submitting
            content to our website.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300 ">
            Changes to the Terms of Use and Disclaimer
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            We reserve the right, at any time, to modify or update these terms
            of use and disclaimer, and your continued use of our website
            following any such changes constitutes acceptance of the new terms.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-black-shade-300 ">
            Agreement to the Terms of Use and Disclaimer
          </h2>
          <p className="max-w-5xl text-lg font-medium font-manrope text-black-shade-100">
            You agree to be bound by these terms of use and disclaimer, as well
            as any other applicable laws and regulations, by accessing or using
            our website.
          </p>
        </div>
      </div>
    </div>
  );
}
