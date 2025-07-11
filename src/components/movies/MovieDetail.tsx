import { AnimatePresence } from "motion/react";
import * as ModalStyle from "../../styled-components/home/StyledModal";
import { useHistory } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  getMovieCredits,
  type GetMovieDetailResult,
  getMovieDetails,
  type MovieCreditResult,
} from "../../apis/movies";
import { useEffect } from "react";
import { makeImagePath } from "../../utils";
import styled from "styled-components";

type MovieDetailProps = {
  category?: string;
  id: string;
};

const CreditTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;
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

  const {
    data: creditData,
    isLoading: creditLoading,
    refetch: refetchCredit,
  } = useQuery<MovieCreditResult>({
    queryKey: ["credits", `${category}_credit`, id],
    queryFn: () => getMovieCredits(id),
  });

  useEffect(() => {
    refetchDetail();
    refetchCredit();
  }, [id, refetchDetail, refetchCredit]);

  useEffect(() => {
    if (creditData) {
      const loadedActors =
        creditData?.cast
          .filter((c) => c.known_for_department === "Acting")
          .slice(0, 5) ?? [];
      console.log("✅ 로드된 Directors: ", loadedActors);
    }
  }, [creditData]);

  const onClickOverlay = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      history.goBack();
    }
  };

  const directors =
    creditData?.crew.filter(
      (c) => c.department === "Directing" && c.job === "Director"
    ) ?? [];
  const topActors =
    creditData?.cast
      .filter((c) => c.known_for_department === "Acting")
      .slice(0, 5) ?? [];

  return (
    <>
      <title>{`Clone | ${detailData?.title || "Netflix Clone"}`}</title>
      <AnimatePresence>
        {detailData && (
          <ModalStyle.Overlay onClick={onClickOverlay}>
            <ModalStyle.Modal
              variants={ModalStyle.modalVariants}
              initial="initial"
              animate="click"
              exit="exit"
            >
              {detailLoading && creditLoading ? null : (
                <>
                  <ModalStyle.ModalPoster
                    bgphoto={makeImagePath(
                      detailData.backdrop_path || detailData.poster_path,
                      "w500"
                    )}
                  />
                  <ModalStyle.PosterTitle>
                    {detailData?.title}
                  </ModalStyle.PosterTitle>
                  <ModalStyle.PosterMiniTitle>
                    {detailData?.original_title || detailData.title}
                  </ModalStyle.PosterMiniTitle>
                  <ModalStyle.DetailContentsWrapper>
                    <ModalStyle.LeftColumn>
                      <ModalStyle.InfoTop>
                        <ModalStyle.VoteAverage value={detailData.vote_average}>
                          {Math.ceil(detailData.vote_average * 10) / 10}
                        </ModalStyle.VoteAverage>

                        <ModalStyle.VoteBox>
                          <ModalStyle.VoteIcon viewBox="0 0 32 32">
                            <path
                              d="M27 11h-8.52L19 9.8A6.42 6.42 0 0 0 13 1a1 1 0 0 0-.93.63L8.32 11H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h18.17a3 3 0 0 0 2.12-.88l3.83-3.83a3 3 0 0 0 .88-2.12V14a3 3 0 0 0-3-3zM4 28V14a1 1 0 0 1 1-1h3v16H5a1 1 0 0 1-1-1zm24-3.83a1 1 0 0 1-.29.71l-3.83 3.83a1.05 1.05 0 0 1-.71.29H10V12.19l3.66-9.14a4.31 4.31 0 0 1 3 1.89 4.38 4.38 0 0 1 .44 4.12l-1 2.57A1 1 0 0 0 17 13h10a1 1 0 0 1 1 1z"
                              data-name="thumb up android app aplication phone"
                            />
                          </ModalStyle.VoteIcon>
                          <ModalStyle.VoteCount>
                            {detailData.vote_count}
                          </ModalStyle.VoteCount>
                        </ModalStyle.VoteBox>

                        {detailData.genres.map((genre) => (
                          <ModalStyle.Genre key={genre.id}>
                            {genre.name}
                          </ModalStyle.Genre>
                        ))}
                      </ModalStyle.InfoTop>
                      <ModalStyle.Overview>
                        {detailData.overview ||
                          `「登録されているあらすじがございません」`}
                      </ModalStyle.Overview>
                    </ModalStyle.LeftColumn>
                    <ModalStyle.RightColumn>
                      {!creditLoading && (
                        <>
                          <ModalStyle.CreditDiv>
                            <CreditTitle>監督</CreditTitle>
                            {directors.length > 0
                              ? directors[0].name
                              : "監督情報なし"}
                          </ModalStyle.CreditDiv>
                          <ModalStyle.CreditDiv>
                            <CreditTitle>キャスト</CreditTitle>
                            {topActors.map((actor) => (
                              <div key={actor.name}>{actor.name}</div>
                            ))}
                          </ModalStyle.CreditDiv>
                        </>
                      )}
                    </ModalStyle.RightColumn>
                  </ModalStyle.DetailContentsWrapper>
                </>
              )}
            </ModalStyle.Modal>
          </ModalStyle.Overlay>
        )}
      </AnimatePresence>
    </>
  );
}

export default MovieDetail;
