"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { useRecipeStore } from "@/store/RecipeStore";
import { useSearchStore } from "@/store/SearchStore";

type HeroSearchResultListProps = {
  isOpen: boolean;
};

export const HeroSearchResultList: FC<HeroSearchResultListProps> = ({
  isOpen,
}) => {
  const searchValue = useSearchStore((state) => state.searchValue);
  const searchResult = useRecipeStore((state) => state.searchResult);

  if (!isOpen || searchValue.length < 3) return null;

  return (
    <ul
      id="searchResults"
      className="absolute w-full px-4 mt-8 pb-2 top-1/2 max-h-[350px] z-40 rounded-3xl overflow-y-scroll bg-neutral-100"
    >
      {/* If there's been a search but no results */}
      {searchValue.length > 2 && !searchResult && (
        <li className="pt-4 pb-2 justify-center flex">
          <span className="text-black text-xs">No results found</span>
        </li>
      )}
      {searchResult?.map((drink) => (
        <li
          className="text-neutral-900 py-4 hover:bg-neutral-200 border-b border-neutral-300 overflow-hidden"
          key={drink.idDrink}
        >
          <Link className="flex" href={`/drink/${drink.idDrink}`}>
            <div className="relative">
              <Image
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                width={50}
                height={50}
                className="object-cover rounded-md"
              />
            </div>
            <div className="ml-2 flex flex-col h-full my-auto justify-center">
              <span className="text-sm font-semibold">{drink.strDrink}</span>
              <span className="text-xs">{drink.strCategory}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
