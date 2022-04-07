import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import {
  QuoteContainer,
  QuoteText,
  QuoteAuthor,
  ButtonContainer,
  Button,
  TwitterButton,
} from "./quote.styles";

const Quote = () => (
  <QuoteContainer>
    {/* Quote */}
    <div className="quote-text">
      <FontAwesomeIcon icon={faQuoteLeft} size="2xl" />
      <QuoteText long>
        Mollit elit irure cupidatat labore velit quis veniam tempor esse nisi
        quis.
      </QuoteText>
      <FontAwesomeIcon icon={faQuoteRight} size="2xl" />
    </div>
    {/* Author */}
    <QuoteAuthor>
      <span className="author">Lorem Ipsum</span>
    </QuoteAuthor>
    {/* Buttons */}
    <ButtonContainer>
      <TwitterButton>
        <FontAwesomeIcon icon={faTwitter} />
      </TwitterButton>
      <Button>New Quote</Button>
    </ButtonContainer>
  </QuoteContainer>
);

export default Quote;
