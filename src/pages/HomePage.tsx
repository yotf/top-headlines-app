import { useOutletContext } from "react-router-dom";
import useNews from "../hooks/useNews";
import ArticleCard from "../components/ArticleCard";

const HomePage = () => {
  const selectedCountry = useOutletContext<"us" | "gb">();

  debugger;
  const { data: articles, isLoading } = useNews(
    selectedCountry,
    "top-headlines"
  );
  debugger;

  return (
    <div>
      <h2>
        Top News from{" "}
        {selectedCountry === "us" ? "United Stated" : "Great Britain"}
      </h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {articles?.map((article, i) => (
            <div>
              <ArticleCard article={article} i={i} />
              {article.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
