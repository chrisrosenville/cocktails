"use client";

import { useState } from "react";

import { CategoryList } from "./CategoryList";
import { CategorySearchResults } from "./CategorySearchResults";

export const CategorySelectAndSearchContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [resultLength, setResultLength] = useState<number>(0);

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
