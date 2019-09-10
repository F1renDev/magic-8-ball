import * as actionTypes from "./actionTypes";

export const changePrediction = () => {
  return {
    type: actionTypes.CHANGE_PREDICTION
  };
};

export const handleUserInput = (event) => {
  return {
    type: actionTypes.HANDLE_USER_INPUT,
    nextLetter: event.target.value
  };
};

export const clearUserInput = () => {
  return {
    type: actionTypes.CLEAR_USER_INPUT
  };
};

export const setFading = () => {
  return {
    type: actionTypes.SET_FADING
  };
};

export const temporarySetPredictionToEmptyString = () => {
  return {
    type: actionTypes.TEMPORARY_SET_PREDICTION_TO_EMPTY_STRING
  };
};
