import { TDrink } from "@/types/drink";
import { extractIngredients } from "@/utils/extractIngredients";
import { getRandomCocktail } from "@/utils/fetchData";
import Image from "next/image";

export default async function RandomDrinkPage() {
  const randomCocktail = await getRandomCocktail();
  const cocktail = randomCocktail?.drinks[0];

  const ingredients = extractIngredients(cocktail);

  return (
    <main>
      <div className="w-full flex relative space-x-8 h-[500px] p-8">
        <div className="relative w-[300px] h-[300px] overflow-hidden rounded-xl flex-shrink-0">
          <Image
            src={cocktail?.strDrinkThumb ?? ""}
            alt={cocktail?.strDrink ?? "Cocktail"}
            fill
            sizes="300px 300px"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold font-Oswald">
            {cocktail?.strDrink}
          </h1>
          <div className="flex flex-col text-sm mt-4">
            <span>{cocktail?.strCategory}</span>
            <span>{cocktail?.strAlcoholic}</span>
            <span>{cocktail?.strGlass}</span>
          </div>
          <p>{`Ingredients: ${ingredients}`}</p>
          <p className="mt-8 text-sm">{cocktail?.strInstructions}</p>
        </div>
      </div>
    </main>
  );
}
