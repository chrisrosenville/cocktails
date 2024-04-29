import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";

export const DrinksSection = () => {
  return (
    <section
      id="drinkSection"
      className="flex flex-col p-4 justify-center items-center max-w-[800px] mx-auto"
    >
      <h2 className="mb-4 text-lg md:text-xl font-Oswald font-medium">
        Find a drink by searching below
      </h2>
      <SearchBar />
      <SearchResults />
    </section>
  );
};
