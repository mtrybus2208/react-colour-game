import * as actionTypes from './../actions/actionTypes';

const initialState = {
  iterations: 10,
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
    case actionTypes.CHANGE_QUOTE:
      return {
        ...state,
      };
    default:
      return state;
    }
};