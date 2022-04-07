import React, { useEffect, useReducer } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Spacer } from "../spacer/spacer.component";

import {
  QuoteContainer,
  QuoteText,
  QuoteAuthor,
  ButtonContainer,
  Button,
  TwitterButton,
  QuoteTextContainer,
} from "./quote.styles";

export const QUOTE_ACTION_TYPES = {
  GET_ALL_QUOTES: "GET_ALL_QUOTES",
  SET_CURRENT_INDEX: "SET_CURRENT_INDEX",
};
const quoteReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case QUOTE_ACTION_TYPES.GET_ALL_QUOTES:
      return { ...state, quotes: payload };
    case QUOTE_ACTION_TYPES.SET_CURRENT_INDEX:
      return { ...state, index: payload };
    default:
      throw new Error(`Unhandled type ${type} in quoteReducer`);
  }
};
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

const Quote = () => {
  const [state, dispatch] = useReducer(quoteReducer, INITIAL_STATE);
  const { quotes, index } = state;

  const setQuotes = (result) => {
    dispatch({
      type: QUOTE_ACTION_TYPES.GET_ALL_QUOTES,
      payload: result,
    });
  };

  const setIndex = (newIndex) => {
    dispatch({ type: QUOTE_ACTION_TYPES.SET_CURRENT_INDEX, payload: newIndex });
  };

  useEffect(() => {
    new Promise((resolve, response) => {
      const apiUrl = "https://type.fit/api/quotes";
      fetch(apiUrl)
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
          setQuotes(result);
        })
        .catch((e) => console.log(e));
    });
  }, []);

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes[index].text} - ${quotes[index].author}`;
    window.open(twitterUrl, "_blank");
  };

  const newQuote = () => {
    const newIndex = Math.floor(Math.random() * quotes.length);
    setIndex(newIndex);
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
      {/* Buttons */}
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
