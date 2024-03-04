import "./App.css";
import ModalOne from "./components/ModalOne";
import ModalTwo from "./components/ModalTwo";
import ResultQuiz from "./components/ResultQuiz";
import StartQuiz from "./components/StartQuiz";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer, setAnswer] = useState({
    optionOne: 0,
    optionTwo: 0,
    optionThree: 0,
    optionFour: 0,
  })


  const handleSelectQuestion = (optionQuestion, nextQuestion) => {
    setAnswer({
      ...answer,
      [optionQuestion]: answer[optionQuestion] + 1 
    })
    setCurrentQuestion(nextQuestion)
  }

  console.log({openModal}, {currentQuestion}, {answer})

  const modals = {
    1: <ModalOne
    handleSelectQuestion={handleSelectQuestion}
    />,
    2: <ModalTwo 
    handleSelectQuestion={handleSelectQuestion}
  />,
  3: <ResultQuiz answer={answer}/>
  }

  return (
    <div className="App">
      <StartQuiz />
      <button onClick={() => setOpenModal(true)}>Iniciar quiz</button>
      {
        openModal && modals[currentQuestion]
      }
    </div>
  );
}

export default App;
