import Image from "next/image";

import { CocktailsTitle } from "@/components/Hero/CocktailsTitle";
import { HeroSearchAndResultsContainer } from "./HeroSearchAndResultsContainer";

export const Hero = () => {
  return (
    <div className="">
      <div className="relative aspect-video min-h-[calc(100svh-64px)] md:min-h-[500px] w-full h-full">
        <Image
          src={"/images/bar.jpg"}
          alt="Wall of alcohol bottles in a bar"
          fill
          loading="eager"
          priority
          className="z-0 object-cover object-center"
        />

        <div className="absolute bg-neutral-950/80 w-full h-full z-10 flex items-center justify-center">
          <div className="relative h-1/3">
            <Image
              src={"/images/drink.png"}
              alt="logo"
              width={140}
              height={140}
              loading="eager"
              style={{ zIndex: -1 }}
              className="absolute md:bottom-1/3 bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            <h2 className="font-Inter font-black text-2xl mt-4 z-10">
              <CocktailsTitle />
            </h2>

            <p className="text-xl font-Dancing_Script tracking-normal mt-2 text-neutral-200 text-center max-w-[350px] sm:max-w-[470px]">
              {"There's a drink for every occassion"}
            </p>

            <div className="mt-6">
              <HeroSearchAndResultsContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
