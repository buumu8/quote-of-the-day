import { combineReducers } from "redux";
import { quoteReducer } from "./quote/quote.reducer";
export const rootReducer = combineReducers({
  quote: quoteReducer,
});
