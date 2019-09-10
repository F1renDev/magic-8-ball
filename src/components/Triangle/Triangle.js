import React, { useState } from "react";

import styles from "./Triangle.module.css";
import Answer from "../Answer/Answer";

const Triangle = (props) => {
  const [fading, setFading] = useState(false);
  const [prediction, setPrediction] = useState("Click for answer");

  let opacityChanger = fading ? styles.triangleFade : "";

  const onClickFunctions = () => {
    props.clicked();
    setFading(true);
    setPrediction("");
    setTimeout(() => {
      setFading(false);
      setPrediction(props.changed);
    }, 500);
  };

  return (
    <div
      className={[styles.triangle, opacityChanger].join(" ")}
      onClick={onClickFunctions}>
      <Answer changed={prediction} />
    </div>
  );
};

export default Triangle;
