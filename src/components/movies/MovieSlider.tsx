import { AnimatePresence } from "motion/react";
import { makeImagePath } from "../../utils";
import * as HomeStyle from "../../styled-components/home/StyledHome";
import type { GetMoviesResult } from "../../apis/movie_series_api";
import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import MovieDetail from "./MovieDetail";

/**
 * スライダーのアニメーション状態を定義するvariants。
 * ページの移動方向に応じて、左右にスライドする動きを制御します。
 *
 * @type {Variants}
 * @param {boolean} isNext - 次ページへ移動する場合は `true`、前ページへ戻る場合は `false`。
 *
 * @property hidden - 初期状態。移動方向に応じて左右の画面外から登場。
 * @property visible - 表示状態。中央に固定。
 * @property exit - アニメーション終了時。反対方向にスライドして退場。
 *
 * @example
 * <motion.div
 *   custom={isNext}
 *   variants={rowVariants}
 *   initial="hidden"
 *   animate="visible"
 *   exit="exit"
 * />
 */
const rowVariants = {
  hidden: (isNext: boolean) => {
    return {
      x: isNext ? window.innerWidth : -window.innerWidth,
    };
  },
  visible: {
    x: 0,
  },
  exit: (isNext: boolean) => {
    return {
      x: isNext ? -window.innerWidth : window.innerWidth,
    };
  },
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    transition: {
      type: "tween" as const,
      ease: "linear" as const,
      delay: 0.05,
      duration: 0.1,
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.15,
      duaration: 0.1,
      type: "tween" as const,
    },
  },
};

type MovieSliderProps = {
  data: GetMoviesResult | undefined;
  title: string;
  category: string;
};

function MovieSlider({ data, title, category }: MovieSliderProps) {
  const history = useHistory();
  const movieMatch = useRouteMatch<{ movieId: string }>("/movies/:movieId");
  const [index, setIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);

  // ダブルクリック防止用state
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);

  // スライダーの一行に表示する画像数(現在６個固定)
  const offset = 6;

  const nextIndex = () => {
    if (data) {
      if (leaving) {
        return;
      } else {
        const totalMovies = data.results.length;
        const maxIndex = Math.floor(totalMovies / offset) - 1;

        toggleLeaving();
        setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
        setIsNext(() => true);
      }
    }
  };

  const prevIndex = () => {
    if (data) {
      if (leaving) {
        return;
      } else {
        const totalMovies = data.results.length;
        const maxIndex = Math.floor(totalMovies / offset) - 1;

        toggleLeaving();
        setIndex((prev) => (prev === 0 ? maxIndex - 1 : prev - 1));
        setIsNext(() => false);
      }
    }
  };

  //スライダーのイメージ枚数ロジック
  const resultsData = data?.results
    .slice(1)
    .slice(offset * index, offset * index + offset);

  const onBoxClicked = (movieId: number) => {
    console.log(`movie id is ${movieId}`);
    history.push(`/movies/${movieId}`);
  };

  return (
    <>
      <HomeStyle.Slider>
        <HomeStyle.SliderTitle>{title}</HomeStyle.SliderTitle>
        <AnimatePresence
          initial={false}
          onExitComplete={toggleLeaving}
          custom={isNext}
        >
          <HomeStyle.Row
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={category + index}
            custom={isNext}
            transition={{ type: "tween", ease: "linear", duration: 0.5 }}
          >
            {resultsData &&
              resultsData.map((movie) => (
                <HomeStyle.Box
                  key={category + movie.id}
                  layoutId={category + "_" + movie.id}
                  whileHover="hover"
                  initial="normal"
                  variants={boxVariants}
                  transition={{ type: "tween" }}
                  bgPhoto={makeImagePath(
                    movie.backdrop_path || movie.poster_path,
                    "w500"
                  )}
                  onClick={() => onBoxClicked(movie.id)}
                >
                  <HomeStyle.Info variants={infoVariants}>
                    <h4>
                      {movie.original_language === "en"
                        ? movie.title
                        : movie.original_title}
                    </h4>
                  </HomeStyle.Info>
                </HomeStyle.Box>
              ))}
          </HomeStyle.Row>
        </AnimatePresence>

        <HomeStyle.PrevBtn onClick={prevIndex}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </HomeStyle.PrevBtn>
        <HomeStyle.NextBtn onClick={nextIndex}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </HomeStyle.NextBtn>
      </HomeStyle.Slider>

      {movieMatch ? (
        <MovieDetail id={movieMatch.params.movieId} category={category} />
      ) : null}
    </>
  );
}

export default MovieSlider;
