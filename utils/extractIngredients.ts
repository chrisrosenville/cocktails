import { TDrink } from "@/types/drink";

export function extractIngredients(cocktail: TDrink | undefined) {
  if (cocktail === undefined) return;

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient =
      cocktail &&
      (cocktail[`strIngredient${i}` as keyof TDrink] as string | null);
    if (ingredient !== null) {
      ingredients.push(` ${ingredient}`);
    }
  }
  return ingredients;
}
