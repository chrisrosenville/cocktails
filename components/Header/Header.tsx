import { Logo } from "../Logo";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export const Header = () => {
  return (
    <header className="flex md:absolute bg-neutral-900 md:bg-transparent justify-between top-0 h-16 w-full bg-transparent items-center px-2 md:px-8 z-50">
      <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:-translate-x-0">
        <Logo />
      </div>
      <nav className="md:hidden">
        <MobileNavigation />
      </nav>

      <nav className="hidden md:block">
        <DesktopNavigation />
      </nav>
    </header>
  );
};
