import React, { useEffect, useState } from "react";
import MoviesRow from "./components/MoviesRow";
import "./App.css";
import { getAllMovies, getAllMoviesByGenres } from "./requests/movies.request";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

const App = () => {
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const [moviesData, setMoviesData] = useState({
    allMovies: { titleCategory: "Lista dos Filmes", movies: [] },
    horrorMovies: { titleCategory: "Filmes de Terror", movies: [] },
    disneyMovies: { titleCategory: "Filmes da Disney", movies: [] },
    comedyMovies: { titleCategory: "Filmes de Comédia", movies: [] },
    actionMovies: { titleCategory: "Filmes de Ação", movies: [] },
  });
  useEffect(() => {
    const loadAll = async () => {
      let movies = await getAllMovies();
      let horror = await getAllMoviesByGenres("horror");
      let disney = await getAllMoviesByGenres("disney");
      let comedy = await getAllMoviesByGenres("comedy");
      let action = await getAllMoviesByGenres("action");
      setMoviesData({
        allMovies: {
          ...moviesData.allMovies,
          movies,
        },
        horrorMovies: {
          ...moviesData.horrorMovies,
          movies: horror,
        },
        disneyMovies: {
          ...moviesData.disneyMovies,
          movies: disney,
        },
        comedyMovies: {
          ...moviesData.comedyMovies,
          movies: comedy,
        },
        actionMovies: {
          ...moviesData.actionMovies,
          movies: action,
        },
      });
      let indexMovie = Math.floor(Math.random() * (movies.length - 1));
      setFeaturedData(movies[indexMovie]);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie movie={featuredData} />}
      <div className="allLists">
        {Object.keys(moviesData).map((key) => {
          let data = moviesData[key];
          return (
            <section className="lists">
              <div className="title">{data.titleCategory}</div>
              <div className="containerMovies">
                {data.movies.map((item, index) => {
                  return (
                    <MoviesRow
                      key={index}
                      alt={item.title}
                      image_url={item.image_url}
                    />
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
      <footer>
        Feito por
        <br />
        <a href="https://github.com/msHoffmann" alt="Git Hub">
          msHoffmann
        </a>
      </footer>
      {/* {moviesData.length <= 0 && featuredData.length <= 0 && (
        <div className="loading">
          <iframe
            src="https://giphy.com/embed/l3nWhI38IWDofyDrW"
            width="480"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      )} */}
    </div>
  );
};

export default App;
