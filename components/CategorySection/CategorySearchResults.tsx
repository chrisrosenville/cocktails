"use client";
import { useCallback, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { getRecipesByCategory } from "@/utils/fetchData";
import { useCategoryStore } from "@/store/CategoryStore";

export const CategorySearchResults = () => {
  const drinks = useCategoryStore((state) => state.drinksFromSelectedCategory);
  const setDrinks = useCategoryStore(
    (state) => state.setDrinksFromSelectedCategory
  );

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
            className="bg-neutral-50 hover:bg-lime-600 shadow-md overflow-hidden rounded-md"
          >
            <Link href={`/drink/${drink.idDrink}`} className="">
              <div className="relative aspect-[3.6/4] w-full">
                <Image
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  fill
                  sizes="270px 300px"
                  className="object-cover"
                />
              </div>
              <div className="p-2 leading-3 h-full">
                <span className="text-sm">{drink.strDrink}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
