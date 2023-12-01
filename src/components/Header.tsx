import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

type HeaderProps = {
  selectedCountry: string;
  handleCountryChange: (language: "us" | "gb") => void;
};
const Header: FC<HeaderProps> = ({ selectedCountry, handleCountryChange }) => {
  const { pathname } = useLocation();
  const activeLinkStyle =
    "border-b-2 border-red-400 font-semibold text-red-400 p-4 transition duration-500 ease-in-out";
  const inactiveLinkStyle = "text-white font-semibold hover:text-red-400 p-4";

  return (
    <header className="m-3 flex h-10 items-center justify-between">
      <nav className="flex justify-between gap-4">
        <Link
          to={`/top-news`}
          className={
            pathname.includes("top-news") ? activeLinkStyle : inactiveLinkStyle
          }
        >
          Top News
        </Link>
        <Link
          to={`/categories`}
          className={
            pathname.includes("categories")
              ? activeLinkStyle
              : inactiveLinkStyle
          }
        >
          Categories
        </Link>
        <Link
          to={`/search`}
          className={
            pathname.includes("search") ? activeLinkStyle : inactiveLinkStyle
          }
        >
          Search
        </Link>
      </nav>
      <div className="language-select flex gap-2">
        <button
          className={
            selectedCountry === "us" ? activeLinkStyle : inactiveLinkStyle
          }
          onClick={() => handleCountryChange("us")}
        >
          US
        </button>
        <button
          className={
            selectedCountry === "gb" ? activeLinkStyle : inactiveLinkStyle
          }
          onClick={() => handleCountryChange("gb")}
        >
          GB
        </button>
      </div>
    </header>
  );
};

export default Header;
