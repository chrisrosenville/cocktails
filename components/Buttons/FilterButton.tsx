import { FC } from "react";

import { useOutsideClick } from "@/hooks/useOutsideClick";

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
      className="rounded-2xl font-light text-xs bg-white px-4 py-1 text-black"
    >
      {textValue}
    </button>
  );
};
