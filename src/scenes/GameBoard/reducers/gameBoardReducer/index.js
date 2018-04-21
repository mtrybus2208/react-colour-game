import * as actionTypes from './../../actions/actionTypes';
import initialState from './initialState';

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