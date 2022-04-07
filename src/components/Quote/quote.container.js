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
      <FontAwesomeIcon icon={faQuoteLeft} />
      <QuoteText long>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        accusamus dolore, harum odio optio nam praesentium architecto et
        temporibus esse dolor suscipit vero cupiditate deleniti voluptate
        ducimus, eligendi quae itaque.
      </QuoteText>
      <FontAwesomeIcon icon={faQuoteRight} />
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
