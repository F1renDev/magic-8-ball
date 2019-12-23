import React from "react";
import { connect } from "react-redux";

import styles from "./App.module.css";
import Ball from "./components/Ball/Ball";
import Input from "./components/Input/Input";
import * as actions from "./store/actions/actions";

class App extends React.Component {
  handleSubmit = () => {
    this.props.onChangePrediction();
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.app}>
          <Ball
            changed={this.props.currentPrediction}
            fading={this.props.fading}
            setFading={this.props.onSetFading}
            clicked={this.props.onChangePrediction}
            tempPredictionToEmptyString={
              this.props.onTemporarySetPredictionToEmptyString
            }
          />
          <Input
            userInput={this.props.userInput}
            handleUserInput={this.props.onHandleUserInput}
            clearUserInput={this.props.onClearUserInput}
            setFading={this.props.onSetFading}
            submitted={this.handleSubmit}
            prediction={this.props.currentPrediction}
            tempPredictionToEmptyString={
              this.props.onTemporarySetPredictionToEmptyString
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
  }
}

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
