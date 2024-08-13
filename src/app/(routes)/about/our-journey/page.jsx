import React from "react";
import Banner from "@/app/components/banner/banner";
import AboutCard from "@/app/components/aboutCards/aboutCard";
export default function page() {
  return (
    <div>
      <Banner />
      <div className="w-full container-margin-compact">
        <div className="w-full padding-y-lg">
          <img src="/assets/About/our-journey-holistic.png" />
          <div className="flex flex-col items-center justify-center w-full mt-10">
            <h2 className="text-center text-black-shade-300 font-markaziText text-[48px] leading-10  max-w-[1000px]">
              Harmonizing Nature and Humanity for Holistic Healing
            </h2>
            <p className=" max-w-[700px] text-base text-black-shade-200 mt-6 text-center">
              At Classical Herbal Products, we blend the wisdom of nature with
              the needs of modern life. Our carefully crafted remedies harness
              the healing power of plants to support your well-being. Together,
              we create a harmony between people, plants, and the planet.
            </p>
            <a className="mt-4 text-lg text-center underline underline-offset-8 decoration-primary-green-200 font-regular text-primary-green-200">
              Learn More -&gt;
            </a>
          </div>
        </div>
      </div>
      <div className="py-16 bg-[#00521F]">
        <div className="w-full container-margin-compact">
          <div className="flex items-center justify-center w-full ">
            <div className="max-w-[1300px] flex-col sm:flex-row flex items-center justify-center gap-10">
              <div className="w-full max-w-[180px] sm:w-[230px]">
                <img src="/assets/About/USDA.png" className="w-full" />
              </div>
              <div>
                <h2 className="text-white-shade-100 text-center sm:text-left font-markaziText text-[48px] leading-10 max-w-[500px]">
                  The Power of Plants
                </h2>
                <p className="text-white-shade-200  text-center sm:text-left mt-6 text-base max-w-[650px]">
                  Classical Herbal Products is proud to be USDA Certified
                  Organic, committed to promoting sustainability and purity in
                  every product. USDA Certified Organic businesses meet rigorous
                  standards for organic farming, ensuring that our products are
                  free from harmful chemicals, grown with respect for the
                  environment, and adhere to the highest levels of transparency
                  and integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AboutCard />
      </div>
    </div>
  );
}
