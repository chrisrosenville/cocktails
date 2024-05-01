import { create } from "zustand";

type SearchStore = {
  isFocused: boolean;
  setIsFocused: (focused: boolean) => void;

  searchValue: string;
  setSearchValue: (search: string) => void;
  clearSearchValue: () => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  isFocused: false,
  setIsFocused: (focused: boolean) => set({ isFocused: focused }),

  searchValue: "",
  setSearchValue: (search: string) => set({ searchValue: search }),
  clearSearchValue: () => set({ searchValue: "" }),
}));
