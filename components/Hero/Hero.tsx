import Image from "next/image";

import { CocktailsTitle } from "@/components/Hero/CocktailsTitle";
import { HeroSearchAndResultsContainer } from "./HeroSearchAndResultsContainer";

export const Hero = () => {
  return (
    <div className="w-full relative h-[460px] sm:h-[500px]">
      {/* Image wrapper */}
      <div className="relative w-full h-full">
        <Image
          src={"/images/bar.jpg"}
          alt="Wall of alcohol bottles"
          fill
          loading="eager"
          priority
          className="z-0 object-cover"
        />
        {/* Image overlay */}
        <div className="absolute bg-neutral-950/80 w-full h-full z-10"></div>

        {/* Title and subtitle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-[500px] flex flex-col pt-24 sm:pt-16 md:pt-12 z-30">
          <div className="flex items-center space-x-3 relative">
            <Image
              src={"/images/drink.png"}
              alt="logo"
              width={180}
              height={180}
              className="absolute bottom-[22px] left-1/2 -translate-x-1/2 z-0"
            />
            <h2 className="font-Inter font-black text-2xl my-4 z-10">
              <CocktailsTitle />
            </h2>
          </div>
          <div className="text-xs md:text-sm mt-2 text-neutral-200 text-center max-w-[350px] sm:max-w-[470px]">
            <p>
              Discover a wide variety of delicious drink recipes, from classic
              cocktails to unique creations. Whether {"you're"} a seasoned
              mixologist or just starting out, our collection of recipes will
              surely satisfy your thirst for new flavors. Cheers!
            </p>
          </div>

          {/* Search */}
          <HeroSearchAndResultsContainer />
        </div>
      </div>
    </div>
  );
};
