import React from "react";
import { connect } from "react-redux";

import styles from "./App.module.css";
import Ball from "./components/Ball/Ball";
import Input from "./components/Input/Input";
import * as actions from "./store/actions/actions";

const App = props => {
  const handleSubmit = () => {
    props.onChangePrediction();
  };

  return (
    <React.Fragment>
      <div className={styles.app}>
        <Ball
          changed={props.currentPrediction}
          fading={props.fading}
          setFading={props.onSetFading}
          clicked={props.onChangePrediction}
          tempPredictionToEmptyString={
            props.onTemporarySetPredictionToEmptyString
          }
        />
        <Input
          userInput={props.userInput}
          handleUserInput={props.onHandleUserInput}
          clearUserInput={props.onClearUserInput}
          setFading={props.onSetFading}
          submitted={handleSubmit}
          prediction={props.currentPrediction}
          tempPredictionToEmptyString={
            props.onTemporarySetPredictionToEmptyString
          }
        />
      </div>
      <div className={styles.centeredAnchor}>
        <a href="https://en.wikipedia.org/wiki/Magic_8-Ball">
          Learn more about the Magic 8 Ball
        </a>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    currentPrediction: state.prediction,
    userInput: state.userInput,
    fading: state.fading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangePrediction: () => dispatch(actions.changePrediction()),
    onHandleUserInput: event => dispatch(actions.handleUserInput(event)),
    onClearUserInput: () => dispatch(actions.clearUserInput()),
    onSetFading: () => dispatch(actions.setFading()),
    onTemporarySetPredictionToEmptyString: () =>
      dispatch(actions.temporarySetPredictionToEmptyString())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
