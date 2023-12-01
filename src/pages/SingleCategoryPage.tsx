import { useOutletContext, useParams } from "react-router-dom";
import useNews from "../hooks/useNews";
import { NewsCategory } from "../types";
import NewsContainer from "../components/NewsContainer";

const SingleCategoryPage = () => {
  const selectedCountry = useOutletContext<"us" | "gb">();
  const { category } = useParams() as { category: NewsCategory };
  const { data: articles, isLoading } = useNews(selectedCountry, category);

  return (
    <div className="mx-auto mt-[10vh] flex w-[80%] flex-col items-center gap-10">
      <h1 className=" text-3xl capitalize">{`${category} News from the ${
        selectedCountry == "gb" ? "Great Britain" : "United States"
      }`}</h1>
      <NewsContainer articles={articles} isLoading={isLoading} />
    </div>
  );
};

export default SingleCategoryPage;
