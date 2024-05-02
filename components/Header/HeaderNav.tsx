"use client";

import Link from "next/link";
import { useState } from "react";

import { useOutsideClick } from "@/hooks/useOutsideClick";

import { RiMenu2Fill, RiMenu3Fill } from "react-icons/ri";

const ROUTES = [
  { name: "Home", path: "/" },
  { name: "Random", path: "/random" },
];

export const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setIsMenuOpen(false);
  });

  return (
    <nav className="" ref={ref}>
      {/* Mobile menu */}
      <div className="block md:hidden">
        {!isMenuOpen ? (
          <RiMenu2Fill
            className="text-2xl z-50"
            onClick={() => setIsMenuOpen(true)}
          />
        ) : (
          <>
            <RiMenu3Fill
              className="text-2xl z-50"
              onClick={() => setIsMenuOpen(false)}
            />
          </>
        )}
      </div>
      <ul
        className={`${
          isMenuOpen ? "max-h-[200px] py-6" : "max-h-0 py-0"
        } absolute md:relative text-center top-full transition-all overflow-hidden ease-linear md:max-h-full left-0 bg-[#141414] z-40 md:p-0 w-full flex flex-col md:flex-row md:space-y-0 space-y-6 md:space-x-6 items-center uppercase tracking-wide font-Oswald`}
      >
        {ROUTES.map((route, key) => (
          <li
            key={key}
            className="cursor-pointer hover:underline underline-offset-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
