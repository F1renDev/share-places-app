import React from "react";
import styles from "./Modal.module.css";
import transitionStyles from './Transitions.module.css';
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "../Backdrop/Backdrop";

const ModalOverlay = props => {
  const content = (
    <div className={`${styles.Modal} ${props.className}`} style={props.style}>
      <header className={`${styles.ModalHeader} ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      {/* If any button is rendered inside the form I don't reload the page
      by triggering form submition */}
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
      >
        <div className={`${styles.ModalContent} ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`${styles.ModalFooter} ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  // It's semantically a bad idea to render modal next to li item.
  // Separate place is better
  return ReactDOM.createPortal(content, document.getElementById("modal"));
};

const Modal = props => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCalcel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={transitionStyles}
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
