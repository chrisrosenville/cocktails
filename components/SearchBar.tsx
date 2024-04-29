"use client";

import { FC, useState } from "react";

import { CategoryDropdown } from "./DropdownList/CategoryDropdown";
import { IngredientDropdownList } from "./DropdownList/IngredientDropdown";

import { useCategoryStore } from "@/store/CategoryStore";
import { useIngredientStore } from "@/store/IngredientStore";
import { useSearchStore } from "@/store/SearchStore";

export const SearchBar: FC = () => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isIngredientDropdownOpen, setIsIngredientDropdownOpen] =
    useState(false);

  const categoryStore = useCategoryStore();
  const ingredientStore = useIngredientStore();
  const searchStore = useSearchStore();

  if (!categoryStore.categoryList?.drinks) {
    categoryStore.fetchCategoryList();
    return;
  }

  if (!ingredientStore.ingredientList?.drinks) {
    ingredientStore.fetchIngredientList();
    return;
  }

  return (
    <div className="flex space-x-2 w-full border px-1 rounded-xl bg-white mx-auto justify-between">
      {/* Input container */}
      <div className=" min-w-[300px] min-h-4 w-full text-xs font-light">
        <input
          type="text"
          placeholder="Search by name"
          className="px-2 py-2 h-full text-black rounded-xl w-full focus-visible:outline-0"
          value={searchStore.searchName}
          onChange={(e) => searchStore.setSearchName(e.target.value)}
        />
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
