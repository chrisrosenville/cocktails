"use client";

import { FC } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useIngredientStore } from "@/store/IngredientStore";
import { TIngredientList } from "@/types/categoryList";

import { IoIosArrowDown } from "react-icons/io";

type IngredientDropdownList = {
  options: TIngredientList | null;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const IngredientDropdownList: FC<IngredientDropdownList> = ({
  options,
  isOpen,
  setIsOpen,
}) => {
  const selected = useIngredientStore((state) => state.selectedIngredient);
  const setSelected = useIngredientStore(
    (state) => state.setSelectedIngredient
  );

  const outsideClickRef = useOutsideClick(() => setIsOpen(false));

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  if (!options) return <div>Failed to load categories</div>;

  return (
    <div
      className="relative w-full text-nowrap text-black min-w-[150px]"
      ref={outsideClickRef}
    >
      <button
        className={`flex w-full items-center justify-between rounded bg-white p-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected ? selected : "Choose ingredient"}</span>
        <IoIosArrowDown
          className={`ml-1 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          size={16}
        />
      </button>

      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } z-10 absolute mt-1 w-full max-h-[200px] overflow-y-scroll rounded bg-gray-50 ring-1 ring-gray-300`}
      >
        <li
          className="cursor-pointer select-none p-2 hover:bg-gray-200"
          onClick={() => handleSelect("")}
        >
          Choose option
        </li>
        {options.drinks.map((option, key) => (
          <li
            key={key}
            className="cursor-pointer select-none p-2 hover:bg-gray-200"
            onClick={() => handleSelect(option.strIngredient1)}
          >
            {option.strIngredient1}
          </li>
        ))}
      </ul>
    </div>
  );
};
