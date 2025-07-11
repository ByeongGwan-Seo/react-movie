import { motion } from "motion/react";
import styled from "styled-components";

// export const overlayVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 0.4 },
//   exit: { opacity: 0 },
// };

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
  overflow: hidden;
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
