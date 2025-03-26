import { FaSearch } from "react-icons/fa";
import { FaStar, FaFaceGrinStars } from "react-icons/fa6";

const INFO_CARDS = [
  {
    id: 1,
    icon: FaSearch,
    title: "Find your favorites",
    description:
      "Search for your favorite drink recipe. Whether you're craving a classic cocktail or something new and fancy, chances are you can't remember all the recipes. Worry not though, we've got you covered! Simply search for it's name and you're good to go.",
  },
  {
    id: 2,
    icon: FaFaceGrinStars,
    title: "Discover new cocktails",
    description:
      "Browse through our collection of drink recipes to find new favorites. From refreshing summer cocktails to cozy winter drinks, our database has a variety of options to suit every taste. Discover unique flavor combinations and creative cocktail ideas to impress your friends and family.",
  },
  {
    id: 3,
    icon: FaStar,
    title: "Become a drink-lexicon",
    description:
      "As you have gone through our recipes, you must have found some good ones to impress your friends and family with. If not, why not take a shot at our discover page below? Simply select a category and drinks will appear!",
  },
];

export const InfoSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row p-8 gap-8">
        {INFO_CARDS.map((card) => (
          <div key={card.id} className="p-4 w-full md:w-1/3">
            <card.icon className="mx-auto w-10 h-10" />
            <h4 className="text-2xl text-center font-Oswald uppercase tracking-wider mt-4">
              {card.title}
            </h4>
            <p className="text-sm font-light text-center mt-3">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
