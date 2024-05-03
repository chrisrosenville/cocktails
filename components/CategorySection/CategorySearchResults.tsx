import { FC, useCallback, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { getRecipesByCategory } from "@/utils/fetchData";
import { useCategoryStore } from "@/store/CategoryStore";

export const CategorySearchResults = () => {
  const drinks = useCategoryStore((state) => state.categoryDrinksList);
  const setDrinks = useCategoryStore((state) => state.setCategoryDrinksList);

  const selectedCategory = useCategoryStore((state) => state.selectedCategory);

  const fetchDrinksFromSelectedCategory = useCallback(async () => {
    if (!selectedCategory) return;

    const res = await getRecipesByCategory(selectedCategory);
    setDrinks(res);
  }, [selectedCategory, setDrinks]);

  useEffect(() => {
    fetchDrinksFromSelectedCategory();
  }, [fetchDrinksFromSelectedCategory]);

  return (
    <>
      <ul className="grid grid-flow-row grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {drinks?.map((drink) => (
          <li
            key={drink.idDrink}
            className="hover:bg-neutral-200 shadow overflow-hidden rounded-md"
          >
            <Link href={`/drink/${drink.idDrink}`}>
              <div className="relative h-[170px] lg:h-[170px] w-full">
                <Image
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  fill
                  sizes="200px 200px"
                />
              </div>
              <div className="p-2 leading-3">
                <span className="text-xs">{drink.strDrink}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
