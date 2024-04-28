import { TCategoryList, TIngredientList } from "@/types/categoryList";
import { TDrink } from "@/types/drink";

// get categories
export const getCategoryList = async () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

  try {
    const response = await fetch(url, { cache: "force-cache" });
    return (await response.json()) as TCategoryList;
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
export const filterByCategory = async (category: string) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// search by ingredient
export const searchByIngredient = async (ingredient: string) => {
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
export const searchByName = async (name: string) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCocktailById = async (id: string) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  try {
    const response = await fetch(url);
    return (await response.json()) as TDrink;
  } catch (error) {
    console.error(error);
    return null;
  }
};
