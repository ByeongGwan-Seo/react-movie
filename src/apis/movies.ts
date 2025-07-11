const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

interface MovieInterface {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  original_language: string;
  original_title: string;
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

export interface GetMovieDetailResult {
  id: number;
  backdrop_path: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  original_title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

interface MovieCastResult {
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
  character: string;
}

interface MovieCrewResult {
  known_for_department: string;
  name: string;
  department: string;
  original_name: string;
  profile_path: string;
  job: string;
}

export interface MovieCreditResult {
  id: number;
  cast: MovieCastResult[];
  crew: MovieCrewResult[];
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

/**
 * TMDB（The Movie Database）APIから指定カテゴリの映画データを取得する関数。
 *
 * @function getMovies
 * @param {string} category - 取得したい映画カテゴリを指定します。
 * 使用可能なカテゴリ: `"now_playing"`, `"top_rated"`, `"upcoming"`, `"popular"`。
 *
 * @returns {Promise<GetMoviesResult>} 映画情報を含むJSONオブジェクトのPromiseを返します。
 * - `dates`: 上映日（`maximum`と`minimum`）の範囲
 * - `page`: 現在のページ番号
 * - `results`: 映画オブジェクトの配列
 * - `total_pages`: 全ページ数
 * - `total_results`: 総映画数
 *
 * @example
 * const { data: now_data, isLoading: now_loading } = useQuery<GetMoviesResult>({
 *   queryKey: ["movies", "nowPlaying"],
 *   queryFn: () => getMovies("now_playing"),
 * });
 *
 * @remarks
 * 地域パラメータは `"jp"`（日本）に固定されています。
 *
 * @see {@link https://developer.themoviedb.org/reference/movie-now-playing-list TMDB APIドキュメント（英語）}
 */
export function getMovies(category: string) {
  return fetch(
    `${BASE_URL}/movie/${category}?language=ja-JP&region=jp&api_key=${API_KEY}`,
    options
  ).then((response) => response.json());
}

export function getMovieDetails(id: string) {
  return fetch(
    `${BASE_URL}/movie/${id}?language=ja-JP&region=jp&api_key=${API_KEY}`,
    options
  ).then((response) => response.json());
}

export function getMovieCredits(id: string) {
  return fetch(`${BASE_URL}/movie/${id}/credits?language=ja-JP`, options).then(
    (response) => response.json()
  );
}
