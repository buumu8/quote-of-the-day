import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Spacer } from "../spacer/spacer.component";

import { setIndex, setQuotes } from "../../store/quote/quote.action";

import { selectQuotes, selectIndex } from "../../store/quote/quote.selector";

import {
  QuoteContainer,
  QuoteText,
  QuoteAuthor,
  ButtonContainer,
  Button,
  TwitterButton,
  QuoteTextContainer,
} from "./quote.styles";

const Quote = () => {
  const dispatch = useDispatch();

  const quotes = useSelector(selectQuotes);
  const index = useSelector(selectIndex);

  useEffect(() => {
    new Promise((resolve, response) => {
      const apiUrl = "https://type.fit/api/quotes";
      fetch(apiUrl)
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
          dispatch(setQuotes(result));
        })
        .catch((e) => console.log(e));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes[index].text} - ${quotes[index].author}`;
    window.open(twitterUrl, "_blank");
  };

  const newQuote = () => {
    const newIndex = Math.floor(Math.random() * quotes.length);
    dispatch(setIndex(newIndex));
  };

  return (
    <QuoteContainer>
      <QuoteTextContainer>
        <FontAwesomeIcon icon={faCrown} />
        <Spacer position="left" size="large">
          <QuoteText>{quotes[index].text}</QuoteText>
        </Spacer>
        <FontAwesomeIcon icon={faCrown} flip="vertical" />
      </QuoteTextContainer>
      <QuoteAuthor>
        <span className="author">- {quotes[index].author ?? "Unknown"} -</span>
      </QuoteAuthor>
      <ButtonContainer>
        <TwitterButton onClick={tweetQuote}>
          <FontAwesomeIcon icon={faTwitter} />
        </TwitterButton>
        <Button onClick={newQuote}>New Quote</Button>
      </ButtonContainer>
    </QuoteContainer>
  );
};

export default Quote;
