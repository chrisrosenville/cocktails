"use client";

import { MouseEventHandler } from "react";

export const GetStartedButton = () => {
  const scrollToDrinkSection:
    | MouseEventHandler<HTMLButtonElement>
    | undefined = () => {
    document.getElementById("drinkSection")?.scrollTo({ behavior: "smooth" });
  };

  return (
    <button
      className="px-6 py-3 mt-6 bg-amber-600 uppercase text-white rounded-3xl text-sm"
      onClick={scrollToDrinkSection}
    >
      <span>Get started</span>
    </button>
  );
};
