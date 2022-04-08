import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import Spinner from "../spinner/spinner.component";
import { QuoteText } from "../quote-text/quote-text.component";
import { QuoteAuthor } from "../quote-author/quote-author.component";

import {
  changeIndex,
  fetchQuotesAsync,
  fetchWikiAsync,
} from "../../store/quote/quote.action";

import {
  selectQuotes,
  selectQuotesIsLoading,
  selectText,
  selectAuthor,
} from "../../store/quote/quote.selector";

import {
  QuoteContainer,
  ButtonContainer,
  Button,
  TwitterButton,
} from "./quote.styles";

export const Quote = () => {
  const dispatch = useDispatch();

  const text = useSelector(selectText);
  const author = useSelector(selectAuthor);
  const quotes = useSelector(selectQuotes);
  const isLoading = useSelector(selectQuotesIsLoading);

  useEffect(() => {
    dispatch(fetchQuotesAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text} - ${author}`;
    window.open(twitterUrl, "_blank");
  };

  const newQuote = () => {
    const newIndex = Math.floor(Math.random() * quotes.length);
    dispatch(changeIndex(newIndex));
    dispatch(fetchWikiAsync(quotes[newIndex].author));
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <QuoteContainer>
      <QuoteText />
      <QuoteAuthor />
      <ButtonContainer>
        <TwitterButton onClick={tweetQuote}>
          <FontAwesomeIcon icon={faTwitter} />
        </TwitterButton>
        <Button onClick={newQuote}>Next</Button>
      </ButtonContainer>
    </QuoteContainer>
  );
};
