import { getCocktailById } from "@/utils/getRecipes";

export default async function DrinkPage({
  params,
}: {
  params: { id: string };
}) {
  const drinkData = await getCocktailById(params.id);

  return (
    <main>
      <h1 className="text-white">{drinkData?.strDrink}</h1>
    </main>
  );
}
