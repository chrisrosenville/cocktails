"use client";

import { FC, useEffect, useState } from "react";

import { useSearchStore } from "@/store/SearchStore";
import { useCategoryStore } from "@/store/CategoryStore";

import { FilterButton } from "./Buttons/FilterButton";
import { SearchInput } from "./Inputs/SearchInput";

export const SearchBar: FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const searchValue = useSearchStore((state) => state.searchName);
  const setSearchValue = useSearchStore((state) => state.setSearchName);

  const results = useSearchStore((state) => state.searchResult);
  const setResults = useSearchStore((state) => state.setSearchResult);

  const categoryList = useCategoryStore((state) => state.categoryList);
  const getCategoryList = useCategoryStore((state) => state.fetchCategoryList);
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const setSelectedCategory = useCategoryStore(
    (state) => state.setSelectedCategory
  );
  const clearSelectedCategory = useCategoryStore(
    (state) => state.clearSelectedCategory
  );

  useEffect(() => {
    if (!categoryList) {
      getCategoryList();
    }
  }, [categoryList, getCategoryList]);

  return (
    <div className="relative w-full">
      <div className="flex space-x-6 relative w-full justify-between items-center">
        <SearchInput value={searchValue} setValue={setSearchValue} />

        <FilterButton
          textValue={selectedCategory ? selectedCategory : "Filter"}
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
        />
      </div>

      {/* Filter options */}
      <div
        className={`${
          isFilterOpen ? "h-[100px]" : "h-0"
        } bg-white mt-4 z-50 transition-[height] ease-linear max-h-[200px] overflow-hidden rounded-md`}
      >
        <ul className="grid grid-flow-row grid-cols-4 h-full w-full text-black text-xs font-light">
          {categoryList?.drinks.map((category) => (
            <li
              className="hover:bg-neutral-400 p-2 flex text-center text-nowrap items-center justify-center cursor-pointer"
              key={category.strCategory}
              onClick={() => setSelectedCategory(category.strCategory)}
            >
              {category.strCategory}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
