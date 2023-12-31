import { useLocation, useNavigate } from "react-router-dom";
import { Article } from "../types";
import placeholder from "./../assets/placeholder.png";
import dayjs from "dayjs";

const DetailsPage = () => {
  const location = useLocation();
  const { article } = location.state as { article: Article };
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-[5vh] w-[80%] rounded-lg  bg-zinc-700  p-6 pt-[5vh] shadow-lg">
      {article ? (
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-3xl">{article.title}</h1>
          <img
            className="w-[90%] rounded shadow-lg"
            src={article.urlToImage ?? placeholder}
          />
          <p>
            By {article.author} -{" "}
            {dayjs(article.publishedAt).format("DD/MM/YYYY")}
          </p>
          <p>{article.content}</p>
        </div>
      ) : (
        <h1>Article not found</h1>
      )}
      <button
        className="mt-10 font-semibold text-red-400 transition duration-500 ease-in-out hover:text-red-500"
        onClick={() => navigate(-1)}
      >
        {"< Back to List"}
      </button>
    </div>
  );
};

export default DetailsPage;
