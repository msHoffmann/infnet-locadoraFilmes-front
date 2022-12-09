const API_BASE = "http://localhost:3003";

export const getAllMovies = async () => {
  const req = await fetch(`${API_BASE}/movies-api/movies`);
  const json = await req.json();
  return json.Movies;
};

export const getAllMoviesByGenres = async (genre) => {
  const req = await fetch(`${API_BASE}/movies-api/movies-genres/${genre}`);
  const json = await req.json();
  return json;
};
