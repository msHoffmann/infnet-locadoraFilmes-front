import React, { useEffect, useState } from "react";
import MoviesRow from "./components/MoviesRow";
import "./App.css";
import { getAllMovies, getAllMoviesByGenres } from "./requests/movies.request";

const App = () => {
  const [moviesData, setMoviesData] = useState({
    allMovies: [],
    horrorMovies: [],
    disneyMovies: [],
    comedyMovies: [],
    documentaryMovies: [],
  });
  useEffect(() => {
    const loadAll = async () => {
      let movies = await getAllMovies();
      let horror = await getAllMoviesByGenres("horror");
      let disney = await getAllMoviesByGenres("disney");
      let comedy = await getAllMoviesByGenres("comedy");
      let documentary = await getAllMoviesByGenres("documentary");
      setMoviesData({
        allMovies: movies,
        horrorMovies: horror,
        disneyMovies: disney,
        comedyMovies: comedy,
        documentaryMovies: documentary,
      });
    };
    loadAll();
  }, []);
  return (
    <div className="page">
      <section className="lists">
        <div>Locadora da Frania</div>
        {moviesData.allMovies.map((item, key) => {
          return (
            <MoviesRow
              key={key}
              title={item.title}
              image_url={item.image_url}
            />
          );
        })}
      </section>
      <section className="lists">
        <div>Filmes de Horror</div>
        {moviesData.horrorMovies.map((item, key) => {
          return (
            <MoviesRow
              key={key}
              title={item.title}
              image_url={item.image_url}
            />
          );
        })}
      </section>
    </div>
  );
};

export default App;
