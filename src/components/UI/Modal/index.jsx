import React from "react";
import {
  Container,
  OuterContainer,
  CancelSection,
  IconContainer,
} from "./style";
import Success from "assets/svg/success.svg";
import Error from "assets/svg/error.svg";
import Cancel from 'assets/svg/cancel.svg'

const Modal = (props) => {
  return (
    <OuterContainer show={props.show}>
      <Container width={props.width} padding={props.padding} show={props.show}>
        <CancelSection>
          <div onClick={props.modalClosed}><img src={Cancel} alt='delete' /></div>
        </CancelSection>
        <IconContainer>
          {props.icon === "success" ? <img src={Success} alt="icon" /> : null}
          {props.icon === "error" ? <img src={Error} alt="icon" /> : null}
        </IconContainer>
        {/* <Backdrop show={props.show} clicked={props.modalClosed} /> */}
        {props.children}
      </Container>
    </OuterContainer>
  );
};

export default Modal;
