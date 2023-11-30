import { FC } from "react";
import { NewsCategory } from "../types";
import useNews from "../hooks/useNews";
import ArticleCard from "./ArticleCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

type CategoryContainerProps = {
  category: NewsCategory;
  country: "us" | "gb";
};
const CategoryContainer: FC<CategoryContainerProps> = ({
  category,
  country,
}) => {
  const { data: articles, isLoading } = useNews(country, category, 5);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className=" m-auto w-9/12">
          <Link to={`/categories/${category}`}> {category}</Link>
          <Slider {...sliderSettings}>
            {articles?.map((article) => <ArticleCard article={article} />)}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default CategoryContainer;
