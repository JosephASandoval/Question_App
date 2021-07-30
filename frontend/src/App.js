import React from "react";
import Questions from "./components/Questions";
import QuestionForm from "./components/QuestionForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuestionForm />
        <Questions />
      </header>
    </div>
  );
}

export default App;
