import React from "react";

import styles from "./Triangle.module.css";
import Answer from "../Answer/Answer";


const triangle = (props) => {
  const onClickFunctions = () => {
    props.clicked();
    setTimeout(() => {
      
    }, 1000);
  };

  return (

      <div className={styles.triangle} onClick={onClickFunctions}>
        <Answer changed={props.changed} />
      </div>

  );
};

export default triangle;
