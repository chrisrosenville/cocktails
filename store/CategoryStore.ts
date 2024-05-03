import { TCategoryDrinkItem } from "@/types/category";
import { create } from "zustand";

type CategoryStore = {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;

  categoryDrinksList: TCategoryDrinkItem[] | null;
  setCategoryDrinksList: (drinks: TCategoryDrinkItem[] | null) => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),

  categoryDrinksList: null,
  setCategoryDrinksList: (drinks) => set({ categoryDrinksList: drinks }),
}));
