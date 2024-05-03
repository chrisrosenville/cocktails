"use client";

import { useState } from "react";

import { HeroSearchInput } from "../Inputs/HeroSearchInput";
import { HeroSearchResultList } from "./HeroSearchResultList";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export const HeroSearchAndResultsContainer = () => {
  const [showResults, setShowResults] = useState(false);

  const handleOutsideClick = useOutsideClick(() => {
    setShowResults(false);
  });

  const handleShowResults = (e: boolean) => {
    setShowResults(e);
  };

  return (
    <div
      ref={handleOutsideClick}
      className="w-full relative mt-6"
      onFocus={() => setShowResults(true)}
    >
      <HeroSearchInput setIsFocused={handleShowResults} />
      <HeroSearchResultList isOpen={showResults} />
    </div>
  );
};
