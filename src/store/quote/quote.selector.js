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
