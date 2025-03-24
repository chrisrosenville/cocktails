import Link from "next/link";

import { ROUTES } from "@/lib/navRoutes";

export const DesktopNavigation = () => {
  return (
    <>
      <ul
        className={`absolute md:relative text-center top-full transition-all overflow-hidden ease-linear md:max-h-full left-0 bg-[#141414] z-40 md:p-0 w-full flex flex-col md:flex-row md:space-y-0 space-y-6 md:space-x-6 items-center uppercase tracking-wide font-Oswald`}
      >
        {ROUTES.map((route, key) => (
          <li
            key={key}
            className="cursor-pointer hover:underline underline-offset-2"
          >
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
