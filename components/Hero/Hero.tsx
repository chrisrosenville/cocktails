import Image from "next/image";
import { CocktailsText } from "@/components/Hero/CocktailsText";

export const Hero = () => {
  return (
    <div className="w-full h-[460px] sm:h-[500px]">
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
        <div className="absolute w-full flex flex-col justify-center items-center h-full z-30 mt-14 md:mt-20">
          <div className="flex items-center space-x-3 relative">
            <Image
              src={"/images/drink.png"}
              alt="logo"
              width={180}
              height={180}
              className="absolute bottom-[22px] left-1/2 -translate-x-1/2 z-0"
            />
            <h2 className="font-Inter font-black text-2xl my-4 z-10">
              <CocktailsText />
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
        </div>
      </div>
    </div>
  );
};
