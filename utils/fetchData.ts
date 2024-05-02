import { TCategoryDrinkList, TCategoryList } from "@/types/category";
import { TIngredientList } from "@/types/ingredient";

import { TDrinkList, TDrink } from "@/types/drink";

// get categories
export const getCategoryList = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

  try {
    const response: TCategoryList = await fetch(url, {
      cache: "force-cache",
    }).then((res) => res.json());
    return response.drinks;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// get ingredients
export const getIngredientList = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";

  try {
    const response = await fetch(url, { cache: "force-cache" });
    return (await response.json()) as TIngredientList;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// filter by category
export const getRecipesByCategory = async (category: string) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;

  try {
    const response: TCategoryDrinkList = await fetch(url).then((res) =>
      res.json()
    );
    return response.drinks;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// search by ingredient
export const getRecipesByIngredient = async (ingredient: string) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// search by name
export const getRecipesBySearchValue = async (name: string) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

  try {
    const response: TDrinkList = await fetch(url).then((res) => res.json());
    return response.drinks;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCocktailById = async (id: string) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const response = await fetch(url);
    return (await response.json()) as { drinks: TDrink[] };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getRandomCocktail = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  try {
    const response = await fetch(url);
    return (await response.json()) as { drinks: TDrink[] };
  } catch (error) {
    console.error(error);
    return null;
  }
};
