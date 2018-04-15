import * as actionTypes from './../actions/actionTypes';

const initialState = {
  iterations: 10,
  question: { colour: '#b36bc5', name: 'purple' },
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
        base: [...action.payload.shuffled],
        question: {...action.payload.question}
      };
    default:
      return state;
    }
};