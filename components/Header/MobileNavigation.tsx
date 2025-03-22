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
        isOpen={true}
        onClose={() => setIsMenuOpen(false)}
        className={`${
          isMenuOpen ? "max-h-[200px] py-6" : "max-h-0 py-0"
        } absolute top-16 text-center transition-all overflow-hidden ease-linear md:max-h-full left-0 bg-neutral-900 z-40 w-full flex flex-col items-center uppercase tracking-wider font-OpenSans`}
      >
        <ul className="flex flex-col gap-4">
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
