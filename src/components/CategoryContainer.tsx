import { FC, useEffect, useRef, useState } from "react";
import { NewsCategory } from "../types";
import useNews from "../hooks/useNews";
import ArticleCard from "./ArticleCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import autoAnimate from "@formkit/auto-animate";

type CategoryContainerProps = {
  category: NewsCategory;
  country: "us" | "gb";
};
const CategoryContainer: FC<CategoryContainerProps> = ({
  category,
  country,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  /**Animation logic */
  const toggleContainer = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    toggleContainer.current && autoAnimate(toggleContainer.current);
    container.current && autoAnimate(container.current);
  }, [toggleContainer]);

  /** end animation logic */

  const handleToggleExpand = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  const { data: articles, isLoading } = useNews(country, category, 5);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div ref={container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="" ref={toggleContainer}>
          <div className="align-center; flex gap-2 px-4">
            <button onClick={handleToggleExpand}>
              {isExpanded ? <FaAngleDown /> : <FaAngleRight />}
            </button>
            <Link
              to={`/categories/${category}`}
              className="text-xl font-semibold capitalize text-red-400 hover:text-red-500"
            >
              {" "}
              {category}
            </Link>
          </div>
          {isExpanded && (
            <Slider {...sliderSettings}>
              {articles?.map((article) => <ArticleCard article={article} />)}
            </Slider>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryContainer;
