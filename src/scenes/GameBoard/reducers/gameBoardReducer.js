import * as actionTypes from './../actions/actionTypes';

const initialState = {
  score: 0,
  iterations: 10,
  question: {},
  shuffledColours: [],
  base: [
    { colour: '#b36bc5', name: 'purple' },
    { colour: '#FFC107', name: 'yellow' },
    { colour: '#4CAF50', name: 'green' },
    { colour: '#03A9F4', name: 'blue' },
    { colour: '#F44336', name: 'red' },
    { colour: '#E91E63', name: 'pink' },
  ],
};

export const gameBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHUFFLE_COLOURS_SUCCESS: 
      return {
        ...state,
        shuffledColours: [...action.payload.shuffled],
        question: {...action.payload.question}
      };
    case actionTypes.UPDATE_RESULT: 
      return {
        ...state,
        score: state.score + 1
      };
    case actionTypes.RESET_RESULT: 
      return {
        ...state,
        score: 0
      };
    default:
      return state;
    }
};