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
  author: null,
  text: null,
  wiki: { imgSrc: null, wikiUrl: null },
};

export const quoteReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case QUOTE_ACTION_TYPES.FETCH_QUOTES_START:
    case QUOTE_ACTION_TYPES.FETCH_WIKI_START:
      return { ...state, isLoading: true };
    case QUOTE_ACTION_TYPES.FETCH_QUOTES_SUCCESS: {
      // First fetch quotes success
      const { quotes, index, author, text } = payload;
      return {
        ...state,
        quotes: quotes,
        isLoading: false,
        index: index,
        author: author,
        text: text,
      };
    }
    case QUOTE_ACTION_TYPES.FETCH_WIKI_SUCCESS:
      return { ...state, wiki: payload, isLoading: false };
    case QUOTE_ACTION_TYPES.FETCH_QUOTES_FAILED:
      return { ...state, error: payload, isLoading: false };
    case QUOTE_ACTION_TYPES.FETCH_WIKI_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
        wiki: { imgSrc: null, wikiUrl: null },
      };
    case QUOTE_ACTION_TYPES.SET_CURRENT_INDEX: {
      // Run every time user click next button
      const { quotes } = state;
      const author = quotes[payload].author ?? quotes[payload].author;
      const text = quotes[payload].text;
      return { ...state, index: payload, author: author, text: text };
    }
    default:
      return state;
  }
};
