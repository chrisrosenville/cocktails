"use client";

import { useCategoryStore } from "@/store/CategoryStore";
import { TCategoryListItem } from "@/types/category";
import { getCategoryList } from "@/utils/fetchData";
import { FC, useEffect, useState } from "react";

type CategoryListProps = {
  selectedCategory: string | null;
  setSelectedCategory: (value: string | null) => void;
  resultLength: number;
};

export const CategoryList: FC<CategoryListProps> = ({ resultLength }) => {
  const [categories, setCategories] = useState<TCategoryListItem[] | null>(
    null
  );

  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const setSelectedCategory = useCategoryStore(
    (state) => state.setSelectedCategory
  );

  const handleSelectCategory = (categoryName: string | null) => {
    setSelectedCategory(categoryName);
  };

  async function fetchCategories() {
    const categories = await getCategoryList();

    setCategories(categories);
  }

  useEffect(() => {
    !categories && fetchCategories();
  }, [categories]);

  if (!categories) return null;

  return (
    <ul
      className={`flex flex-shrink max-w-[500px] mx-auto justify-center space-x-1 overflow-hidden flex-wrap transition-[max-height] duration-500 md:duration-300 ease-linear`}
    >
      {categories.map((category) => (
        <li
          className={`${
            selectedCategory === category.strCategory && "bg-neutral-300"
          } text-[10px] border px-2 py-1 mt-2 rounded-xl flex justify-center items-center text-nowrap`}
          key={category.strCategory}
          onClick={() => handleSelectCategory(category.strCategory)}
        >
          <span>{category.strCategory}</span>
        </li>
      ))}
      {selectedCategory && (
        <li
          className={`${
            selectedCategory === null && "bg-neutral-300"
          } text-[10px] border px-2 py-1 mt-2 rounded-xl flex justify-center items-center text-nowrap`}
          onClick={() => handleSelectCategory(null)}
        >
          <span>Clear</span>
        </li>
      )}
    </ul>
  );
};
