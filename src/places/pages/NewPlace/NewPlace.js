import React from "react";
import styles from "./NewPlace.module.css";

import Input from "../../../shared/components/FormElements/Input/Input";

const NewPlace = () => {
  return (
    <form className={styles.PlaceForm}>
      <Input element='input' type='text' label='Title' />
    </form>
  );
};

export default NewPlace;
