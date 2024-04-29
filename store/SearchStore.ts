import { create } from "zustand";

import { TDrink } from "@/types/drink";

type SearchStore = {
  searchResult: { drinks: TDrink[] } | null;
  searchName: string;
  setSearchResult: (result: { drinks: TDrink[] }) => void;
  setSearchName: (search: string) => void;
  clearSearchName: () => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  searchResult: null,
  searchName: "",
  setSearchResult: (result: { drinks: TDrink[] }) =>
    set({ searchResult: result }),
  setSearchName: (search: string) => set({ searchName: search }),
  clearSearchName: () => set({ searchName: "" }),
}));
