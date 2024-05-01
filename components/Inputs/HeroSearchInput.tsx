"use client";

import { FC, useEffect } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

import { useRecipeStore } from "@/store/RecipeStore";
import { useSearchStore } from "@/store/SearchStore";

import { getRecipesBySearchValue } from "@/utils/fetchData";

import { IoSearchOutline } from "react-icons/io5";

type HeroSearchInputProps = {
  setIsFocused: (value: boolean) => void;
};

export const HeroSearchInput: FC<HeroSearchInputProps> = ({ setIsFocused }) => {
  const searchValue = useSearchStore((state) => state.searchValue);
  const setSearchValue = useSearchStore((state) => state.setSearchValue);

  const setSearchResult = useRecipeStore((state) => state.setSearchResult);

  const handleOutsideClick = useOutsideClick(() => {
    setIsFocused(false);
  });

  useEffect(() => {
    const handleSearch = async () => {
      if (searchValue.length > 2) {
        const res = await getRecipesBySearchValue(searchValue);
        setSearchResult(res);
      } else return;
    };

    handleSearch();
  }, [searchValue, setSearchResult]);

  return (
    <div
      ref={handleOutsideClick}
      className="w-full relative bg-neutral-100 rounded-3xl z-50"
    >
      <IoSearchOutline className="absolute text-lg top-1/2 -translate-y-1/2 left-3 text-neutral-500" />
      <input
        name="search"
        autoComplete="on"
        type="text"
        onFocus={() => setIsFocused(true)}
        placeholder={"Search for a drink..."}
        className="pl-10 h-10 text-black text-xs placeholder-neutral-400 bg-transparent font-light rounded-md w-full focus-visible:outline-0"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};
