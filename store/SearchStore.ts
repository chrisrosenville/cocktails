import { create } from "zustand";

type SearchStore = {
  searchValue: string;
  setSearchValue: (search: string) => void;
  clearSearchValue: () => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  searchValue: "",
  setSearchValue: (search: string) => set({ searchValue: search }),
  clearSearchValue: () => set({ searchValue: "" }),
}));
