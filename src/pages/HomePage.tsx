import { useOutletContext } from "react-router-dom";
import useNews from "../hooks/useNews";
import ArticleCard from "../components/ArticleCard";
import NewsContainer from "../components/NewsContainer";

const HomePage = () => {
  const selectedCountry = useOutletContext<"us" | "gb">();

  debugger;
  const { data: articles, isLoading } = useNews(selectedCountry);
  debugger;

  return (
    <div>
      <h2>
        Top News from{" "}
        {selectedCountry === "us" ? "United Stated" : "Great Britain"}
      </h2>
      <NewsContainer articles={articles} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
