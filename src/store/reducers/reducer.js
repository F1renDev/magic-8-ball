import * as actionTypes from "../actions/actionTypes";

const predictions = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes — definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Signs point to yes",
  "Yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don’t count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

const randomPrediction = () => {
  return predictions[Math.floor(Math.random() * predictions.length)];
};

const initialState = {
  // prediction: randomPrediction(),
  prediction: "Click for answer",
  userInput: "",
  fading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PREDICTION:
      return {
        ...state,
        prediction: randomPrediction()
      };
    case actionTypes.TEMPORARY_SET_PREDICTION_TO_EMPTY_STRING:
      return {
        ...state,
        prediction: ""
      };
    case actionTypes.SET_FADING:
      return {
        ...state,
        fading: !state.fading
      };
    case actionTypes.HANDLE_USER_INPUT:
      return {
        ...state,
        userInput: action.nextLetter
      };
    case actionTypes.CLEAR_USER_INPUT:
      return {
        ...state,
        userInput: ""
      };
    default:
      return state;
  }
};

export default reducer;
