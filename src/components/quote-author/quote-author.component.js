import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../spinner/spinner.component";

import {
  selectWikiUrl,
  selectImgSrc,
  selectQuotesIsLoading,
  selectAuthor,
} from "../../store/quote/quote.selector";

import {
  AuthorContainer,
  AuthorImage,
  AuthorLabel,
  AuthorLink,
} from "./quote-author.styles";

export const QuoteAuthor = () => {
  const imgSrc = useSelector(selectImgSrc);
  const wikiUrl = useSelector(selectWikiUrl);
  const isLoading = useSelector(selectQuotesIsLoading);
  const author = useSelector(selectAuthor);

  return isLoading ? (
    <Spinner />
  ) : (
    <AuthorContainer>
      <AuthorImage src={imgSrc} />
      {wikiUrl ? (
        <AuthorLink
          href={wikiUrl}
          target="_blank"
          alt="click to open wikipedia"
        >
          - {author ?? "Unknown"} -
        </AuthorLink>
      ) : (
        <AuthorLabel>- {author ?? "Unknown"} -</AuthorLabel>
      )}
    </AuthorContainer>
  );
};
