import React from 'react'
import { questions } from '../data'
import { Question } from './Question'
import { useNavigate } from 'react-router-dom'

export const Questions = () => {
    const navigate = useNavigate();
    const handleClick = (question) => {
        navigate(`questions/${question.id}`);
    }
  return (
    <div className='questions-list'>
        {
            questions?.map(question => {
                return <Question handleQuestionClick={() => handleClick(question)} key={question.question} question={question}/>
            })
        }
    </div>
  )
}
