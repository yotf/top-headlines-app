import { useOutletContext, useParams } from "react-router-dom";
import useNews from "../hooks/useNews";
import { NewsCategory } from "../types";
import NewsContainer from "../components/NewsContainer";

const SingleCategoryPage = () => {
  const selectedCountry = useOutletContext<"us" | "gb">();
  const { category } = useParams() as { category: NewsCategory };
  const { data: articles, isLoading } = useNews(selectedCountry, category);

  return (
    <div>
      <h1>{category}</h1>
      <NewsContainer articles={articles} isLoading={isLoading} />
    </div>
  );
};

export default SingleCategoryPage;
