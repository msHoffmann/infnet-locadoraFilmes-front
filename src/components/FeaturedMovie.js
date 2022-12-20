import React from "react";
import "./FeaturedMovie.css";

export default ({ movie }) => {
  const genres = movie.Genres.map((item) => item.description);
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${movie.wallpaper_url})`,
      }}
    >
      <div className="featuredVertical">
        <div className="featuredHorizontal">
          <div className="featuredName">{movie.title}</div>
          <div className="featuredInfo">
            <div className="featuredPoints">{movie.voteAverage} pontos</div>
            <div className="featuredYear">{movie.year}</div>
          </div>
          <div className="featuredDescription">{movie.description}</div>
          <div className="featuredButtons">
            <a href={`/rent/${movie.id}`} className="featuredRent">
              Rent!
            </a>
            <a href={`/list/add/${movie.id}`} className="featuredAdd">
              + More Info
            </a>
          </div>
          <div className="featuredGenres">
            <strong>Genres: </strong>
            {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};
