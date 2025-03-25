import Image from "next/image";

import { CocktailsTitle } from "@/components/Hero/CocktailsTitle";
import { Searchbar } from "../Searchbar/Searchbar";

export const Hero = () => {
  return (
    <div className="relative aspect-video min-h-[calc(100svh-64px)] md:min-h-[500px] w-full h-full">
      <Image
        src={"/images/bar.jpg"}
        alt="Wall of alcohol bottles in a bar"
        fill
        loading="eager"
        priority
        className="object-cover object-center"
      />

      <div
        style={{ zIndex: 1 }}
        className="absolute inset-0 bg-neutral-950/80 w-full h-full"
      ></div>

      <div className="flex flex-col items-center justify-center sm:max-w-[400px] md:max-w-[500px] max-w-[320px] mx-auto h-full w-full">
        <div style={{ zIndex: 2 }} className="relative">
          <Image
            src={"/images/drink.png"}
            alt="logo"
            width={140}
            height={140}
            loading="eager"
            style={{ zIndex: -1 }}
            className="absolute md:bottom-2/5 bottom-1/2 left-1/2 -translate-x-1/2"
          />

          <h2 className="font-Inter font-black text-2xl mt-4">
            <CocktailsTitle />
          </h2>

          <p className="text-xl font-DancingScript tracking-tight mt-2 text-neutral-200 text-center max-w-[350px] sm:max-w-[470px]">
            {"There's a drink for every occassion"}
          </p>
        </div>

        <div style={{ zIndex: 2 }} className="mt-6 relative w-full">
          <Searchbar />
        </div>
      </div>
    </div>
  );
};
