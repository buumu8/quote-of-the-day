import React from "react";
import QuoteContainer from "./components/quote-container/quote-container.component";

import { GlobalStyle } from "./App.styles";

// import "./App.scss";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <QuoteContainer />
    </div>
  );
}

export default App;
