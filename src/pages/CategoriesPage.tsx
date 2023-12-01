import { useOutletContext } from "react-router-dom";
import CategoryContainer from "../components/CategoryContainer";
import { NewsCategory } from "../types";

const CategoriesPage = () => {
  const selectedCountry = useOutletContext<"us" | "gb">();

  const newsCategories: NewsCategory[] = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <div className="mx-auto mt-[10vh] flex w-[80%] flex-col gap-10 rounded-lg bg-zinc-800 p-10">
      <h1 className="self-center text-3xl">{`Top 5 news by categories from the ${
        selectedCountry == "us" ? "United States" : "Great Britain"
      }`}</h1>
      {newsCategories.map((category) => (
        <div>
          <CategoryContainer country={selectedCountry} category={category} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage;
