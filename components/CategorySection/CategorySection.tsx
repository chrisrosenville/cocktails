import { CategorySelectAndSearchContainer } from "./CategorySelectAndSearchContainer";

export const CategorySection = () => {
  return (
    <>
      <h2 className="text-2xl font-Oswald uppercase tracking-wide text-center">
        Discover new cocktails
      </h2>
      <p className="text-center text-xs font-light mt-2">
        Select one of the categories below to see all our recipes within that
        category
      </p>
      <div className="mt-2 min-h-[500px]">
        <CategorySelectAndSearchContainer />
      </div>
    </>
  );
};
