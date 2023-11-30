import { useOutletContext } from "react-router-dom";
import useNews from "../hooks/useNews";
import NewsContainer from "../components/NewsContainer";
import { ChangeEvent, useEffect, useState } from "react";

const SearchPage = () => {
  const selectedCountry = useOutletContext<"us" | "gb">();
  const { data: articles, isLoading } = useNews(selectedCountry);
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [searchTerm, setSearchTerm] = useState("");

  const filterArticles = (searchTermCurrent: string) => {
    const filteredArticles = articles?.filter((article) =>
      article.title.toLowerCase().includes(searchTermCurrent.toLowerCase()),
    );
    setFilteredArticles(filteredArticles);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
    filterArticles(e.target.value);
  };

  useEffect(() => {
    filterArticles(searchTerm);
  }, [articles]);

  return (
    <div>
      <h1>Search</h1>
      <div>
        <input
          type="text"
          onChange={handleSearchChange}
          value={searchTerm}
          placeholder="Search"
          className="rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <NewsContainer articles={filteredArticles} isLoading={isLoading} />
    </div>
  );
};

export default SearchPage;
