import React from "react";
// import eightBall from '../../assets/images/8-ball-initial.png';
import Triangle from "../Triangle/Triangle";
import styles from "./Ball.module.css";

// style={{backgroundImage: `url(${Triangle})`}}

const ball = (props) => (
  <div className={styles.ball}>
    <Triangle changed={props.changed} clicked={props.clicked} />
  </div>
);

export default ball;
