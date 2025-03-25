import {
  TCategoryDrinkItem,
  TCategoryList,
  TCategoryListItem,
} from "@/types/category";
import { create } from "zustand";

type CategoryStore = {
  categoryList: TCategoryListItem[];
  setCategoryList: (categories: TCategoryListItem[]) => void;

  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;

  drinksFromSelectedCategory: TCategoryDrinkItem[] | null;
  setDrinksFromSelectedCategory: (drinks: TCategoryDrinkItem[] | null) => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
  categoryList: [],
  setCategoryList: (categories) => set({ categoryList: categories }),

  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),

  drinksFromSelectedCategory: null,
  setDrinksFromSelectedCategory: (drinks) =>
    set({ drinksFromSelectedCategory: drinks }),
}));
