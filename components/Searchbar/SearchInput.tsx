"use client";

import { useEffect } from "react";

import { useRecipeStore } from "@/store/RecipeStore";
import { useSearchStore } from "@/store/SearchStore";

import { getRecipesBySearchValue } from "@/utils/fetchData";

import { IoSearchOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@/hooks/useDebounce";

interface Props {
  isFocused: boolean;
  setIsFocused: (value: boolean) => void;
}

export const SearchInput = (props: Props) => {
  const searchValue = useSearchStore((state) => state.searchValue);
  const setSearchValue = useSearchStore((state) => state.setSearchValue);
  const setSearchResult = useRecipeStore((state) => state.setSearchResult);

  const debouncedSearchTerm = useDebounce(searchValue, 300);

  useQuery({
    queryKey: ["search", debouncedSearchTerm],
    enabled: !!debouncedSearchTerm,
    queryFn: () =>
      getRecipesBySearchValue(debouncedSearchTerm).then((recipes) => {
        setSearchResult(recipes ?? null);
        return recipes;
      }),
  });

  return (
    <div className="w-full relative bg-neutral-100 rounded-md">
      <IoSearchOutline className="absolute text-lg top-1/2 -translate-y-1/2 left-3 text-neutral-500" />
      <input
        id="search-drink"
        name="search"
        autoComplete="on"
        type="text"
        onBlur={() => props.setIsFocused(false)}
        onFocus={() => props.setIsFocused(true)}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder={"Search for a drink..."}
        className="pl-10 h-10 text-black font-Inter text-xs placeholder-neutral-400 bg-transparent font-light rounded-md w-full focus-visible:outline-0"
      />
    </div>
  );
};
