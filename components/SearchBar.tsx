"use client";

import { FC, useEffect, useState } from "react";

import { useSearchStore } from "@/store/SearchStore";
import { useCategoryStore } from "@/store/CategoryStore";

import { useOutsideClick } from "@/hooks/useOutsideClick";
import { FilterButton } from "./Buttons/FilterButton";

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

  console.log(categoryList);

  useEffect(() => {
    if (!categoryList) {
      getCategoryList();
    }
  }, [
    selectedCategory,
    categoryList,
    results,
    getCategoryList,
    setResults,
    clearSelectedCategory,
  ]);

  return (
    <div className="relative w-full">
      <div className="flex space-x-6 relative w-full px-1 justify-between items-center">
        <div className="w-80">
          <input
            type="text"
            placeholder="Search by name"
            className="px-2 h-6 text-black text-xs font-light rounded-md w-full focus-visible:outline-0"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        {/* <p className="text-nowrap text-xs">
        Found {results?.drinks.length} recipes
      </p> */}

        <FilterButton
          textValue={selectedCategory ? selectedCategory : "Filter"}
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
        />
      </div>

      <div
        className={`${
          isFilterOpen ? "h-[100px]" : "h-0"
        } bg-white mt-4 z-50 transition-[height] ease-linear max-h-[200px] overflow-hidden rounded-lg`}
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

      {/* Dropdowns container */}
      {/* <div className="flex space-x-1 w-fit ">
        <div className="border-l text-xs">
          <CategoryDropdown
            options={categoryStore.categoryList}
            isOpen={isCategoryDropdownOpen}
            setIsOpen={(status: boolean) => setIsCategoryDropdownOpen(status)}
          />
        </div>
        <div className="border-l text-xs">
          <IngredientDropdownList
            options={ingredientStore.ingredientList}
            isOpen={isIngredientDropdownOpen}
            setIsOpen={(status: boolean) => setIsIngredientDropdownOpen(status)}
          />
        </div>
      </div> */}
    </div>
  );
};
