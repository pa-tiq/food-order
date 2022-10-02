import React from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
};


const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop/>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
