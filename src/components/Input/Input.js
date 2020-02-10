import React from "react";

import styles from "./Input.module.css";
import Button from "../Button/Button";

const Input = props => {
  const handleSubmit = event => {
    event.preventDefault();
    props.setFading();
    props.tempPredictionToEmptyString();
    setTimeout(() => {
      props.submitted();
      props.setFading();
    }, 500);
  };

  const handleClear = event => {
    event.preventDefault();
    props.clearUserInput();
  };

  return (
    <div className={styles.inputDiv}>
      <div className={styles.inputForm}>
        <input
          onChange={event => props.handleUserInput(event)}
          value={props.userInput}
          className={styles.inputField}
          type="text"
        />
        <Button submitted={handleClear} clear>
          Clear
        </Button>
        <Button submitted={handleSubmit}>Ask</Button>
      </div>
    </div>
  );
};

export default Input;
