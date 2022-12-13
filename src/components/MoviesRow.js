import React from "react";
import "./MoviesRow.css";

const MoviesRow = ({ alt, image_url }) => {
  return (
    <div className="moviesRow">
      <div className="moviesRow-list-area">
        <div className="moviesRow-list">
          <div className="moviesRow-item">
            <img src={image_url} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesRow;
