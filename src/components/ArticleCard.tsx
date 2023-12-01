import { Link, useLocation, useParams } from "react-router-dom";
import { Article } from "../types";
import placeholder from "./../assets/placeholder.png";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { pathname } = useLocation();

  return (
    <div className=" m-3 flex h-full flex-col  gap-5  rounded-lg  border-red-500 bg-zinc-700 p-3 text-left">
      <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-bold md:text-xl lg:text-2xl">
        {article.title}
      </div>
      <img
        src={article.urlToImage ?? placeholder}
        className="h-40 w-full object-cover"
      />
      <div className="h-12 self-start overflow-hidden">
        <p className=" overflow-ellipsis ">{article.description}</p>
      </div>

      <Link
        to={`${pathname}/detail`}
        state={{ article }}
        className="mt-auto self-start font-semibold text-red-400 hover:text-red-500"
      >
        {"More >"}
      </Link>
    </div>
  );
};

export default ArticleCard;
