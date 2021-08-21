import React, { useEffect } from "react";
import { Container, Paragraph } from "./style";
// import SuccessIcon from "assets/svg/success.svg";
// import ErrorIcon from "assets/svg/error.svg";
// import CancelIcon from "assets/svg/cancelIcon.svg";
// import ToastContextProvider from "context/ToastContext";
// import { ToastContext } from "context/ToastContext";
// import { useModalContext } from "context/ModalContext";

const Toast = ({ description, showModal, setShowModal }) => {

  useEffect(() => {
    if (showModal === true) {
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }
  }, [showModal, setShowModal]);

  return (
    // <ToastContextProvider>
      <Container showModal={showModal}>
        {/* <img
          src={`${
            icon === "success"
              ? SuccessIcon
              : icon === "error"
              ? ErrorIcon
              : null
          }`}
          alt=""
        /> */}
        <Paragraph style={{color:'white'}}>{description} </Paragraph>
        {/* <img
          className="cancel"
          src={CancelIcon}
          alt=""
          onClick={() => setShowModal(false)}
        /> */}
        <p onClick={() => setShowModal(false)} style={{color:'white', cursor:'pointer'}}>X</p>
      </Container>
    // </ToastContextProvider>
  );
};

export default Toast;
