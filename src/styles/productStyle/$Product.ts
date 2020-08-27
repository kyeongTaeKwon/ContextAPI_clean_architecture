import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const animation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      ease: "easeIn",
    },
  },
};
export const StyledProductBox = styled.div`
  /* flex: auto; */
  margin-right: 5rem;
  margin-bottom: 6rem;
  height: 30rem;
`;

export const StyledProudctImgBox = styled.div`
  width: 35rem;
  height: 19.6rem;
  position: relative;
`;
export const StyledProductImg = styled.img`
  flex: auto;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const StyledProductTitle = styled.p`
  font-size: 1.4rem;
  letter-spacing: -0.03rem;
  font-weight: bold;
  width: 35rem;
  height: 2rem;
  margin-bottom: 2.4rem;
`;

export const StyledProductPrice = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const StyledAddCartBtn = styled.button`
  background-color: transparent;
  right: 0rem;
  padding: 0px;
  outline: none;
  border: 0px;
  color: ${props => props.theme.colors.primary};
  font-size: 1.3rem;
  font-weight: bold;
  text-align: left;
  transition: color 0.3s ease;
  cursor: pointer;
  :hover {
    color: white;
  }
`;

export const StyledAddCartMotionDiv = styled(motion.div).attrs(() => ({
  initial: "hidden",
  variants: animation,
}))`
  width: 32rem;
  height: 4.8rem;
  align-self: center;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 0.8rem;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.background};
`;
export const StyledAddCartText = styled.p`
  /* margin: 0px; */
  margin-top: 1.6rem;
  margin-left: 1.6rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const StyledLinkToCart = styled(Link)`
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
`;
