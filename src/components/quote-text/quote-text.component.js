import React from "react";
import { useSelector } from "react-redux";

import { selectQuotes } from "../../store/quote/quote.selector";
import { selectIndex } from "../../store/quote/quote.selector";

import { Spacer } from "../spacer/spacer.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

import { QuoteTextContainer, QuoteTextLabel } from "./quote-text.styles";

export const QuoteText = () => {
  const quotes = useSelector(selectQuotes);
  const index = useSelector(selectIndex);

  return (
    <QuoteTextContainer>
      <FontAwesomeIcon icon={faCrown} />
      <Spacer position="left" size="large">
        <QuoteTextLabel>{quotes[index].text}</QuoteTextLabel>
      </Spacer>
      <FontAwesomeIcon icon={faCrown} flip="vertical" />
    </QuoteTextContainer>
  );
};
