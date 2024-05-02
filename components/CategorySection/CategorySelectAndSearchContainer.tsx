"use client";

import { useState } from "react";

import { CategoryList } from "./CategoryList";
import { CategorySearchResults } from "./CategorySearchResults";
import { useCategoryStore } from "@/store/CategoryStore";

export const CategorySelectAndSearchContainer = () => {
  const [resultLength, setResultLength] = useState<number>(0);

  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const setSelectedCategory = useCategoryStore(
    (state) => state.setSelectedCategory
  );

  return (
    <>
      <CategoryList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        resultLength={resultLength}
      />
      <div className="mt-4">
        <CategorySearchResults
          selectedCategory={selectedCategory}
          setResultLength={(n: number) => setResultLength(n)}
        />
      </div>
    </>
  );
};
