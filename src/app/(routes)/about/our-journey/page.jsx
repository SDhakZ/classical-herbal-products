import React from "react";
import Banner from "@/app/components/banner/banner";
import AboutCard from "@/app/components/aboutCards/aboutCard";
import Contact from "../../contact/contact";
export default function page() {
  return (
    <div>
      <Banner
        title="Our Journey"
        description=" We cultivate the bond between people and plants, bringing you the
            pure essence of Nature's vitality."
        image="assets/About/our-journey"
      />
      <div className="w-full container-margin-compact">
        <div className="w-full padding-y-lg">
          <img src="/assets/About/our-journey-holistic.png" />
          <div className="flex flex-col items-center justify-center w-full mt-6 sm:mt-10">
            <h2 className="text-center text-black-shade-300 font-markaziText text-3xl sm:text-4xl sm:max-w-[450px] md:max-w-[700px] md:leading-10 sm:leading-10 md:text-[45px] lg:max-w-[1000px] leading-7  max-w-[1000px]">
              Harmonizing Nature and Humanity for Holistic Healing
            </h2>
            <p className=" sm:max-w-[500px] md:max-w-[700px] text-base text-black-shade-200 mt-3 sm:mt-4 text-center">
              At Classical Herbal Products, we blend the wisdom of nature with
              the needs of modern life. Our carefully crafted remedies harness
              the healing power of plants to support your well-being. Together,
              we create a harmony between people, plants, and the planet.
            </p>
            <a className="mt-3 text-lg text-center underline sm:mt-4 underline-offset-8 decoration-primary-green-200 font-regular text-primary-green-200">
              Learn More -&gt;
            </a>
          </div>
        </div>
      </div>
      <div className="py-14 sm:py-16 bg-[#00521F]">
        <div className="w-full container-margin-compact">
          <div className="flex items-center justify-center w-full ">
            <div className="max-w-[1300px] flex-col sm:flex-row flex items-center justify-center gap-6 sm:gap-10">
              <div className="w-full max-w-[150px] sm:w-[230px]">
                <img src="/assets/About/USDA.png" className="w-full " />
              </div>
              <div>
                <h2 className="text-white-shade-100 text-center sm:text-left font-markaziText text-4xl md:text-[48px] leading-10 max-w-[500px]">
                  The Power of Plants
                </h2>
                <p className="text-white-shade-200  text-center sm:text-left mt-3 sm:mt-6 text-base max-w-[650px]">
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
      <div className="margin-t">
        <Contact dark={true} />
      </div>
    </div>
  );
}
