import React from "react";
import styled, { useTheme } from "styled-components";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  bottom: "marginBottom",
  right: "marginRigth",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  return `${property}:${theme.space[sizeIndex]}`;
};

const SpacerDiv = styled.div`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerDiv variant={variant}>{children}</SpacerDiv>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
