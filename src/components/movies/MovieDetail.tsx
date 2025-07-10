import { AnimatePresence } from "motion/react";
import * as ModalStyle from "../../styled-components/home/StyledModal";
import { useHistory } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  type GetMovieDetailResult,
  getMovieDetails,
} from "../../apis/movie_series_api";
import { useEffect } from "react";

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
      {detailLoading ? null : (
        <AnimatePresence>
          <ModalStyle.Overlay
            onClick={onClickOverlay}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalStyle.BigMovie
              style={{ top: 100 }}
              layoutId={String(detailData?.id)}
            >
              <>{detailData?.title}</>
            </ModalStyle.BigMovie>
          </ModalStyle.Overlay>
        </AnimatePresence>
      )}
    </>
  );
}

export default MovieDetail;
