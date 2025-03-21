import { FaSearch } from "react-icons/fa";
import { FaStar, FaFaceGrinStars } from "react-icons/fa6";

const INFO_CARDS = [
  {
    id: 1,
    icon: FaSearch,
    title: "Look up a recipe",
    description:
      "Search for your favorite drink recipe. Whether you're craving a classic cocktail or want to try something new, our recipe database has you covered. Explore a wide range of drinks and find all the ingredients to create delicious beverages at home.",
  },
  {
    id: 2,
    icon: FaFaceGrinStars,
    title: "Discover new drinks and cocktails",
    description:
      "Browse through our collection of drink recipes to find new favorites. From refreshing summer cocktails to cozy winter drinks, our database has a variety of options to suit every taste. Discover unique flavor combinations and creative cocktail ideas to impress your friends and family.",
  },
  {
    id: 3,
    icon: FaStar,
    title: "Find your favorite drink",
    description:
      "Looking for a specific drink recipe? Use our search feature to find exactly what you're looking for. Whether you want to make a classic martini or a trendy craft cocktail, our database has recipes for all your favorite drinks. Search by name or select a category to quickly find the perfect recipe.",
  },
];

export const InfoSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8">
        {INFO_CARDS.map((card) => (
          <div key={card.id} className="p-4">
            <card.icon className="mx-auto w-8 h-8" />
            <h4 className="text-lg text-center font-Oswald uppercase tracking-wide mt-4">
              {card.title}
            </h4>
            <p className="text-sm font-light text-center mt-2">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
