import { create } from "zustand";

import { TCategoryList } from "@/types/categoryList";

import { getCategoryList } from "@/utils/getRecipes";

type CategoryStore = {
  categoryList: TCategoryList | null;
  fetchCategoryList: () => void;
  clearCategoryList: () => void;

  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  clearSelectedCategory: () => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
  categoryList: null,
  fetchCategoryList: async () => {
    const categoryList = await getCategoryList();
    set({ categoryList });
    return categoryList;
  },
  clearCategoryList: () => set({ categoryList: null }),

  selectedCategory: "",
  setSelectedCategory: (category: string) =>
    set({ selectedCategory: category }),
  clearSelectedCategory: () => set({ selectedCategory: "" }),
}));
