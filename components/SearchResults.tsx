"use client";

import { useCallback, useEffect, useState } from "react";
import { useCategoryStore } from "@/store/CategoryStore";
import { useIngredientStore } from "@/store/IngredientStore";
import { useSearchStore } from "@/store/SearchStore";
import { searchByName } from "@/utils/getRecipes";
import { TDrink } from "@/types/drink";
import { SearchResultItem } from "./SearchResultItem";

type Results = {
  drinks: TDrink[] | null;
};

export const SearchResults = () => {
  const searchText = useSearchStore((state) => state.searchName);
  const results = useSearchStore((state) => state.searchResult);
  const setResult = useSearchStore((state) => state.setSearchResult);

  const fetchDrinks = useCallback(async () => {
    const drinks = await searchByName(searchText);
    setResult(drinks);
    console.log(drinks);
  }, [searchText, setResult]);

  useEffect(() => {
    if (searchText.length > 2) {
      fetchDrinks();
    }
  }, [searchText, fetchDrinks]);

  return (
    <div className=" min-h-[500px] mt-4 w-full">
      {results?.drinks && (
        <ul className="grid grid-cols-1 sm:grid-cols-3 mt-4 grid-flow-row gap-4 w-full">
          {results.drinks.map((drink: TDrink) => (
            <SearchResultItem drink={drink} key={drink.idDrink} />
          ))}
        </ul>
      )}
      {searchText.length > 2 && !results?.drinks && (
        <p className="text-sm mt-4 font-light">No results</p>
      )}
    </div>
  );
};
