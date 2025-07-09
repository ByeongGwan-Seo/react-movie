import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../apis/movie_series_api";
import type { GetMoviesResult } from "../apis/movie_series_api";
import { makeImagePath } from "../utils";
import * as HomeStyle from "../styled-components/StyledHome";
import MovieSlider from "../components/movies/MovieSlider";

function Home() {
  const { data: now_data, isLoading: now_loading } = useQuery<GetMoviesResult>({
    queryKey: ["movies", "nowPlaying"],
    queryFn: () => getMovies("now_playing"),
  });
  const { data: top_data, isLoading: top_loading } = useQuery<GetMoviesResult>({
    queryKey: ["movies", "topRated"],
    queryFn: () => getMovies("top_rated"),
  });
  const { data: pop_data, isLoading: pop_loading } = useQuery<GetMoviesResult>({
    queryKey: ["movies", "popular"],
    queryFn: () => getMovies("popular"),
  });

  return (
    <HomeStyle.Wrapper>
      {now_loading ||
      top_loading ||
      pop_loading ||
      !now_data ||
      !top_data ||
      !pop_data ? (
        <HomeStyle.Loader>Loading...</HomeStyle.Loader>
      ) : (
        <>
          <HomeStyle.Banner
            bgPhoto={makeImagePath(now_data?.results[0].backdrop_path || "")}
          >
            <HomeStyle.Title>
              {now_data?.results[0].original_language === "en"
                ? now_data.results[0].title
                : now_data?.results[0].original_title}
            </HomeStyle.Title>
            <HomeStyle.OverView>
              {now_data?.results[0].overview}
            </HomeStyle.OverView>
          </HomeStyle.Banner>
          <MovieSlider data={now_data} title="Now Playing" />
          <MovieSlider data={pop_data} title="Popular" />
          <MovieSlider data={top_data} title="Top Rated" />
        </>
      )}
    </HomeStyle.Wrapper>
  );
}

export default Home;
