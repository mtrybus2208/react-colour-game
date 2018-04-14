import * as actionTypes from './../actions/actionTypes';

const initialState = {
  content: [
    '1asdasdsad',
    '2123123123',
    '3trololo',
    '4asdasdsad',
    '5123123123',
    '6trololo',
    '7asdasdsad',
    '8123123123',
    '9trololo',
  ]
};

export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGGER_TEST:
      return {
        ...state,
      };
    case actionTypes.GET_QUOTES_SUCCESS:
      console.log('[Get quotes!]');
      console.log(action.payload);
      return {
        ...state,
        content: [...action.payload]
      };
    default:
      return state;
    }
};