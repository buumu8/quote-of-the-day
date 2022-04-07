import React from "react";
import Quote from "../quote/quote.component";
import { WithSpinner } from "../with-spinner/with-spinner.component";

const QuoteContainer = () => {
  return false ? WithSpinner(<Quote />) : <Quote />;
};

export default QuoteContainer;
