import React from "react";
import { Quote } from "./components/quote/quote.component";
import { GlobalStyle } from "./App.styles";

// import "./App.scss";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Quote />
    </div>
  );
}

export default App;
