import React from "react";
import logo from "./assets/images/logo.svg";
import codeTestSample from "./assets/images/codeTestSample.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Mutual Mobile React Code Test</p>
        <img
          src={codeTestSample}
          className="Code-test-sample"
          alt="codeTestSample"
        />
      </header>
    </div>
  );
}

export default App;
