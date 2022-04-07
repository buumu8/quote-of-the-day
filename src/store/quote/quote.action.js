import { QUOTE_ACTION_TYPES } from "./quote.type";

export const fetchQuotesStart = () => ({
  type: QUOTE_ACTION_TYPES.FETCH_QUOTES_START,
});

export const fetchQuotesSuccess = (quotesArray) => ({
  type: QUOTE_ACTION_TYPES.FETCH_QUOTES_SUCCESS,
  payload: quotesArray,
});

export const fetchQuotesFailed = (error) => ({
  type: QUOTE_ACTION_TYPES.FETCH_QUOTES_FAILED,
  payload: error,
});

export const fetchQuotesAsync = () => (dispatch) => {
  dispatch(fetchQuotesStart());
  new Promise((resolve, reject) => {
    const apiUrl = "https://type.fit/api/quotes";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
        dispatch(fetchQuotesSuccess(result));
      })
      .catch((error) => dispatch(fetchQuotesFailed(error)));
  });
};

export const setIndex = (index) => {
  return { type: QUOTE_ACTION_TYPES.SET_CURRENT_INDEX, payload: index };
};
