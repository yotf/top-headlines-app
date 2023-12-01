import { useOutletContext } from "react-router-dom";
import useNews from "../hooks/useNews";

import NewsContainer from "../components/NewsContainer";

const HomePage = () => {
  const selectedCountry = useOutletContext<"us" | "gb">();

  const { data: articles, isLoading } = useNews(selectedCountry);

  return (
    <div className="mx-auto mt-[10vh] flex w-[80%] flex-col items-center gap-10">
      <h2 className="text-3xl">
        Top News from{" "}
        {selectedCountry === "us" ? "United Stated" : "Great Britain"}
      </h2>
      <NewsContainer articles={articles} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
