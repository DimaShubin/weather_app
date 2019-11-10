import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState(false);
  const clickHandler = () => {
    setMessage(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        {!message ? (
          <button type="button" onClick={() => clickHandler()}>
            Click me!
          </button>
        ) : (
          `Anton don't worry, be happy! You'll finish this task and get this fucking job!!!`
        )}
      </header>
    </div>
  );
}

export default App;
