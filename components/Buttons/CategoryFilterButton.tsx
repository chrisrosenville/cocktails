import { FC } from "react";

import { AiOutlineControl } from "react-icons/ai";

type CategoryFilterButtonProps = {
  isFilterOpen: boolean;
  setIsFilterOpen: (value: boolean) => void;
};

export const CategoryFilterButton: FC<CategoryFilterButtonProps> = ({
  isFilterOpen,
  setIsFilterOpen,
}) => {
  return (
    <button
      onClick={() => setIsFilterOpen(!isFilterOpen)}
      className="rounded-sm border-[0.5px] border-black font-light text-xs bg-white flex items-center px-4 py-1 text-black"
    >
      {isFilterOpen ? "Hide categories" : "Show categories"}
      <AiOutlineControl className="inline ml-1 text-sm" />
    </button>
  );
};
