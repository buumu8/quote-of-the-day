import React, { useState, useEffect } from "react";

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

const Quote = () => {
  const [quotes, setQuotes] = useState([
    {
      text: `Mollit elit irure cupidatat labore velit quis veniam tempor esse
      nisi quis.`,
      author: "Loren Ipsum",
    },
  ]);

  const [index, setIndex] = useState(0);

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
        <span className="author">- {quotes[index].author} -</span>
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
