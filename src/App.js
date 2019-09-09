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
            clicked={this.props.onChangePrediction}
          />
          <Input submitted={this.handleSubmit} />
        </div>
        <div className={styles.centeredAnchor}>
          <a href='https://en.wikipedia.org/wiki/Magic_8-Ball'>
            Learn more about the Magic 8 Ball
          </a>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentPrediction: state.prediction };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangePrediction: () => dispatch(actions.changePrediction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
