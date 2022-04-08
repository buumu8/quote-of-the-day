import React from "react";
import { Quote } from "./components/quote/quote.component";
import { GlobalStyle, AppTitle } from "./App.styles";

// import "./App.scss";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AppTitle>Quote of the day</AppTitle>
      <Quote />
    </div>
  );
}

export default App;
