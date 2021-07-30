// need ability to submit a question
// need ability to fetch questions when mounted
// need acces to all of the questions after they are fetched

import axios from "axios"; // axios takes care of the stringify on a POST request
import { createAction } from "@reduxjs/toolkit";

export const receiveQuestions = createAction("RECEIVE_QUESTIONS");
export const receiveQuestion = createAction("RECEIVE_QUESTION");

export const fetchQuestions = () => async (dispatch) => {
  // return value = question {}
  try {
    const res = await axios.get("URL"); // only connection of frontend to backend
    dispatch(receiveQuestions(res.data)); // many questions
  } catch (err) {
    console.log("oh no! questions are broken :(");
  }
};

export const submitQuestion = (question) => async (dispatch) => {
  // return value = question {}
  try {
    const res = await axios.post("URL", question); // only connection of frontend to backend
    dispatch(receiveQuestion(res.data)); // one question
  } catch (err) {
    console.log("oh no! question is broken :(");
  }
};


// async await is the more modern way to do it rather than promise chaining

// these are thunk action creators that wait until the data is received before dispatching to store