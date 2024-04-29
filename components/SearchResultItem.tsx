import Image from "next/image";

import { TDrink } from "@/types/drink";
import Link from "next/link";

export const SearchResultItem = ({ drink }: { drink: TDrink }) => {
  return (
    <li
      key={drink.idDrink}
      className="flex sm:flex-col overflow-hidden rounded-lg sm:rounded-b-none bg-neutral-900 hover:bg-teal-500"
    >
      <Link
        className="relative h-[100px] sm:h-[240px] aspect-square flex flex-shrink-0"
        href={`/drink/${drink.idDrink}`}
      >
        <Image
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          fill
          className="object-cover cursor-pointer"
          sizes="300px, 300px"
        />
      </Link>
      <div className="w-full flex flex-col p-2">
        <Link href={`/drink/${drink.idDrink}`}>
          <h3 className="text-lg font-semibold hover:underline leading-6">
            {drink.strDrink}
          </h3>
        </Link>
        <div className="flex flex-col mt-1 text-[10px]">
          <span className="">{drink.strAlcoholic}</span>
          <span className="">{drink.strCategory}</span>
        </div>
      </div>
    </li>
  );
};
