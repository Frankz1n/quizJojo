import "./App.css";
import ModalFive from "./components/Modals/ModalFive";
import ModalFour from "./components/Modals/ModalFour";
import ModalOne from "./components/Modals/ModalOne";
import ModalThree from "./components/Modals/ModalThree";
import ModalTwo from "./components/Modals/ModalTwo";
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
  });

  const handleSelectQuestion = (optionQuestion, nextQuestion) => {
    setAnswer({
      ...answer,
      [optionQuestion]: answer[optionQuestion] + 1,
    });
    setCurrentQuestion(nextQuestion);
  };

  const modals = {
    1: <ModalOne handleSelectQuestion={handleSelectQuestion} />,
    2: <ModalTwo handleSelectQuestion={handleSelectQuestion} />,
    3: <ModalThree handleSelectQuestion={handleSelectQuestion} />,
    4: <ModalFour handleSelectQuestion={handleSelectQuestion} />,
    5: <ModalFive handleSelectQuestion={handleSelectQuestion} />,
    6: <ResultQuiz answer={answer} />,
  };

  return (
    <div className="App">
      <StartQuiz />
      <button onClick={() => setOpenModal(true)}>Iniciar quiz</button>
      {openModal && modals[currentQuestion]}
    </div>
  );
}

export default App;
