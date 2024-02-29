import "./App.css";
import ModalOne from "./components/ModalOne";
import StartQuiz from "./components/StartQuiz";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <StartQuiz></StartQuiz>
      <button onClick={() => setOpenModal(true)}>Iniciar quiz</button>
      <ModalOne isOpen={openModal}></ModalOne>
    </div>
  );
}

export default App;
