import { useOutletContext } from "react-router-dom";
import CategoryContainer from "../components/CategoryContainer";
import { NewsCategory } from "../types";
import { useState } from "react";

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
    <div>
      {newsCategories.map((category) => (
        <div>
         
          <CategoryContainer
            country={selectedCountry}
            category={category}
         
          />
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage;
