import Image from "next/image";

import { TDrink } from "@/types/drink";
import Link from "next/link";

export const SearchResultItem = ({ drink }: { drink: TDrink }) => {
  return (
    <li key={drink.idDrink} className="flex justify-center">
      <Link
        className="relative h-[100px] w-[100px] flex flex-shrink-0"
        href={`/drink/${drink.idDrink}`}
      >
        <Image
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          fill
          className="object-cover rounded-lg cursor-pointer"
          sizes="100px 100px"
        />
      </Link>
      <div className="w-full flex flex-col px-4">
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
