import { Link } from "react-router-dom";
import { Article } from "../types";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div>
      <div>{article.title}</div>
      <img src={article.urlToImage ?? ""} />
      <div>{article.description}</div>
      <Link to={`/top-news/detail`} state={{ article }}>
        {"More >"}
      </Link>
    </div>
  );
};

export default ArticleCard;
