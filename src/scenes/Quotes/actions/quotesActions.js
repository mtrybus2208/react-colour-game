import * as actionTypes from './actionTypes'; 
import * as quotesApi from './../../../services/api/quotes-api'; 

export const loggerTest = (payload) => ({
  type: actionTypes.LOGGER_TEST,
  payload,
});

export const getQuotesSuccess = (payload) => ({
  type: actionTypes.GET_QUOTES_SUCCESS,
  payload,
});

export const getQuotesFail = (payload) => ({
  type: actionTypes.GET_QUOTES_FAIL,
  payload,
});

export const getQuotes = () => {
  return (dispatch, getState) => { 
    quotesApi.getQuotes()
      .then(response => {
          const content = response.data.quotes.map(quote => quote.content);
          return dispatch(getQuotesSuccess(content));
      })
      .catch(err => {
        return dispatch(getQuotesSuccess(err));
      })
  }
};