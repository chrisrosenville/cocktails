"use client";

import { useState } from "react";

import { HeroSearchInput } from "../Inputs/HeroSearchInput";
import { HeroSearchResultList } from "./HeroSearchResultList";

export const HeroSearchAndResultsContainer = () => {
  const [showResults, setShowResults] = useState(false);

  const handleShowResults = (e: boolean) => {
    setShowResults(e);
  };

  return (
    <div className=" flex flex-col relative">
      <HeroSearchInput setIsFocused={handleShowResults} />
      <HeroSearchResultList
        isOpen={showResults}
        setIsOpen={() => setShowResults(false)}
      />
    </div>
  );
};
