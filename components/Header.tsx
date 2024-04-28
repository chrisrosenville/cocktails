export const Header = () => {
  return (
    <header className="flex justify-between h-20 w-full items-center px-8 bg-transparent absolute z-50 top-0">
      <h1 className="font-Inter font-black text-2xl">DRINKLAB</h1>
      <nav>
        <ul className="flex space-x-6 uppercase tracking-wide font-Oswald">
          <li className="cursor-pointer hover:underline underline-offset-2">
            Home
          </li>
          <li className="cursor-pointer hover:underline underline-offset-2">
            Recipes
          </li>
          <li className="cursor-pointer hover:underline underline-offset-2">
            About
          </li>
        </ul>
      </nav>
    </header>
  );
};
