import React from "react";
import Quote from "./components/Quote/quote.container";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./App.styles";
import { theme } from "./infrastructure/theme";
// import "./App.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Quote />
      </div>
    </ThemeProvider>
  );
}

export default App;
