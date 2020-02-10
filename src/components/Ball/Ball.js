import React from "react";
import Triangle from "../Triangle/Triangle";
import styles from "./Ball.module.css";

const ball = props => (
  <div className={styles.ball}>
    <Triangle
      tempPredictionToEmptyString={props.tempPredictionToEmptyString}
      changed={props.changed}
      clicked={props.clicked}
      fading={props.fading}
      setFading={props.setFading}
    />
  </div>
);

export default ball;
