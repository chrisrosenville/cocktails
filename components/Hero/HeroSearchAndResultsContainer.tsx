"use client";

import { useState } from "react";

import { HeroSearchInput } from "../Inputs/HeroSearchInput";
import { HeroSearchResultList } from "./HeroSearchResultList";

export const HeroSearchAndResultsContainer = () => {
  const [showResults, setShowResults] = useState(false);

  console.log("showResults: ", showResults);

  const handleShowResults = (e: boolean) => {
    setShowResults(e);
  };

  return (
    <div className="w-full relative mt-6">
      <HeroSearchInput setIsFocused={handleShowResults} />
      <HeroSearchResultList isOpen={showResults} />
    </div>
  );
};
