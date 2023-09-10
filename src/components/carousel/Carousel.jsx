import React from "react";
import Slider from "infinite-react-carousel";
import CategoryCard from "../cards/CategoryCard";
import { Link } from "react-router-dom";
import ProjectCard from "../cards/ProjectCard";

const Carousel = (props) => {
  const {
    items,
    heading,
    seeMore,
    customClasses,
    arrowsScroll,
    slidesToShow,
    cardType,
    adaptiveHeight,
  } = props;
  return (
    <>
      <div className={`${customClasses ? customClasses : ""}`}>
        <div className={`container mx-auto md:py-20 px-16 Round-Arrow-Dots`}>
          <div className="flex justify-between items-center mr-8">
            <h2 className="font-bold text-3xl mb-4">{heading}</h2>
            {seeMore && (
              <Link to={seeMore}>
                <span className="text-blue-400 font-bold cursor-pointer">
                  See More {">"}
                </span>
              </Link>
            )}
          </div>
          <Slider
            arrows
            arrowsScroll={arrowsScroll}
            slidesToShow={slidesToShow}
            adaptiveHeight={adaptiveHeight}
          >
            {items.map((card, index) => {
              switch (cardType) {
                case "categoryCard":
                  return (
                    <div key={index} className="">
                      <CategoryCard card={card} />
                    </div>
                  );

                case "projectCard":
                  return (
                    <div key={index} className="py-4">
                      <ProjectCard card={card} />
                    </div>
                  );

                default:
                  return "";
              }
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Carousel;
