import { FC } from "react";
import { Article } from "../types";
import ArticleCard from "./ArticleCard";

type NewsContainerProps = {
  articles?: Article[];
  isLoading: boolean;
};

const NewsContainer: FC<NewsContainerProps> = ({ articles, isLoading }) => {

  return (
    <div className=" m-auto">
      {" "}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
          {articles?.map((article) => (
            <div >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsContainer;
