import styled from "styled-components";

export const QuoteTextLabel = styled.span`
  font-size: ${(props) =>
    props.long ? props.theme.fontSizes.h4 : props.theme.fontSizes.h3};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const QuoteTextContainer = styled.div`
  font-size: ${(props) => props.theme.fontSizes.h5};
  color: ${(props) => props.theme.colors.text.secondary};

  /* Media Query: Tablet or Smaller */
  @media screen and (max-width: 1000px) {
    font-size: ${(props) => props.theme.fontSizes.h5};
  }
`;
