import { motion } from "motion/react";
import styled from "styled-components";

export const modalVariants = {
  initial: { opacity: 0 },
  click: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0 },
};

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
  z-index: 2;
`;

export const Modal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55vw;
  height: 90vh;
  background-color: ${(props) => props.theme.black.darker};
  border-radius: 5px;
  overflow: auto;
  z-index: 999 !important;
`;

export const ModalPoster = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "bgPhoto",
})<{ bgphoto: string }>`
  width: 100%;
  height: 500px;
  background-image: linear-gradient(
      to top,
      rgba(24, 24, 24, 1) 2%,
      rgba(0, 0, 0, 0) 60%
    ),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  @media screen and (max-width: 1536px) {
    height: 350px;
  }
`;

export const PosterTitle = styled.div`
  letter-spacing: 1px;
  width: 100%;
  height: 70px;
  color: ${(props) => props.theme.white.lighter};
  padding: 0 50px;
  font-size: 45px;
  font-weight: 700;
  position: relative;
  top: -90px;
  text-shadow: 1px 1px 2px #a8a8a8;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;

  @media screen and (max-width: 1536px) {
    font-size: 32px;
    top: -75px;
    height: 40px;
    margin-bottom: 25px;
  }
`;

export const PosterMiniTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding-left: 55px;
  position: relative;
  top: -90px;
  letter-spacing: 0.8px;
  color: #bababa;
  @media screen and (max-width: 1536px) {
    font-size: 14px;
  }
`;

export const DetailContentsWrapper = styled.div`
  display: flex;
  position: relative;
  top: -90px;
  padding: 0px 32px;
  height: auto;
`;

export const LeftColumn = styled.div`
  flex: 8;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const InfoTop = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

interface VoteAverageProps {
  value: number;
}

export const VoteAverage = styled.span<VoteAverageProps>`
  font-size: 20px;
  color: ${(props) => props.theme.black.lighter};
  font-weight: bold;
  padding: 8px;
  background-color: ${(props) => {
    if (props.value < 5.0) return "red";
    if (props.value < 7.0) return "yellow";
    return "green";
  }};
  border-radius: 8px;
`;

export const VoteBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const VoteCount = styled.span`
  font-size: 20px;
  color: ${(props) => props.theme.white.lighter};
`;

export const Genre = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.white.lighter};
`;

export const Overview = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.white.lighter};
  line-height: 1.4;
`;
export const RightColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px 35px;
  border-left: 0.1px solid ${(props) => props.theme.white.darker};
  gap: 30px;
`;

export const CreditDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const VoteIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #f1c40f;
`;
