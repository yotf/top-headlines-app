import { FC } from "react";
import { Article } from "../types";
import ArticleCard from "./ArticleCard";

type NewsContainerProps = {
  articles?: Article[];
  isLoading: boolean;
};

const NewsContainer: FC<NewsContainerProps> = ({ articles, isLoading }) => {
  return (
    <div>
      {" "}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {articles?.map((article) => (
            <div>
              <ArticleCard article={article} />
              {article.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsContainer;
