import React, { useEffect, useState } from "react";
import MoviesRow from "./components/MoviesRow";
import "./App.css";
import { getAllMovies, getAllMoviesByGenres } from "./requests/movies.request";
import FeaturedMovie from "./components/FeaturedMovie";

const App = () => {
  const [featuredData, setFeaturedData] = useState(null);
  const [moviesData, setMoviesData] = useState({
    allMovies: [],
    horrorMovies: [],
    disneyMovies: [],
    comedyMovies: [],
    actionMovies: [],
  });
  useEffect(() => {
    const loadAll = async () => {
      let movies = await getAllMovies();
      let horror = await getAllMoviesByGenres("horror");
      let disney = await getAllMoviesByGenres("disney");
      let comedy = await getAllMoviesByGenres("comedy");
      let action = await getAllMoviesByGenres("action");
      setMoviesData({
        allMovies: movies,
        horrorMovies: horror,
        disneyMovies: disney,
        comedyMovies: comedy,
        actionMovies: action,
      });
      let indexMovie = Math.floor(Math.random() * (movies.length - 1));
      setFeaturedData(movies[indexMovie]);
    };
    loadAll();
  }, []);
  return (
    <div className="page">
      {featuredData && <FeaturedMovie movie={featuredData} />}
      <section className="lists">
        <div className="title">Lista dos Filmes</div>
        <div className="containerMovies">
          {moviesData.allMovies.map((item, key) => {
            return (
              <MoviesRow
                key={key}
                alt={item.title}
                image_url={item.image_url}
              />
            );
          })}
        </div>
      </section>
      <section className="lists">
        <div className="title">Filmes de Horror</div>
        <div className="containerMovies">
          {moviesData.horrorMovies.map((item, key) => {
            return (
              <MoviesRow
                key={key}
                alt={item.title}
                image_url={item.image_url}
              />
            );
          })}
        </div>
      </section>
      <section className="lists">
        <div className="title">Filmes de Comédia</div>
        <div className="containerMovies">
          {moviesData.comedyMovies.map((item, key) => {
            return (
              <MoviesRow
                key={key}
                alt={item.title}
                image_url={item.image_url}
              />
            );
          })}
        </div>
      </section>
      <section className="lists">
        <div className="title">Filmes de Ação</div>
        <div className="containerMovies">
          {moviesData.actionMovies.map((item, key) => {
            return (
              <MoviesRow
                key={key}
                alt={item.title}
                image_url={item.image_url}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
