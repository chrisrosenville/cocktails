export type TCategoryDrinkItem = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export type TCategoryListItem = {
  strCategory: string;
};

export type TCategoryDrinkList = {
  drinks: TCategoryDrinkItem[] | null;
};

export type TCategoryList = {
  drinks: TCategoryListItem[] | null;
};
