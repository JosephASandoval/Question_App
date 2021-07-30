import React, { useState } from "react";

const QuestionForm = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault(); // when you submit a button in a form, html expects that you'll do some work and then refresh the page automatically, however, with react you have a single page app without refreshes.
    
    console.log("submitted")
  }

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

export default QuestionForm;
