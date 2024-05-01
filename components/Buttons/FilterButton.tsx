import { FC } from "react";

import { useOutsideClick } from "@/hooks/useOutsideClick";

import { AiOutlineControl } from "react-icons/ai";

type FilterButtonProps = {
  textValue: string;
  isFilterOpen: boolean;
  setIsFilterOpen: (value: boolean) => void;
};

export const FilterButton: FC<FilterButtonProps> = ({
  textValue,
  isFilterOpen,
  setIsFilterOpen,
}) => {
  const ref = useOutsideClick(() => {
    setIsFilterOpen(false);
  });

  return (
    <button
      ref={ref}
      onClick={() => setIsFilterOpen(!isFilterOpen)}
      className="rounded-2xl border-[0.5px] border-black font-light text-xs bg-white flex items-center px-4 py-1 text-black"
    >
      {textValue}
      <AiOutlineControl className="inline ml-1 text-sm" />
    </button>
  );
};
