import React, { useReducer, useEffect } from "react";
import styles from "./Input.module.css";

import { validate } from "../../../utility/validators";

//Managing the state with reducer hook

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true
      };
    }
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  // Calling the onInput function every time id, onInput, value or isValid change
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators
    });
  };

  // If the user hasn't yet typed anything in the form, the form is valid by default
  const touchHandler = () => {
    dispatch({
      type: "TOUCH"
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      //Div gets an 'invalid' style only if
      // the input field is not valid and was not touched
      className={`${styles.FormControl} ${!inputState.isValid &&
        inputState.isTouched &&
        styles.FormControlInvalid}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {/* Same as above */}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
