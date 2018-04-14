import * as actionTypes from './actionTypes';


export const changeQuote = (payload) => ({
  type: actionTypes.CHANGE_QUOTE,
  payload,
});

export const submitQuotesForm = (payload) => ({
  type: actionTypes.SUBMIT_QUOTES_FORM,
  payload,
});
 