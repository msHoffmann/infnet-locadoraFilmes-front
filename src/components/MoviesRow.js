import React, { useState } from "react";
import "./MoviesRow.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MoviesRow = ({ alt, image_url }) => {
  return (
    <div className="moviesRow">
      <div className="moviesRowListArea">
        <div className="moviesRowList">
          <div className="moviesRowItem">
            <img src={image_url} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesRow;
