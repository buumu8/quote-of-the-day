import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

export const Spinner = () => {
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>;
};

export const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) =>
    isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
