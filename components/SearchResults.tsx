"use client";

import { useCallback, useEffect, useState } from "react";
import { useCategoryStore } from "@/store/CategoryStore";
import { useIngredientStore } from "@/store/IngredientStore";
import { useSearchStore } from "@/store/SearchStore";
import { getRecipesByName } from "@/utils/fetchData";
import { TDrink } from "@/types/drink";
import { SearchResultItem } from "./SearchResultItem";

type Results = {
  drinks: TDrink[] | null;
};

export const SearchResults = () => {
  const searchText = useSearchStore((state) => state.searchName);
  const results = useSearchStore((state) => state.searchResult);
  const setResult = useSearchStore((state) => state.setSearchResult);

  const selectedCategory = useCategoryStore((state) => state.selectedCategory);

  const filterDrinksAndAddToState = useCallback(
    (drinks: TDrink[]) => {
      if (selectedCategory) {
        const filteredDrinks = drinks.filter(
          (drink: TDrink) => drink.strCategory === selectedCategory
        );
        setResult({ drinks: filteredDrinks });
        console.log("Filtered drinks: ", filteredDrinks);
      } else {
        setResult({ drinks });
      }
    },
    [selectedCategory, setResult]
  );

  const fetchDrinksBySearchValue = useCallback(async () => {
    const res: Results = await getRecipesByName(searchText);

    if (res.drinks) {
      filterDrinksAndAddToState(res.drinks);
    }
    console.log("Unfiltered results: ", res.drinks);
  }, [filterDrinksAndAddToState, searchText]);

  useEffect(() => {
    if (searchText.length > 2) {
      fetchDrinksBySearchValue();
    }
  }, [searchText, fetchDrinksBySearchValue]);

  return (
    <div className=" min-h-[500px] mt-4 w-full">
      {results?.drinks && (
        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 mt-4 grid-flow-row gap-4 w-full">
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
