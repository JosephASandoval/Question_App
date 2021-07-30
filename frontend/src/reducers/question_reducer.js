// after the data comes from the backend via our actions, our reducers allow us to structure and put the data into an object
// does not directly manipulate the data, instead, we get the data in and the reducer updates the object so that we have access to various bit of data
// this then updates the redux store
// our questions form and questions never get direct access to the state
// redux does all of the state management for us
// better to objects of objects in your state than array of objects because you can delete by id rathan than index, thus, it is easier.
// addCase allow us to not make a duplicate state, but state here is the single source of truth
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  questions: {},
};

export const questionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("RECEIVE_QUESTIONS", (state, action) => {
      const questions = {};
      action.payload.map((question) => (questions[question._id] = question));
      state.questions = questions;
    })
    .addCase("RECEIVE_QUESTION", (state, action) => {
      state.questions[action.payload._id] = action.payload;
    });
});
