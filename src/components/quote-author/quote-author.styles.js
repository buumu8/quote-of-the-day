import styled from "styled-components";

export const AuthorContainer = styled.span`
  margin-top: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-style: italic;
  font-family: ${(props) => props.theme.fonts.headings}, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AuthorImage = styled.img`
  display: ${(props) => (props.src ? "block" : "none")};
  margin-right: 2rem;
  border-radius: 50%;
`;

export const AuthorLabel = styled.span``;

export const AuthorLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text.primary};

  &:hover {
    color: ${(props) => props.theme.colors.brand.primary};
  }
`;
