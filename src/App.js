import './App.css';
import { useEffect, useState } from 'react';
import Question from './Question';

function App() {

  const [question, setQuestion] = useState("");

  const loadNextQuestion = () => {
    fetch("http://localhost:8080/next-question")
      .then(res => res.text())
      .then(result => setQuestion(result))
  }

  useEffect(() => {
    loadNextQuestion()
  }, [])

  return (
    <div className="App">
      <div id="quiz-area">
        <div id="quiz-content">
          <Question loadNextQuestion={loadNextQuestion} question={question} />
        </div>
      </div>
    </div>
  );
}

export default App;
