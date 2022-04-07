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
};

export const quoteReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case QUOTE_ACTION_TYPES.GET_ALL_QUOTES:
      return { ...state, quotes: payload };
    case QUOTE_ACTION_TYPES.SET_CURRENT_INDEX:
      return { ...state, index: payload };
    default:
      return state;
  }
};
