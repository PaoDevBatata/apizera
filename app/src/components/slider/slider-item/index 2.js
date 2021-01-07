import React from "react";

require("./style.css");

const SliderItem = ({ movie, width }) => {
  return (
  <a href={movie.stream_id}>
    <div className="slider-item" style={{ width: `${width}%` }}>
      <div>
        <img
          className="slider-image"
          src={`${movie.stream_icon}`}
          alt={movie.name}
        />
      </div>   
    </div> 
  </a>
  );
};

export default SliderItem;
