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
}

const initialState = {
  prediction: randomPrediction()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PREDICTION:
      return {
        ...state,
        prediction: randomPrediction()
      };
    default:
      return state;
  }
};

export default reducer;
