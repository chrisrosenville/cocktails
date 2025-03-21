"use client";
import { useState } from "react";
import Link from "next/link";

import { OutsideClickContainer } from "../OutsideClickContainer";

import { RiMenu2Fill, RiMenu3Fill } from "react-icons/ri";

const ROUTES = [
  { name: "Home", path: "/" },
  { name: "Random", path: "/random" },
];

export const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-8 h-8">
        {!isMenuOpen ? (
          <RiMenu2Fill
            className="h-full w-full"
            onClick={() => setIsMenuOpen(true)}
          />
        ) : (
          <>
            <RiMenu3Fill
              className="h-full w-full"
              onClick={() => setIsMenuOpen(false)}
            />
          </>
        )}
      </div>

      <OutsideClickContainer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <ul
          className={`${
            isMenuOpen ? "max-h-[200px] py-6" : "max-h-0 py-0"
          } absolute md:relative text-center top-full transition-all overflow-hidden ease-linear md:max-h-full left-0 bg-neutral-900 z-40 md:p-0 w-full flex flex-col md:flex-row md:space-y-0 space-y-6 md:space-x-6 items-center uppercase tracking-wide font-Oswald`}
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
      </OutsideClickContainer>
    </>
  );
};
