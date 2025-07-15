import { motion } from "motion/react";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: black;
  height: 150vh;
`;

export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 72px;
  margin-bottom: 24px;
  font-weight: bold;
  position: relative;
  top: 150px;
  left: 40px;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    margin-bottom: 18px;
  }
`;

export const SliderTitle = styled.h1`
  color: ${(props) => props.theme.white.lighter};
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
  margin-left: 45px;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const Slider = styled.div`
  height: 220px;
  position: relative;
  /* top: -100px; */
  top: 180px;
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    top: -50px;
  }
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

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Box = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => prop !== "bgPhoto",
})<{ bgPhoto: string }>`
  height: 200px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  cursor: pointer;
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
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  top: 130px;
  left: 20px;
  position: absolute;
  svg {
    fill: rgb(238, 238, 238);
    :hover {
      fill: rgba(238, 238, 238, 0.7);
    }
  }
  z-index: 1;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    top: 50px;
    height: inherit;
  }
`;

export const NextBtn = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  top: 130px;
  right: 20px;
  position: absolute;
  svg {
    fill: rgb(238, 238, 238);
    :hover {
      fill: rgba(238, 238, 238, 0.7);
    }
  }
  z-index: 1;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    top: 50px;
    height: inherit;
  }
`;
