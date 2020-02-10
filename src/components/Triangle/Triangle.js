import React from "react";

import styles from "./Triangle.module.css";
import Answer from "../Answer/Answer";

const Triangle = props => {
  let opacityChanger = props.fading ? styles.triangleFade : "";

  const onClickFunctions = () => {
    props.setFading();
    props.tempPredictionToEmptyString();
    setTimeout(() => {
      props.clicked();
      props.setFading();
    }, 500);
  };

  return (
    <div
      className={[styles.triangle, opacityChanger].join(" ")}
      onClick={onClickFunctions}
    >
      <Answer changed={props.changed} />
    </div>
  );
};

export default Triangle;
