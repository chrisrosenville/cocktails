import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  return (
    <header className="flex md:justify-between h-12 md:h-16 w-full bg-[#141414] items-center px-2 md:px-8 absolute z-50 top-0">
      <h1 className="font-Inter font-black absolute md:relative md:top-0 md:left-0 md:-translate-x-0 md:-translate-y-0 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl">
        DRINKLAB
      </h1>
      <HeaderNav />
    </header>
  );
};
