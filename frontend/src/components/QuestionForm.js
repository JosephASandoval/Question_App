import React, { useState } from "react";
import { connect } from "react-redux";
import { submitQuestion } from "../actions/question_actions";

const QuestionForm = ({ submit }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // when you submit a button in a form, html expects that you'll do some work and then refresh the page automatically, however, with react you have a single page app without refreshes.
    submit({ name, content });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          rows="3"
          placeholder="Ask away..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>Submit Question</button>
      </form>
    </div>
  );
};
const mdp = (dispatch) => ({
  submit: (question) => dispatch(submitQuestion(question)),
});

export default connect(null, mdp)(QuestionForm);
