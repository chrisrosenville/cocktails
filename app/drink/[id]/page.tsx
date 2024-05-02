import Image from "next/image";

import { getCocktailById } from "@/utils/fetchData";
import { extractIngredients } from "@/utils/extractIngredients";

export default async function DrinkPage({
  params,
}: {
  params: { id: string };
}) {
  const getCocktail = await getCocktailById(params.id);
  const cocktail = getCocktail?.drinks[0];

  const ingredients = extractIngredients(cocktail ? cocktail : undefined);

  return (
    <main className="min-h-svh md:min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row p-4">
        <div className="relative w-full h-[80vw] md:h-[50vw] max-h-[600px] overflow-hidden rounded-xl">
          <Image
            src={cocktail?.strDrinkThumb ?? ""}
            alt={cocktail?.strDrink ?? "Cocktail"}
            fill
            sizes="300px 300px, (min-width: 640px) 600px 600px"
          />
        </div>
        <div className="mt-2 md:mt-0 md:ml-4">
          <h1 className="text-4xl font-bold font-Oswald">
            {cocktail?.strDrink}
          </h1>
          <div className="flex flex-col py-4 text-xs">
            <span>{cocktail?.strCategory}</span>
            <span>{cocktail?.strAlcoholic}</span>
            <span>{cocktail?.strGlass}</span>
          </div>
          <div className="flex flex-col">
            <span className="underline underline-offset-2">Ingredients</span>
            <p>{`${ingredients}`}</p>
          </div>
          <div className="mt-4">
            <span className="underline underline-offset-2">Instructions</span>
            <p>{cocktail?.strInstructions}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
