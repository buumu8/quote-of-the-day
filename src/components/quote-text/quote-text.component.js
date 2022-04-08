import React from "react";
import { useSelector } from "react-redux";

import Spinner from "../spinner/spinner.component";

import {
  selectText,
  selectQuotesIsLoading,
} from "../../store/quote/quote.selector";

import { Spacer } from "../spacer/spacer.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

import { QuoteTextContainer, QuoteTextLabel } from "./quote-text.styles";

export const QuoteText = () => {
  const text = useSelector(selectText);
  const isLoading = useSelector(selectQuotesIsLoading);

  return isLoading ? (
    <Spinner />
  ) : (
    <QuoteTextContainer>
      <FontAwesomeIcon icon={faCrown} />
      <Spacer position="left" size="large">
        {
          // Render if text exist
          text && (
            <QuoteTextLabel long={text.length > 120 ?? "long"}>
              {text}
            </QuoteTextLabel>
          )
        }
      </Spacer>
      <FontAwesomeIcon icon={faCrown} flip="vertical" />
    </QuoteTextContainer>
  );
};
