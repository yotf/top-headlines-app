import { useOutletContext } from "react-router-dom";
import CategoryContainer from "../components/CategoryContainer";
import { NewsCategory } from "../types";

const CategoriesPage = () => {
  const selectedCountry = useOutletContext<"us" | "gb">();

  // const newsCategoriesData = {
  // business: useNews(selectedCountry, "business"),
  // entertainment: useNews(selectedCountry, "entertainment"),
  // general: useNews(selectedCountry, "general"),
  // health: useNews(selectedCountry, "health"),
  // science: useNews(selectedCountry, "science"),
  // sports: useNews(selectedCountry, "sports"),
  // technology: useNews(selectedCountry, "technology"),
  // };
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
    <div>
      {newsCategories.map((category) => (
        <CategoryContainer country={selectedCountry} category={category} />
      ))}
    </div>
  );
};

export default CategoriesPage;
