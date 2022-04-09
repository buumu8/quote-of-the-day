import React, { Component } from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "./error-boundary.styles";

import { Button } from "../button/button.component";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrored: false,
      errorMessage: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true, errorMessage: error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasErrored: error,
      errorMessage: errorInfo,
    });
  }

  render() {
    if (this.state.hasErrored) {
      console.log(this.state.errorMessage);
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/O0DCcQy.png" />
          <ErrorImageText>Sorry this page is broken.</ErrorImageText>
          <Button onClick={() => window.location.reload()}>Refresh</Button>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
