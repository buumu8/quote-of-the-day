import React from "react";
import QuoteContainer from "./components/quote-container/quote-container.component";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./App.styles";
import { theme } from "./infrastructure/theme";
// import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <QuoteContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
