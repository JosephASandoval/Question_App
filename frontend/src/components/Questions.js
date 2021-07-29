import React from "react";
import Question from "./Question";

const questions = [{ content: "1" }, { content: "2" }, { content: "3" }];

class Questions extends React.Component {
  componentDidMount() {
    // tech questions
  }

  generateQuestionsList = () => {
    let questionsList = questions.map((question, i) => {
      return <Question key={`question-${i}`} question={question} />;
    });

    return questionsList;
  };

  render() {
    return (
      <div>{questions ? this.generateQuestionsList() : "No Questions :("}</div>
    );
  }
}

export default Questions;
