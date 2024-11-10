import { useState } from 'react';
import './App.css';

function Question({
    question,
    loadNextQuestion
}) {

    const [answer, setAnswer] = useState("");
    const [result, setResult] = useState("");

    const checkAnswer = () => {
        const encodedAnswer = encodeURIComponent(answer);
        const encodedQuestion = encodeURIComponent(question);

        fetch(`http://localhost:8080/submit-answer?question=${encodedQuestion}&answer=${encodedAnswer}`)
            .then(res => res.text())
            .then(result => setResult(result))
    }

    const submitAnswer = () => {
        setResult("")
        setAnswer("")
        loadNextQuestion()
    }

    return (
        <div id="question-container">
            <div id="next-question">
                <button onClick={submitAnswer}>
                    Next Question
                </button>
            </div>
            <label htmlFor="answer-input" id="question-label">{question}</label>
            <input
                id="answer-input" name="answer"
                type="text"
                placeholder="Type your answer here"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)} />

            <button onClick={checkAnswer}>
                Submit Answer
            </button>
            <div id="result">{result}</div>
        </div>
    )
}

export default Question;