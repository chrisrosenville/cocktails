"use client";

import { TCategoryListItem } from "@/types/category";
import { getCategoryList } from "@/utils/fetchData";
import { FC, useEffect, useState } from "react";
import { CategoryFilterButton } from "../Buttons/CategoryFilterButton";

type CategoryListProps = {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  resultLength: number;
};

export const CategoryList: FC<CategoryListProps> = ({
  selectedCategory,
  setSelectedCategory,
  resultLength,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<TCategoryListItem[] | null>(
    null
  );

  async function fetchCategories() {
    const categories = await getCategoryList();

    setCategories(categories);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  if (!categories) return null;

  return (
    <>
      <div className="flex w-full relative justify-center sm:justify-between items-center">
        <CategoryFilterButton
          isFilterOpen={isOpen}
          setIsFilterOpen={setIsOpen}
        />
        {resultLength > 0 && (
          <span className="text-[10px] absolute sm:relative right-0 top-1/2 sm:-translate-y-0 -translate-y-1/2 font-light">
            Found {resultLength} results
          </span>
        )}
      </div>
      <ul
        className={`${
          isOpen ? "max-h-[100px] sm:max-h-[70px] lg:max-h-[35px]" : "max-h-0"
        } flex flex-shrink space-x-1 overflow-hidden mt-2 flex-wrap transition-[max-height] duration-500 md:duration-300 ease-linear`}
      >
        {categories.map((category) => (
          <li
            className={`${
              selectedCategory === category.strCategory && "bg-neutral-300"
            } text-[10px] border px-2 py-1 mt-2 rounded-xl flex justify-center items-center text-nowrap`}
            key={category.strCategory}
            onClick={() => setSelectedCategory(category.strCategory)}
          >
            <span>{category.strCategory}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
