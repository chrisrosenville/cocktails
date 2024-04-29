import { create } from "zustand";

import { TDrink } from "@/types/drink";

type SearchStore = {
  searchResult: { drinks: TDrink[] } | null;
  searchName: string;
  setSearchName: (search: string) => void;
  clearSearchName: () => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  searchResult: null,
  searchName: "",
  setSearchName: (search: string) => set({ searchName: search }),
  clearSearchName: () => set({ searchName: "" }),
}));
