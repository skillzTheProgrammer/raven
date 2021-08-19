import styled, { keyframes } from "styled-components/macro";
// import Colors from "styles/utils/colors";

export const SlideIn = keyframes`
from {
    opacity: 0
}
to{
    opacity: 1
}
`;

export const Container = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  z-index: 500;
  background-color: white;
  width: ${({width})=>width?width:`715px`};
  border: 1px solid #ccc;
  border-radius: 5px;
  /* margin-top:-180px; */
  max-height: 80%;
  /* box-shadow: 1px 1px 1px black; */
  padding: ${({padding})=>padding?padding:`20px`};
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
  overflow:scroll;
 
  /* margin: 0 auto; */
  box-sizing: border-box;
  transition: all 0.5s ease-out;
  transform: ${({ show }) => (show ? `translateY(0)` : `translateY(-20px)`)};
  animation-name: ${SlideIn};
  animation-duration: 0.5s;
  /* animation-delay: 0.3s; */
  p {
    color: grey;
  }

  @media (max-width: 600px) {
    width: 95%;
 
  }
`;

export const OuterContainer = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  /* left: 0;
  top: 0; */

  background-color: rgba(0, 0, 0, 0.5);
  transform: ${({ show }) => (show ? `translateY(0)` : `translateY(-100%)`)};
  animation-name: ${SlideIn};
  animation-duration: 0.3s;
`;
export const CancelSection = styled.div`
  display: flex;
  justify-content: flex-end;
  color: grey;
  
  img{
    width:26px;
    height: 26px;
  }

  div {
    cursor: pointer;
  }
`;

export const IconContainer = styled.div`
  text-align: center;
  img {
    height: 50px;
    width: 50px;
  }
`;
