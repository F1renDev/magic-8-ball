import React from "react";
import styles from "./Button.module.css";

const button = props => {
  let clearBtn =
    props.children === "Clear"
      ? { color: "#2a1b98", backgroundColor: "#FFF" }
      : null;

  return (
    <button
      onClick={props.submitted}
      style={clearBtn}
      className={styles.button}
    >
      {props.children}
    </button>
  );
};

export default button;
