import styled from "styled-components/macro";
import { SlideDown } from "GlobalStyles/ravenStyle/animations";
import media from "GlobalStyles/utils/media";
import BrandColors from "GlobalStyles/utils/colors";


export const Container = styled.div`
  display: ${({ showModal }) => (showModal ? "flex" : "none")};
  position: fixed;
  bottom: 6rem;
  margin: auto;
  background-color: ${BrandColors.gold};
  width: 50%;
  z-index: 10;
  left: 26%;
  text-align: center;
  border-radius: 7px;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  /* border: 0.5px solid gold; */
  transition: all 0.5s;

  .cancel {
    height: 10px;
    cursor: pointer;
  }

  img {
    height: 20px;
  }

  ${SlideDown};

  ${media.mobile`
  width: 80%;
  left: 7.5%
  `}
`;

export const Paragraph = styled.p`
  color: black;
`;
