import { QUOTE_ACTION_TYPES } from "./quote.type";

export const setQuotes = (quotes) => {
  return {
    type: QUOTE_ACTION_TYPES.GET_ALL_QUOTES,
    payload: quotes,
  };
};

export const setIndex = (index) => {
  return { type: QUOTE_ACTION_TYPES.SET_CURRENT_INDEX, payload: index };
};
