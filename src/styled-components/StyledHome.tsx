import { motion } from "motion/react";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: black;
`;

export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "bgPhoto",
})<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 1)
    ),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 72px;
  margin-bottom: 24px;
  font-weight: bold;
`;

export const OverView = styled.p`
  font-size: 28px;
  width: 50%;
`;

export const Slider = styled.div`
  height: 220px;
  position: relative;
  top: -100px;
  margin-bottom: 100px;
`;

export const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 95%;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Box = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => prop !== "bgPhoto",
})<{ bgPhoto: string }>`
  height: 200px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  &:first-child {
    transform-origin: center left;
  }

  &:last-child {
    transform-origin: center right;
  }
`;

export const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

export const PrevBtn = styled.div`
  width: 30px;
  height: 30px;
  top: 130px;
  left: 15px;
  position: absolute;
  svg {
    fill: rgb(238, 238, 238);
    :hover {
      fill: rgba(238, 238, 238, 0.7);
    }
  }
  z-index: 1;
  cursor: pointer;
  @media screen and (max-width: 1536px) {
    top: 90px;
  }
`;

export const NextBtn = styled.div`
  width: 30px;
  height: 30px;
  top: 130px;
  right: 15px;
  position: absolute;
  svg {
    fill: rgb(238, 238, 238);
    :hover {
      fill: rgba(238, 238, 238, 0.7);
    }
  }
  z-index: 1;
  cursor: pointer;
  @media screen and (max-width: 1536px) {
    top: 90px;
  }
`;

export const SliderTitle = styled.h1`
  color: ${(props) => props.theme.white.lighter};
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  margin-left: 45px;
`;
