import { QUOTE_ACTION_TYPES } from "./quote.type";
import { server } from "../../utils/server-config";

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
    const apiUrl = `${server}/quotes`;
    // const apiUrl = "https://type.fit/api/quotes";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
        const randomIndex = Math.floor(Math.random() * result.length);
        const author = result[randomIndex].author ?? result[randomIndex].author;
        const text = result[randomIndex].text;
        const payload = {
          quotes: result,
          author: author,
          text: text,
          index: randomIndex,
        };
        dispatch(fetchQuotesSuccess(payload));
        dispatch(fetchWikiAsync(author));
      })
      .catch((error) => dispatch(fetchQuotesFailed(error)));
  });
};

export const changeIndex = (index) => {
  return { type: QUOTE_ACTION_TYPES.SET_CURRENT_INDEX, payload: index };
};

export const fetchWikiStart = () => ({
  type: QUOTE_ACTION_TYPES.FETCH_WIKI_START,
});

export const fetchWikiSuccess = (wikiObject) => ({
  type: QUOTE_ACTION_TYPES.FETCH_WIKI_SUCCESS,
  payload: wikiObject,
});

export const fetchWikiFailed = (error) => ({
  type: QUOTE_ACTION_TYPES.FETCH_WIKI_FAILED,
  payload: error,
});

export const fetchWikiAsync = (author) => (dispatch) => {
  dispatch(fetchWikiStart());
  if (!author) {
    dispatch(fetchWikiFailed());
  } else {
    author = author.replaceAll(" ", "%20");
    // dispatch(fetchWikiSuccess({ imgSrc: null, wikiUrl: null }));
    new Promise((resolve, reject) => {
      fetch(`${server}/wiki`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author: author,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
          const data = result.query.pages;
          const pageIds = Object.keys(data);
          if (pageIds.length) {
            const pageId = pageIds[0];
            const info = data[pageId];
            const url = info.fullurl;
            const thumbnail = info.thumbnail;
            let source = null;
            if (thumbnail) {
              source = thumbnail.source;
            }
            dispatch(fetchWikiSuccess({ imgSrc: source, wikiUrl: url }));
          } else {
            dispatch(fetchWikiFailed("no page found"));
          }
        })
        .catch((error) => dispatch(fetchWikiFailed(error)));
    });
  }
};
