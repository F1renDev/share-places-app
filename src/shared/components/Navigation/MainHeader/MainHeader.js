import React from "react";
import styles from "./MainHeader.module.css";

//Header to be included on all of pages

const MainHeader = props => {
  return <header className={styles.MainHeader}>{props.children}</header>;
};

export default MainHeader;
