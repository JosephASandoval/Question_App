import React from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { fetchQuestions } from "../actions/question_actions";

const questions = [{ content: "1" }, { content: "2" }, { content: "3" }];

class Questions extends React.Component {
  componentDidMount() {
    // fetch questions
    this.props.fetch();
  }

  generateQuestionsList = () => {
    let questionsList = questions.map((question, i) => {
      return <Question key={`question-${i}`} question={question} />;
    });

    return questionsList;
  };

  render() {
    return (
      <div>{this.props.questions[1] ? this.generateQuestionsList() : "No Questions :("}</div>
    );
  }
}

const msp = (state) => ({
  questions: state.questions ? Object.values(state.questions) : [],
});

const mdp = (dispatch) => ({
  fetch: () => dispatch(fetchQuestions()),
});

export default connect(msp, mdp)(Questions);

// need ability to fetach questions when mounted
// need access to all of the questions after they are fetched
// when do not want every Component access to manipulating the data in the store
