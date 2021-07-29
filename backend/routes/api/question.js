const express = require("express");
const router = express.Router();
const Question = require("../../models/question");

router.get("/", (req, res) => {
  Question.find()
    .then((questions) => res.json(questions))
    .catch((err) =>
      res.status(404).json({ questionsNotFound: "No questions found" })
    );
});
