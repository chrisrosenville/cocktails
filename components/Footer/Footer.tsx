import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center">
      <div className="p-4">
        <Logo />
      </div>

      <div className="flex text-sm p-4 justify-center items-center gap-x-4 gap-y-2 flex-wrap">
        <Link
          className="flex items-center gap-2"
          href="https://github.com/chrisrosenville"
        >
          <FaGithub className="w-4 h-4" />
          <span>chrisrosenville</span>
        </Link>
        <Link
          className="flex items-center gap-2"
          href="https://www.linkedin.com/in/christian-rosenville/"
        >
          <FaLinkedin className="w-4 h-4" />
          <span>Christian Rosenville</span>
        </Link>
      </div>
    </footer>
  );
};
