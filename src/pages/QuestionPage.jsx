import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { questions } from "../data";
import { useDispatch } from "react-redux";
import { addScore, reduceScore } from "../store/userSlice";

export const QuestionPage = () => {
  const { id } = useParams();
  const question = questions.find((q) => q.id === parseInt(id));
  const options = Object.values(question.options);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    if (answer === question.options[question.correctAnswer]) {
      dispatch(addScore(100));
    } else {
      dispatch(reduceScore(100));
    }
    question.isAnswered = true;
    navigate("/")
  };

  return (
    <div className="question-page">
      <h2>{question?.question}</h2>

      <div className="answers">
        {options.map((option) => (
          <p
            key={option}
            className="option"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};
