"use client";
import { useCallback, useEffect } from "react";

import { useCategoryStore } from "@/store/CategoryStore";
import { TCategoryListItem } from "@/types/category";

import { getCategoryList, getRecipesByCategory } from "@/utils/fetchData";

export const CategoryList = () => {
  const categoryStore = useCategoryStore();

  const getCategories = useCallback(async () => {
    const categoryArray = await getCategoryList();

    if (!categoryArray) return null;

    console.log("Getting all categories...");
    categoryStore.setCategoryList(categoryArray);
    categoryStore.setSelectedCategory(categoryArray[0].strCategory);
  }, []);

  const getDrinksFromSelectedCategory = useCallback(async () => {
    if (!categoryStore.selectedCategory) return;

    console.log("Fetching drinks for selected category...");
    await getRecipesByCategory(categoryStore.selectedCategory).then((res) => {
      categoryStore.setDrinksFromSelectedCategory(res);
    });
  }, []);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getDrinksFromSelectedCategory();
  }, [categoryStore.selectedCategory]);

  const handleSelectCategory = (categoryName: string | null) => {
    categoryStore.setSelectedCategory(categoryName);
    console.log("Selecting new category:", categoryName);
  };

  if (!categoryStore.categoryList) return null;

  return (
    <ul
      className={`flex flex-shrink max-w-[600px] mx-auto justify-center gap-2 overflow-hidden py-1 flex-wrap transition-[max-height] duration-500 md:duration-300 ease-linear`}
    >
      {categoryStore.categoryList.map((category: TCategoryListItem) => (
        <li
          className={`${
            categoryStore.selectedCategory === category.strCategory &&
            "font-bold bg-neutral-300 border-lime-700"
          } text-sm font-light cursor-pointer px-3 py-1 border-2 border-neutral-50 bg-neutral-50 rounded-xl flex justify-center items-center text-nowrap`}
          key={category.strCategory}
          onClick={() => handleSelectCategory(category.strCategory)}
        >
          <span>{category.strCategory}</span>
        </li>
      ))}
    </ul>
  );
};
