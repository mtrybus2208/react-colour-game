import * as actionTypes from './../actions/actionTypes';

const initialState = {
  newQuotes: {
    value: '',
    error: null
  } 
};

export const newQuotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_QUOTE:
    console.log(state)
      return {
        ...state,
        newQuotes: {
          ...state.newQuotes,
          value: action.payload
        } 
      };
    default:
      return state;
    }
};