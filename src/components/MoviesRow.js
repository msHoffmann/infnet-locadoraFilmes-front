import React from "react";
import "./MoviesRow.css";

const MoviesRow = ({ title, image_url }) => {
  return (
    <div className="moviesRow">
      <h2>{title}</h2>
      <div className="moviesRow-list-area">
        <div className="moviesRow-list">
          <div className="moviesRow-item">
            <img src={image_url} alt={"Poster do Filme"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesRow;
