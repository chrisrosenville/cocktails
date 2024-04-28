import { create } from "zustand";

import { TIngredientList } from "@/types/categoryList";

import { getIngredientList } from "@/utils/getRecipes";

type IngredientStore = {
  ingredientList: TIngredientList | null;
  fetchIngredientList: () => void;
  clearIngredientList: () => void;

  selectedIngredient: string;
  setSelectedIngredient: (ingredient: string) => void;
  clearSelectedIngredient: () => void;
};

export const useIngredientStore = create<IngredientStore>((set) => ({
  ingredientList: null,
  fetchIngredientList: async () => {
    const ingredientList = await getIngredientList();
    set({ ingredientList });
  },
  clearIngredientList: () => set({ ingredientList: null }),

  selectedIngredient: "",
  setSelectedIngredient: (ingredient: string) =>
    set({ selectedIngredient: ingredient }),
  clearSelectedIngredient: () => set({ selectedIngredient: "" }),
}));
