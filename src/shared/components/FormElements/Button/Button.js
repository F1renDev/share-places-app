import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.css";

const Button = props => {
  const newSize = props.size
    ? props.size.charAt(0).toUpperCase() + props.size.slice(1)
    : null;

  if (props.href) {
    return (
      <a
        className={`${styles.Button} ${styles.Button}${newSize ||
          "default"} ${props.inverse && styles.ButtonInverse} ${props.danger &&
          styles.ButtonDanger}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`${styles.Button} ${styles.Button}${newSize ||
          "default"} ${props.inverse && styles.ButtonInverse} ${props.danger &&
          styles.ButtonDanger}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`${styles.Button} ${styles.Button}${newSize ||
        "default"} ${props.inverse && styles.ButtonInverse} ${props.danger &&
        styles.ButtonDanger}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
