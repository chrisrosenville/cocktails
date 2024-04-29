import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";

export const DrinksSection = () => {
  return (
    <section
      id="drinkSection"
      className="flex flex-col p-4 justify-center items-center max-w-[800px] mx-auto"
    >
      <SearchBar />
      <SearchResults />
    </section>
  );
};
