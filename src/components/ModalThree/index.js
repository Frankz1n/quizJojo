import OptionQuestionButton from "../OptionQuestionButton";
import "../ModalOne/ModalOne.css";

const ModalThree = ({ handleSelectQuestion }) => {
  return (
      <div className="modal">
        <h1>Escolha um elemento da natureza:</h1>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Ar"}
            img={"/imgs/modal3/ar.png"}
            alt={"imagem do elemento ar."}
            onClick={() => handleSelectQuestion("optionOne", 4)}
          />
          <OptionQuestionButton
            title={"Fogo"}
            img={"/imgs/modal3/fogo.png"}
            alt={"imagem do elemento fogo."}
            onClick={() => handleSelectQuestion("optionTwo", 4)}
          />
        </div>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Terra"}
            img={"/imgs/modal3/terra.png"}
            alt={"imagem do elemento terra."}
            onClick={() => handleSelectQuestion("optionThree", 4)}
          />
          <OptionQuestionButton
            title={"Água"}
            img={"/imgs/modal3/agua.png"}
            alt={"imagem do elemento água."}
            onClick={() => handleSelectQuestion("optionFour", 4)}
          />
        </div>
      </div>
  );
};

export default ModalThree;