import { FC } from "react";
import { Link } from "react-router-dom";

type HeaderProps = {
  selectedCountry: string;
  handleCountryChange: (language: "us" | "gb") => void;
};
const Header: FC<HeaderProps> = ({ selectedCountry, handleCountryChange }) => {
  return (
    <header className="flex justify-between items-center">
      <nav className="flex justify-between gap-4">
        <Link to={`/top-news`}>Top News</Link>
        <Link to={`/categories`}>Categories</Link>
        <Link to={`/search`}>Search</Link>
      </nav>
      <div className="language-select">
        <button
          className={
            selectedCountry === "us"
              ? "text-red-400 border-b-2 border-red-400"
              : ""
          }
          onClick={() => handleCountryChange("us")}
        >
          US
        </button>
        <button
          className={
            selectedCountry === "gb"
              ? "text-red-400 border-b-2 border-red-400"
              : ""
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
