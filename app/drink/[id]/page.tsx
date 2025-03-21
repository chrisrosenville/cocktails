"use client";

import Image from "next/image";

import { getCocktailById } from "@/utils/fetchData";
import { extractIngredients } from "@/utils/extractIngredients";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

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
    <main className="min-h-svh md:min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row p-4 ">
        <div className="relative w-full h-[80vw] md:h-[50vw] max-h-[600px] overflow-hidden rounded-xl">
          <Image
            src={data?.drinks[0]?.strDrinkThumb ?? ""}
            alt={data?.drinks[0]?.strDrink ?? "Cocktail"}
            fill
            sizes="300px 300px, (min-width: 640px) 600px 600px"
          />
        </div>
        <div className="mt-2 md:mt-0 md:ml-4">
          <h1 className="text-4xl font-bold font-Oswald">
            {data?.drinks[0]?.strDrink}
          </h1>
          <div className="flex flex-col py-4 text-xs">
            <span>{data?.drinks[0]?.strCategory}</span>
            <span>{data?.drinks[0]?.strAlcoholic}</span>
            <span>{data?.drinks[0]?.strGlass}</span>
          </div>
          <div className="flex flex-col">
            <span className="underline underline-offset-2">Ingredients</span>
            <p>{`${ingredients}`}</p>
          </div>
          <div className="mt-4">
            <span className="underline underline-offset-2">Instructions</span>
            <p>{data?.drinks[0]?.strInstructions}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
