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
    <main className="min-h-svh md:min-h-screen">
      <div className="relative aspect-square w-full md:h-[50vw] max-h-[600px] overflow-hidden">
        <Image
          src={data?.drinks[0]?.strDrinkThumb ?? ""}
          alt={data?.drinks[0]?.strDrink ?? "Cocktail"}
          fill
          sizes="300px 300px, (min-width: 640px) 600px 600px"
        />
      </div>

      <div className="p-4">
        <h1 className="text-4xl font-bold font-OpenSans mb-4">
          {data?.drinks[0]?.strDrink}
        </h1>

        <span className="">Tags:</span>

        <div className="flex flex-wrap text-sm gap-2 py-1">
          <TagContainer name={data?.drinks[0]?.strCategory} />
          <TagContainer name={data?.drinks[0]?.strAlcoholic} />
          <TagContainer name={data?.drinks[0]?.strGlass} />
        </div>

        <div className="flex flex-col mt-4">
          <span className="underline underline-offset-2">Ingredients</span>
          <p>{`${ingredients}`}</p>
        </div>
        <div className="mt-4">
          <span className="underline underline-offset-2">Instructions</span>
          <p>{data?.drinks[0]?.strInstructions}</p>
        </div>
      </div>
    </main>
  );
}
