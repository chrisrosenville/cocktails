"use client";

import { useState } from "react";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";

export const Searchbar = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <>
      <SearchInput isFocused={isFocused} setIsFocused={setIsFocused} />
      <SearchResults show={isFocused} onClose={() => setIsFocused(false)} />
    </>
  );
};
