import React from "react";

import styles from "./Answer.module.css";
import AnswerItem from "../AnswerItem/AnswerItem";

const answer = props => {
  const textArr = props.changed.split(" ").map((item, i) => {
    return <AnswerItem key={i}>{item}</AnswerItem>;
  });
  return <div className={styles.answer}>{textArr}</div>;
};
export default answer;
