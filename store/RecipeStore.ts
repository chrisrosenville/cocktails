import { create } from "zustand";

import { TDrink } from "@/types/drink";

type RecipeStore = {
  searchResult: TDrink[] | null;
  setSearchResult: (result: TDrink[] | null) => void;
  clearSearchResult: () => void;

  categoryResult: TDrink[] | null;
  setCategoryResult: (result: TDrink[]) => void;
  clearCategoryResult: () => void;
};

export const useRecipeStore = create<RecipeStore>((set) => ({
  searchResult: null,
  setSearchResult: (result: TDrink[] | null) => set({ searchResult: result }),
  clearSearchResult: () => set({ searchResult: null }),

  categoryResult: null,
  setCategoryResult: (result: TDrink[]) => set({ categoryResult: result }),
  clearCategoryResult: () => set({ categoryResult: null }),
}));
