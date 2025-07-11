import { motion } from "motion/react";
import styled from "styled-components";

/* 
styled-componentsの初文字は必ず大文字にします。

ホーム画面のコンポネントに使うstyled-componentです。
このファイルが非常に長くなった場合はreadmeのストラクチャ作成規則を確認してください。
*/
export const Wrapper = styled.div`
  background-color: black;
`;

/**
 * ページローディング画面
 */
export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * ホーム画面の上部に表示されるバナー部分のスタイルです。
 * 背景画像にはデータの backdrop_path を使用します。
 *
 * @example
 * <HomeStyle.Banner bgPhoto={makeImagePath(...)} />
 *
 * @remark
 * CSSプロパティではない属性名をpropとして投げるとブラウザコンソールでエラーが表示されます。
 * 必要な場合　shouldForwardPropを使ってください。
 *
 * @example
 * styled.div.withConfig({shouldForwardProp: (prop) => prop !== "bgPhoto",})
 */
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
  background-position: center center;

  @media screen and (max-width: 768px) {
    padding: 20px;
    height: 70vh;
  }
`;

export const Title = styled.h2`
  font-size: 72px;
  margin-bottom: 24px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    margin-bottom: 18px;
  }
`;

/**
 * バナーに表示される映画の概要
 * 
 * @example
 * <HomeStyle.OverView>
    {now_data?.results[0].overview}
    </HomeStyle.OverView>
 */
export const OverView = styled.p`
  font-size: 28px;
  width: 50%;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 70%;
  }
`;

export const Slider = styled.div`
  height: 220px;
  position: relative;
  top: -100px;
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
