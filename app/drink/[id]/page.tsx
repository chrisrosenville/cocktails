"use client";

import Image from "next/image";

import { getCocktailById } from "@/utils/fetchData";
import { extractIngredients } from "@/utils/extractIngredients";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

interface TagProps {
  name: string;
}
function TagContainer(props: TagProps) {
  return (
    <span className="bg-neutral-400 text-center rounded-md py-1 text-xs px-2">
      {props.name}
    </span>
  );
}

export default function DrinkPage() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["getDrinkById"],
    queryFn: () => getCocktailById(id as string),
  });

  console.log(data);

  const ingredients = extractIngredients(
    data?.drinks[0] ? data.drinks[0] : undefined
  );

  if (!data?.drinks) return null;

  return (
    <main className="min-h-svh flex flex-col sm:max-w-[600px] sm:mx-auto md:pt-16">
      <div className="relative aspect-square sm:aspect-square w-full sm:mx-auto sm:w-[600px]">
        <Image
          src={data?.drinks[0]?.strDrinkThumb ?? ""}
          alt={data?.drinks[0]?.strDrink ?? "Cocktail"}
          fill
          className="aspect-square"
        />
      </div>

      <div className="w-full p-4">
        <h1 className="text-4xl font-bold font-OpenSans mb-4">
          {data?.drinks[0]?.strDrink}
        </h1>

        <span className="font-bold">Tags:</span>

        <div className="flex flex-wrap text-sm gap-2 py-1">
          <TagContainer name={data?.drinks[0]?.strCategory} />
          <TagContainer name={data?.drinks[0]?.strAlcoholic} />
          <TagContainer name={data?.drinks[0]?.strGlass} />
        </div>

        <div className="flex flex-col mt-4">
          <span className="font-bold mb-1">Ingredients:</span>
          <p className="text-sm">{`${ingredients}`}</p>
        </div>

        <div className="mt-4">
          <span className="font-bold mb-1">Instructions:</span>
          <p className="text-sm">{data?.drinks[0]?.strInstructions}</p>
        </div>
      </div>
    </main>
  );
}
