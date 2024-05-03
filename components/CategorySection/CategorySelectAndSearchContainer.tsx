"use client";

import { CategoryList } from "./CategoryList";
import { CategorySearchResults } from "./CategorySearchResults";

export const CategorySelectAndSearchContainer = () => {
  return (
    <>
      <CategoryList />
      <div className="mt-4">
        <CategorySearchResults />
      </div>
    </>
  );
};
