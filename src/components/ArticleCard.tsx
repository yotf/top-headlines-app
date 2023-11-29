import { Link } from "react-router-dom";
import { Article } from "../types";

interface ArticleCardProps {
  article: Article;
  i: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, i }) => {
    return (
        <div>
            <div>{article.title}</div>
            <img src={article.urlToImage ?? ""} />
            <div>{article.description}</div>
            <Link to={`/top-news/${i}`} state={{ article }}>
                {"More >"}
            </Link>
        </div>
    );
};

export default ArticleCard;
