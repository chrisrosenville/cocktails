import Link from "next/link";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const Header = () => {
  return (
    <header className="flex md:absolute bg-neutral-900 md:bg-transparent justify-between top-0 h-16 w-full bg-transparent items-center px-2 md:px-8 z-50">
      <h1 className="font-Inter font-black text-2xl absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:-translate-x-0">
        <Link href={"/"}>DRINKLAB</Link>
      </h1>
      <nav className="md:hidden">
        <MobileNavigation />
      </nav>

      <nav className="hidden md:block">
        <DesktopNavigation />
      </nav>
    </header>
  );
};
