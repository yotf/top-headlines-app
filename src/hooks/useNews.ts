import { useQuery } from "@tanstack/react-query";
import { Article, NewsCategory } from "../types";
const API_KEY = "a7865005d4184ca498330e77ca4bcda6";

const fetchNews = async (
  selectedCountry: "us" | "gb",
  category?: NewsCategory,
  numberOfArticles?: number,
) => {
  const categoryQuery = category ? `&category=${category}` : "";
  const numberOfArticlesQuery = numberOfArticles
    ? `&pageSize=${numberOfArticles}`
    : "";
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${selectedCountry}${categoryQuery}${numberOfArticlesQuery}&apiKey=${API_KEY}`,
  );
  const data = await response.json();
  return (data.articles as Article[]) || [];
};

const useNews = (
  selectedCountry: "us" | "gb",
  category?: NewsCategory,
  numberOfArticles?: number,
) => {
  return useQuery({
    queryKey: ["news", selectedCountry, category], // Include selectedCountry in the query key
    queryFn: () => fetchNews(selectedCountry, category, numberOfArticles),
    staleTime: 60000, // Set the stale time to 1 minute (adjust as needed)
  });
};

export default useNews;
