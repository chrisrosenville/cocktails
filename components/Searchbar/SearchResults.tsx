"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useRecipeStore } from "@/store/RecipeStore";
import { useSearchStore } from "@/store/SearchStore";

import { OutsideClickContainer } from "../OutsideClickContainer";

interface Props {
  show: boolean;
  onClose: () => void;
}

export const SearchResults = (props: Props) => {
  const searchValue = useSearchStore((state) => state.searchValue);
  const searchResult = useRecipeStore((state) => state.searchResult);

  if (searchValue.length < 3) return null;

  return (
    <>
      <OutsideClickContainer
        className="relative"
        isOpen={props.show}
        onClose={props.onClose}
      >
        <ul
          id="searchResults"
          style={{ zIndex: 99 }}
          className="w-full px-4 mt-2 pb-2 top-1/2 max-h-[360px] z-40 rounded-md overflow-y-scroll bg-neutral-100"
        >
          {/* No results from search */}
          {searchValue.length > 2 && !searchResult && (
            <li className="pt-4 pb-2 justify-center flex">
              <span className="text-black text-xs">No results found</span>
            </li>
          )}

          {searchResult?.map((drink) => (
            <li
              className="text-neutral-900 py-4 hover:bg-neutral-200 border-b border-neutral-300 overflow-hidden"
              key={drink.idDrink}
              onClick={() => console.log("Outside Click!")}
            >
              <Link
                className="flex"
                href={`/drink/${drink.idDrink}`}
                onClick={() => console.log("Click!")}
              >
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
                  <span className="text-sm font-semibold">
                    {drink.strDrink}
                  </span>
                  <span className="text-xs">{drink.strCategory}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </OutsideClickContainer>
    </>
  );
};
