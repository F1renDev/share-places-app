import React from "react";
import ReactDOM from "react-dom";
import styles from "./SideDrawer.module.css";

import { CSSTransition } from "react-transition-group";

const SideDrawer = props => {
  // A sidedrawer with smooth in-out animation

  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className={styles.SideDrawer} onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  // Slider is displayed via portal so he would sit higher in the DOM tree

  return ReactDOM.createPortal(content, document.getElementById("drawer"));
};

export default SideDrawer;
