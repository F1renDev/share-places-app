import React from "react";

import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = props => {
  return (
    <div className={`${props.asOverlay && styles.loadingSpinner__overlay}`}>
      <div className={styles.ldsDualRing}></div>
    </div>
  );
};

export default LoadingSpinner;
