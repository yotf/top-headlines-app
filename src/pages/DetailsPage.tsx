import { useLocation, useNavigate } from "react-router-dom";
import { Article } from "../types";

const DetailsPage = () => {
  const location = useLocation();
  const { article } = location.state as { article: Article };
  const navigate = useNavigate();

  return (
    <>
      {article ? (
        <div>
          <h1>{article.title}</h1>
          <img src={article.urlToImage ?? ""} />
          <p>
            By {article.author} - {article.publishedAt}
          </p>
          <p>{article.content}</p>
        </div>
      ) : (
        <h1>Article not found</h1>
      )}
      <button onClick={() => navigate(-1)}>{"< Back to List"}</button>
    </>
  );
};

export default DetailsPage;
