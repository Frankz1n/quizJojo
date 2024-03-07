import OptionQuestionButton from "../OptionQuestionButton";
import "../ModalOne/ModalOne.css";

const ModalFour = ({ handleSelectQuestion }) => {
  return (
      <div className="modal">
        <h1>Escolha uma atividade de lazer:</h1>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Luta"}
            img={"/imgs/modal4/luta.png"}
            alt={"imagem de luta."}
            onClick={() => handleSelectQuestion("optionOne", 5)}
          />
          <OptionQuestionButton
            title={"Jogar"}
            img={"/imgs/modal4/jogar.png"}
            alt={"imagem de pessoas jogando com joystick em mãos."}
            onClick={() => handleSelectQuestion("optionTwo", 5)}
          />
        </div>
        <div className="modal-div">
          <OptionQuestionButton
            title={"Jardinagem"}
            img={"/imgs/modal4/jardinagem.png"}
            alt={"imagem de uma pessoa lidando com plantas."}
            onClick={() => handleSelectQuestion("optionThree", 5)}
          />
          <OptionQuestionButton
            title={"Assistir séries"}
            img={"/imgs/modal4/assistir.png"}
            alt={"imagem de um balde de pipoca com um controle remoto ao lado."}
            onClick={() => handleSelectQuestion("optionFour", 5)}
          />
        </div>
      </div>
  );
};

export default ModalFour;