import { createSelector } from "reselect";

const selectQuoteReducer = (state) => state.quote;

export const selectQuotes = createSelector(
  [selectQuoteReducer],
  (quotesSlice) => quotesSlice.quotes
);

export const selectIndex = createSelector(
  [selectQuoteReducer],
  (quotesSlice) => quotesSlice.index
);

export const selectAuthor = createSelector(
  [selectQuoteReducer],
  (quotesSlice) => {
    return quotesSlice.author;
  }
);

export const selectText = createSelector(
  [selectQuoteReducer],
  (quotesSlice) => {
    return quotesSlice.text;
  }
);

export const selectQuotesIsLoading = createSelector(
  [selectQuoteReducer],
  (quotesSlice) => quotesSlice.isLoading
);

export const selectQuotesError = createSelector(
  [selectQuoteReducer],
  (quotesSlice) => quotesSlice.error
);

export const selectWiki = createSelector(
  [selectQuoteReducer],
  (quotesSlice) => {
    return quotesSlice.wiki;
  }
);

export const selectImgSrc = createSelector([selectWiki], (wikiSlice) => {
  if (wikiSlice) return wikiSlice.imgSrc;
  else return null;
});

export const selectWikiUrl = createSelector([selectWiki], (wikiSlice) => {
  if (wikiSlice) return wikiSlice.wikiUrl;
  else return null;
});
