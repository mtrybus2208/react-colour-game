import * as actionTypes from './../actions/actionTypes';

export const initialState = {
    timer: 30,
    difficulty: 3,
};

export const newGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GAME_PARAMS:
    return {
      ...state,
      timer: action.payload.timer,
      difficulty: action.payload.difficulty
    } 
    default:
      return state;
    }
};