import styled, { css } from "styled-components";

export const QuoteTextContainer = styled.div`
  font-size: ${(props) => props.theme.fontSizes.h5};
  color: ${(props) => props.theme.colors.text.secondary};

  /* Media Query: Tablet or Smaller */
  @media screen and (max-width: 1000px) {
    font-size: ${(props) => props.theme.fontSizes.h5};
  }
`;

export const QuoteContainer = styled.div`
  width: auto;
  max-width: 900px;
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[0]};
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1000px) {
    margin: auto ${(props) => props.theme.space[2]};
  }
`;

export const QuoteText = styled.span`
  font-size: ${(props) =>
    props.long ? props.theme.fontSizes.h4 : props.theme.fontSizes.h3};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const QuoteAuthor = styled.span`
  margin-top: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-style: italic;
  font-family: ${(props) => props.theme.fonts.headings}, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  margin-top: ${(props) => props.theme.space[3]};
  display: flex;
  justify-content: space-between;
`;

const baseButtonStyles = css`
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.title};
  height: ${(props) => props.theme.space[4]};
  border: none;
  border-radius: ${(props) => props.theme.sizes[0]};
  color: ${(props) => props.theme.colors.bg.primary};
  background: ${(props) => props.theme.colors.ui.primary};
  outline: none;
  padding: ${(props) => props.theme.space[1]} ${(props) => props.theme.space[4]};
  box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);

  &:hover {
    filter: brightness(110%);
    background-color: ${(props) => props.theme.colors.brand.primary};
  }

  &:active {
    transform: translate(0, 0.3rem);
    box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
  }
`;

export const Button = styled.button`
  ${baseButtonStyles}
`;

export const TwitterButton = styled.button`
  ${baseButtonStyles}
  :hover {
    color: #38a1f3;
    background-color: ${(props) => props.theme.colors.ui.primary};
  }
`;
