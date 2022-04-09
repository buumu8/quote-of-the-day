import React from "react";

import { CustomButton } from "./button.styles";

export const Button = ({ children, ...otherProps }) => (
  <CustomButton {...otherProps}>{children}</CustomButton>
);
