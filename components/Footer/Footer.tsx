import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-black text-white p-4 text-center">
        <p className="text-xs">
          Made with ❤️ by{" "}
          <Link href="https://github.com/SoftwareDevChris">
            SoftwareDevChris
          </Link>
        </p>
      </div>
    </footer>
  );
};
