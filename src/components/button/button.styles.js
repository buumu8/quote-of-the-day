import styled, { css } from "styled-components";

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

const extendsTwitterButton = css`
  :hover {
    color: #38a1f3;
    background-color: ${(props) => props.theme.colors.ui.primary};
  }
`;

export const CustomButton = styled.button`
  ${baseButtonStyles}
  ${(props) => props.isTwitter && extendsTwitterButton}
`;
