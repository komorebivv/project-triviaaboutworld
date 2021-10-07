import React, { useState } from 'react';
import questions from '../questions';


const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        } 

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }


    }; 	return (
    <div className='quiz'>
                <div className="container">

        {showScore ? (
            <div className='score-section'>
                You scored {score} out of {questions.length}
            </div>
        ) : (
            <>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className='question-text'>{questions[currentQuestion].question}</div>
                </div>
                <div className='answer-section'>
                    {questions[currentQuestion].answers.map((answer) => (
                        <button className="quiz-buttons" onClick={() => handleAnswerOptionClick(answer.isCorrect)}>{answer.answer}</button>
                    ))}
                </div>
            </>
        )}
    </div></div>
);

}   

export default Quiz