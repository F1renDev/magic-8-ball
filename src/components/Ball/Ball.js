import React from "react";
import Triangle from "../Triangle/Triangle";
import styles from "./Ball.module.css";

const ball = (props) => (
  <div className={styles.ball}>
    <Triangle changed={props.changed} clicked={props.clicked} />
  </div>
);

export default ball;
