import React from "react";
import Slider from "infinite-react-carousel";

const Slide = (props) => {
  const { heading } = props;
  return (
    <>
      <h2>{heading}</h2>
      <Slider dots slidesPerRow={3}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
      </Slider>
    </>
  );
};

export default Slide;
