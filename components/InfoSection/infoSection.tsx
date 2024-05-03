import { FaSearchengin, FaRegCompass, FaRegStar } from "react-icons/fa";

const INFO_CARDS = [
  {
    id: 1,
    icon: FaSearchengin,
    title: "Look up a recipe",
    description:
      "Search for your favorite drink recipe. Whether you're craving a classic cocktail or want to try something new, our recipe database has you covered. Explore a wide range of drinks and find all the ingredients to create delicious beverages at home.",
  },
  {
    id: 2,
    icon: FaRegCompass,
    title: "Discover new drinks and cocktails",
    description:
      "Browse through our collection of drink recipes to find new favorites. From refreshing summer cocktails to cozy winter drinks, our database has a variety of options to suit every taste. Discover unique flavor combinations and creative cocktail ideas to impress your friends and family.",
  },
  {
    id: 3,
    icon: FaRegStar,
    title: "Find your favorite drink",
    description:
      "Looking for a specific drink recipe? Use our search feature to find exactly what you're looking for. Whether you want to make a classic martini or a trendy craft cocktail, our database has recipes for all your favorite drinks. Search by name or select a category to quickly find the perfect recipe.",
  },
];

export const InfoSection = () => {
  return (
    <>
      <h3 className="text-2xl font-Oswald uppercase tracking-wide text-center">
        {"Here you can..."}
      </h3>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mt-6">
        {INFO_CARDS.map((card) => (
          <div key={card.id} className="p-4 border rounded-md">
            <card.icon className="mx-auto text-3xl" />
            <h4 className="text-lg text-center font-Oswald uppercase tracking-wide mt-4">
              {card.title}
            </h4>
            <p className="text-sm font-light mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
