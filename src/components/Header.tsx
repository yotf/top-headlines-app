import { FC } from "react";
import { Link } from "react-router-dom";

type HeaderProps = {
  selectedCountry: string;
  handleCountryChange: (language: "us" | "gb") => void;
};
const Header: FC<HeaderProps> = ({ selectedCountry, handleCountryChange }) => {
  return (
    <header>
      <nav>
        <Link to={`/top-news`}>Top News</Link>
        <Link to={`/categories`}>Categories</Link>
        <Link to={`/search`}>Search</Link>
      </nav>
      <div className="language-select">
        <button
          className={selectedCountry === "us" ? "active" : ""}
          onClick={() => handleCountryChange("us")}
        >
          US
        </button>
        <button
          className={selectedCountry === "gb" ? "active" : ""}
          onClick={() => handleCountryChange("gb")}
        >
          GB
        </button>
      </div>
    </header>
  );
};

export default Header;
