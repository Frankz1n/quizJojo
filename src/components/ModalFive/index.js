import OptionQuestionButton from "../OptionQuestionButton";
import "../ModalOne/ModalOne.css";

const ModalFive = ({ handleSelectQuestion }) => {
  return (
      <div className="modal">
        <h1>Escolha um destino:</h1>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Japão"}
            img={"/imgs/modal5/japao.png"}
            alt={"imagem de um templo japonês."}
            onClick={() => handleSelectQuestion("optionOne", 6)}
          />
          <OptionQuestionButton
            title={"Inglaterra"}
            img={"/imgs/modal5/inglaterra.png"}
            alt={"imagem do big ben."}
            onClick={() => handleSelectQuestion("optionTwo", 6)}
          />
        </div>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Itália"}
            img={"/imgs/modal5/italia.png"}
            alt={"imagem da torre de pisa."}
            onClick={() => handleSelectQuestion("optionThree", 6)}
          />
          <OptionQuestionButton
            title={"França"}
            img={"/imgs/modal5/franca.png"}
            alt={"imagem da torre eiffel."}
            onClick={() => handleSelectQuestion("optionFour", 6)}
          />
        </div>
      </div>
  );
};

export default ModalFive;