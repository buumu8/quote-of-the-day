import { QUOTE_ACTION_TYPES } from "./quote.type";

const INITIAL_STATE = {
  quotes: [
    {
      text: `Mollit elit irure cupidatat labore velit quis veniam tempor esse
          nisi quis.`,
      author: "Loren Ipsum",
    },
  ],
  index: 0,
  isLoading: false,
  error: null,
};

export const quoteReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case QUOTE_ACTION_TYPES.FETCH_QUOTES_START:
      return { ...state, isLoading: true };
    case QUOTE_ACTION_TYPES.FETCH_QUOTES_SUCCESS:
      return { ...state, quotes: payload, isLoading: false };
    case QUOTE_ACTION_TYPES.FETCH_QUOTES_FAILED:
      return { ...state, error: payload, isLoading: false };
    case QUOTE_ACTION_TYPES.SET_CURRENT_INDEX:
      return { ...state, index: payload };
    default:
      return state;
  }
};
