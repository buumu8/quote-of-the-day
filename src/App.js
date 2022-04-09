import React from "react";
import { Quote } from "./components/quote/quote.component";
import { GlobalStyle, AppTitle, Footer } from "./App.styles";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

// import "./App.scss";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ErrorBoundary>
        <AppTitle>Quote of the day</AppTitle>
        <Quote />
      </ErrorBoundary>
      <Footer>
        All right reserved &copy; {new Date().getFullYear()} Jettapol Tuetrakul
      </Footer>
    </div>
  );
}

export default App;
