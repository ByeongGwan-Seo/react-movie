const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface MovieInterface {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface GetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieInterface[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTUxNzFjZDYwMjYyY2NiZTljMzhkNWZjZDc4M2VmMCIsIm5iZiI6MTc0MzMyNjI2Mi42MDMwMDAyLCJzdWIiOiI2N2U5MGMzNjRmNzQxYzc1YmJjNjk4Y2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VsvSVEd3edbBv1n5pHZw8sC787t3ANZkZfba53g1Ud4",
    },
  };
  console.log("API_KEY:", API_KEY);
  console.log("BASE_URL:", BASE_URL);
  return fetch(
    `${BASE_URL}/movie/now_playing?region=jp&api_key=${API_KEY}`,
    options
  ).then((response) => response.json());
}
