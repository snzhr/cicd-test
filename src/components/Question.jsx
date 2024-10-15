import React from "react";
import { useParams } from "react-router-dom";

export const Question = ({ question, handleQuestionClick }) => {
  return <button className={`question-card`} disabled={question.isAnswered} onClick={handleQuestionClick}>{question?.question}</button>;
};
