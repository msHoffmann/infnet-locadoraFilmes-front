// const API_KEY = "06fd4ac1792d18526418dba9073935d9";
// const API_BASE = "https://api.themoviedb.org/3";
const API_BASE = "http://localhost:3003/";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "Locadora de Filmes da Frania",
        title: "Vamos ",
        items: await basicFetch(`/movies-api/movies`),
      },
      // {
      //   slug: "trending",
      //   title: "Recomendados do Ano",
      //   items: await basicFetch(
      //     `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
      //   ),
      // },
      // {
      //   slug: "action",
      //   title: "Ação",
      //   items: await basicFetch(
      //     `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      //   ),
      // },
      // {
      //   slug: "comedy",
      //   title: "Comédia",
      //   items: await basicFetch(
      //     `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
      //   ),
      // },
      // {
      //   slug: "horror",
      //   title: "Terror",
      //   items: await basicFetch(
      //     `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
      //   ),
      // },
      // {
      //   slug: "romance",
      //   title: "Romance",
      //   items: await basicFetch(
      //     `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
      //   ),
      // },
      // {
      //   slug: "documentary",
      //   title: "Documentário",
      //   items: await basicFetch(
      //     `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
      //   ),
      // },
    ];
  },
};
