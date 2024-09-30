import React from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroCard = (props) => {
  const { title, image, link } = props;
  return (
    <div>
      <div className="relative flex flex-col items-center content-center justify-center overflow-x-hidden md:flex-row">
        <Link href={link ? link : "#"}>
          <picture>
            {/* Small Image */}
            <source
              media="(max-width: 650px)"
              srcSet={`/assets/Home/${image}-mobile.webp`}
            />
            {/* Medium Image */}
            <source
              media="(max-width: 1000px)"
              srcSet={`/assets/Home/${image}-tablet.webp`}
            />
            {/* Large Image */}
            <source srcSet={`/assets/Home/${image}-desktop.webp`} />
            {/* Default fallback image (for browsers that don't support <picture>) */}
            <Image
              src={`/assets/Home/${image}-desktop.webp`}
              alt={title}
              width={4000}
              height={688}
              priority={true}
              title={title}
              objectFit="cover"
              objectPosition="center"
              draggable="false"
              className="block h-auto max-w-full select-none"
            />
          </picture>
        </Link>
      </div>
    </div>
  );
};
