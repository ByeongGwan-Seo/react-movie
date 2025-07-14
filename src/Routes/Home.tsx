import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../apis/movies";
import type { GetMoviesResult } from "../apis/movies";
import { makeImagePath } from "../utils/utils";
import * as HomeStyle from "../styled-components/home/StyledHome";
import MovieSlider from "../components/movies/MovieSlider";

function Home() {
  /**
   * react-queryを使用して、それぞれのカテゴリに対応するデータを取得します。
   *
   * 【注意】
   * @param {string} : queryKeyには、取得するデータの内容が明確にわかる単語を使ってください
   *
   * 例：「movies」「nowPlaying」「topRated」など。
   * 他のコンポーネントや開発者が見たときに、何のデータを指しているのか一目で分かるようにしましょう。
   */
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
          {/*
        ホーム画面のバナー表示

        「注意」
        バナーに表示される映画は必ず now_data配列の[0]indexにあるものにします。

        映画の言語（original_language)が英語ではない場合原題が表示されます。
        */}
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

          {/*スライダー*/}
          <MovieSlider
            data={now_data}
            title="Now Playing"
            category="now_playing"
          />
          <MovieSlider data={pop_data} title="Popular" category="popular" />
          <MovieSlider data={top_data} title="Top Rated" category="top_rated" />
        </>
      )}
    </HomeStyle.Wrapper>
  );
}

export default Home;
