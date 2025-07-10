import { AnimatePresence } from "motion/react";
import * as ModalStyle from "../../styled-components/home/StyledModal";
import { useHistory } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  type GetMovieDetailResult,
  getMovieDetails,
} from "../../apis/movie_series_api";
import { useEffect } from "react";
import { makeImagePath } from "../../utils";

type MovieDetailProps = {
  category?: string;
  id: string;
};

function MovieDetail({ id, category }: MovieDetailProps) {
  const history = useHistory();

  const {
    data: detailData,
    isLoading: detailLoading,
    refetch: refetchDetail,
  } = useQuery<GetMovieDetailResult>({
    queryKey: ["detail", `${category}_detail`, id],
    queryFn: () => getMovieDetails(id),
  });

  useEffect(() => {
    refetchDetail();
  }, [id, refetchDetail]);

  const onClickOverlay = () => {
    history.goBack();
  };

  return (
    <>
      {detailData && (
        <AnimatePresence>
          <ModalStyle.Overlay
            onClick={onClickOverlay}
            // initial="hidden"
            // animate="visible"
            // exit="exit"
          >
            <ModalStyle.Modal
              //   initial="initial"
              //   animate="click"
              //   exit="exit"
              layoutId={category + "_" + id}
            >
              {detailLoading ? null : (
                <ModalStyle.ModalPoster
                  bgphoto={makeImagePath(
                    detailData.backdrop_path || detailData.poster_path,
                    "w500"
                  )}
                />
              )}
            </ModalStyle.Modal>
          </ModalStyle.Overlay>
        </AnimatePresence>
      )}
    </>
  );
}

export default MovieDetail;
