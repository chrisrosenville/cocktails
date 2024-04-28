import { create } from "zustand";

type SearchStore = {
  searchResult: { drinks: [] } | null;
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
